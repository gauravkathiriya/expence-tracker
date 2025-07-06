"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardStats } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { formatCurrency } from "@/lib/utils"
import { Transaction, Category, TransactionType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpCircle, ArrowDownCircle, BarChart3, TrendingUp, DollarSign, CreditCard, LayoutDashboard, ChartBar, PlusCircle, Wallet, ArrowRight } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { DashboardStatsSkeleton, RecentTransactionsSkeleton } from "@/components/transactions/transaction-skeleton"
import { PageHeader } from "@/components/layout/page-header"
import { ChartCards } from "@/components/dashboard/chart-cards"
import { ExportData } from "@/components/transactions/export-data"

// Helper to format month names
const getMonthName = (monthIndex: number) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])
  const [monthlyData, setMonthlyData] = useState<{ month: string; income: number; expense: number; savings: number }[]>([])
  const [categoryData, setCategoryData] = useState<{ name: string; value: number }[]>([])
  const [showCharts, setShowCharts] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          return
        }

        // Fetch all transactions
        const { data: transactions, error: transactionsError } = await supabase
          .from('transactions')
          .select('*')
          .eq('user_id', user.id)
        
        if (transactionsError) {
          throw transactionsError
        }

        const typedTransactions = transactions as Transaction[]

        // Calculate totals
        const incomeTotal = typedTransactions
          .filter(t => t.category === Category.Income)
          .reduce((sum, item) => sum + Number(item.amount), 0)
        
        const expenseTotal = typedTransactions
          .filter(t => t.category === Category.Expense)
          .reduce((sum, item) => sum + Number(item.amount), 0)

        setTotalIncome(incomeTotal)
        setTotalExpense(expenseTotal)

        // Get recent transactions
        const recentData = [...typedTransactions]
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5)
        
        setRecentTransactions(recentData)

        // Process transactions for charts
        processTransactionsForCharts(typedTransactions)
      } catch (error: unknown) {
        toast({
          variant: "destructive",
          title: "Error loading data",
          description: error instanceof Error ? error.message : "An unknown error occurred",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const processTransactionsForCharts = (transactions: Transaction[]) => {
    // Process monthly data
    const monthlyDataMap = new Map<string, { income: number, expense: number }>()
    
    // Get current month and the last 5 months
    const today = new Date()
    for (let i = 0; i < 6; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
      const monthYear = `${getMonthName(date.getMonth())} ${date.getFullYear()}`
      monthlyDataMap.set(monthYear, { income: 0, expense: 0 })
    }

    // Populate monthly data
    transactions.forEach(transaction => {
      const transDate = new Date(transaction.date)
      const monthYear = `${getMonthName(transDate.getMonth())} ${transDate.getFullYear()}`
      
      if (monthlyDataMap.has(monthYear)) {
        const current = monthlyDataMap.get(monthYear)!
        if (transaction.category === Category.Income) {
          current.income += Number(transaction.amount)
        } else {
          current.expense += Number(transaction.amount)
        }
        monthlyDataMap.set(monthYear, current)
      }
    })

    // Convert map to array for recharts and add savings
    const monthlyDataArray = Array.from(monthlyDataMap.entries())
      .map(([month, data]) => ({
        month,
        income: data.income,
        expense: data.expense,
        savings: data.income - data.expense
      }))
      .reverse() // Show earliest month first

    setMonthlyData(monthlyDataArray)

    // Process category data for pie chart
    const expensesByType = new Map<TransactionType, number>()
    
    transactions
      .filter(t => t.category === Category.Expense)
      .forEach(transaction => {
        const currentAmount = expensesByType.get(transaction.type) || 0
        expensesByType.set(transaction.type, currentAmount + Number(transaction.amount))
      })
    
    const categoryDataArray = Array.from(expensesByType.entries())
      .map(([type, value]) => ({
        name: type.charAt(0).toUpperCase() + type.slice(1), // Capitalize first letter
        value
      }))
      .filter(item => item.value > 0) // Only include categories with spending
    
    setCategoryData(categoryDataArray)
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Financial Dashboard"
          description="Track, analyze, and optimize your financial health"
          icon={LayoutDashboard}
        >
          <div className="flex items-center gap-2">
            <ExportData data={recentTransactions} filename="all_transactions" />
            <Button asChild variant="gradient">
              <Link href="/income/new">
                <PlusCircle className="mr-2 h-4 w-4" /> New Transaction
              </Link>
            </Button>
          </div>
        </PageHeader>
      </div>

      {loading ? (
        <DashboardStatsSkeleton />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardStats type="income" className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-income" /> Total Income
              </CardTitle>
              <CardDescription>Your total income to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-income">
                  {formatCurrency(totalIncome)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">lifetime</p>
              </div>
              <div className="mt-4">
                <Button variant="ghost" size="sm" className="px-0 text-income" asChild>
                  <Link href="/income">
                    View Income <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </CardStats>
          
          <CardStats type="expense" className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-expense" /> Total Expense
              </CardTitle>
              <CardDescription>Your total expenses to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-expense">
                  {formatCurrency(totalExpense)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">lifetime</p>
              </div>
              <div className="mt-4">
                <Button variant="ghost" size="sm" className="px-0 text-expense" asChild>
                  <Link href="/expenses">
                    View Expenses <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </CardStats>
          
          <CardStats className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-primary" /> Balance
              </CardTitle>
              <CardDescription>Current balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className={`text-3xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-income' : 'text-expense'}`}>
                  {formatCurrency(totalIncome - totalExpense)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">available</p>
              </div>
              <div className="mt-4">
                <Button variant="glass" size="sm" className="shadow-sm" onClick={() => setShowCharts(!showCharts)}>
                  {showCharts ? "Hide Analytics" : "View Analytics"}
                </Button>
              </div>
            </CardContent>
          </CardStats>
        </div>
      )}

      <div className="flex items-center justify-between mt-10">
        <h2 className="text-xl font-bold tracking-tight flex items-center">
          <ChartBar className="mr-2 h-5 w-5 text-primary" /> Financial Analytics
        </h2>
        <Button
          variant="outline"
          onClick={() => setShowCharts(!showCharts)}
          className="border-primary/20 hover:border-primary/40"
        >
          {showCharts ? "Hide Charts" : "Show Charts"}
        </Button>
      </div>

      {showCharts && (
        <ChartCards 
          monthlyData={monthlyData} 
          categoryData={categoryData} 
          isLoading={loading} 
        />
      )}

      <Card variant="glass" className="card-shadow">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-primary" /> Recent Transactions
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href="/expenses">
                View All
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <RecentTransactionsSkeleton />
          ) : recentTransactions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-3">
                <CreditCard className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No transactions yet</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Start tracking your finances by adding your first income or expense transaction.
              </p>
              <div className="mt-6 flex gap-2">
                <Button asChild variant="success" size="sm">
                  <Link href="/income/new">
                    <ArrowUpCircle className="mr-2 h-4 w-4" /> Add Income
                  </Link>
                </Button>
                <Button asChild variant="destructive" size="sm">
                  <Link href="/expenses/new">
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Add Expense
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="divide-y">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`rounded-full p-2 ${
                      transaction.category === Category.Income 
                        ? 'bg-green-100 dark:bg-green-900/30' 
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      {transaction.category === Category.Income ? (
                        <ArrowUpCircle className="h-5 w-5 text-income" />
                      ) : (
                        <ArrowDownCircle className="h-5 w-5 text-expense" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString()} • {transaction.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-medium ${
                      transaction.category === Category.Income ? 'text-income' : 'text-expense'
                    }`}>
                      {transaction.category === Category.Income ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </span>
                    <Button variant="ghost" size="icon-sm" asChild className="ml-2">
                      <Link href={`/${transaction.category === Category.Income ? 'income' : 'expenses'}/edit/${transaction.id}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 