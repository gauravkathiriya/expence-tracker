"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { formatCurrency } from "@/lib/utils"
import { Transaction, Category, TransactionType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, ArrowUpCircle, ArrowDownCircle, BarChart3, Clock, TrendingUp, DollarSign, CreditCard, LayoutDashboard, ChartBar } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
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
  const [monthlyData, setMonthlyData] = useState<any[]>([])
  const [categoryData, setCategoryData] = useState<any[]>([])
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
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error loading data",
          description: error.message,
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
    <div className="container space-y-8 py-8">
      <PageHeader
        title="Dashboard"
        description="Manage your finances and track your spending"
        icon={LayoutDashboard}
      >
        <div className="flex items-center gap-2">
          <ExportData data={recentTransactions} filename="all_transactions" />
          <Button asChild variant="default" className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/income/new">
              <ArrowUpCircle className="mr-2 h-4 w-4" /> Add Income
            </Link>
          </Button>
          <Button asChild variant="default" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/expenses/new">
              <ArrowDownCircle className="mr-2 h-4 w-4" /> Add Expense
            </Link>
          </Button>
        </div>
      </PageHeader>

      {loading ? (
        <DashboardStatsSkeleton />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden border-none shadow-md rounded-xl transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Income</CardTitle>
              <CardDescription>Your total income to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-green-600">
                  {formatCurrency(totalIncome)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">lifetime</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-md rounded-xl transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
              <CreditCard className="h-6 w-6 text-red-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Expense</CardTitle>
              <CardDescription>Your total expenses to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-red-600">
                  {formatCurrency(totalExpense)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">lifetime</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-md rounded-xl transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Balance</CardTitle>
              <CardDescription>Current balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <p className={`text-3xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(totalIncome - totalExpense)}
                </p>
                <p className="ml-2 text-sm text-muted-foreground">available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight flex items-center">
          <ChartBar className="mr-2 h-5 w-5" /> Analytics
        </h2>
        <Button
          variant="outline"
          onClick={() => setShowCharts(!showCharts)}
          className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 dark:from-blue-950 dark:to-purple-950 dark:hover:from-blue-900 dark:hover:to-purple-900 border-blue-200 dark:border-blue-800"
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

      <Card className="border-none shadow-md rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-xl">Recent Transactions</CardTitle>
          <CardDescription className="text-blue-100">
            Your most recent income and expense entries
          </CardDescription>
        </CardHeader>
        {loading ? (
          <div className="p-6">
            <RecentTransactionsSkeleton />
          </div>
        ) : (
          <>
            <CardContent className="p-0">
              {recentTransactions.length > 0 ? (
                <div className="divide-y">
                  {recentTransactions.map((transaction) => (
                    <div 
                      key={transaction.id} 
                      className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900/10 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          transaction.category === Category.Income ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                        }`}>
                          {transaction.category === Category.Income ? (
                            <ArrowUpCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <ArrowDownCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description || transaction.type}</p>
                          <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className={`font-medium ${transaction.category === Category.Income ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.category === Category.Income ? '+' : '-'}
                        {formatCurrency(transaction.amount)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">No transactions yet.</p>
                  <div className="flex gap-2 mt-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href="/income/new">Add Income</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/expenses/new">Add Expense</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
} 