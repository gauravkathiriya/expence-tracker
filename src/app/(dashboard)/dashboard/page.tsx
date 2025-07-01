"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { formatCurrency } from "@/lib/utils"
import { Transaction, Category } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, ArrowUpCircle, ArrowDownCircle, BarChart3, Clock, TrendingUp, DollarSign, CreditCard, LayoutDashboard } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { DashboardStatsSkeleton, RecentTransactionsSkeleton } from "@/components/transactions/transaction-skeleton"
import { PageHeader } from "@/components/layout/page-header"

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          return
        }

        // Fetch total income
        const { data: incomeData, error: incomeError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('user_id', user.id)
          .eq('category', Category.Income)

        if (incomeError) {
          throw incomeError
        }

        // Fetch total expense
        const { data: expenseData, error: expenseError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('user_id', user.id)
          .eq('category', Category.Expense)

        if (expenseError) {
          throw expenseError
        }

        // Fetch recent transactions
        const { data: recentData, error: recentError } = await supabase
          .from('transactions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(5)

        if (recentError) {
          throw recentError
        }

        const incomeTotal = incomeData?.reduce((sum, item) => sum + Number(item.amount), 0) || 0
        const expenseTotal = expenseData?.reduce((sum, item) => sum + Number(item.amount), 0) || 0

        setTotalIncome(incomeTotal)
        setTotalExpense(expenseTotal)
        setRecentTransactions(recentData as Transaction[])
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

  return (
    <div className="container space-y-8 py-8">
      <PageHeader
        title="Dashboard"
        description="Manage your finances and track your spending"
        icon={LayoutDashboard}
      >
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
      </PageHeader>

      {loading ? (
        <DashboardStatsSkeleton />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600" />
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
          <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-red-600" />
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
          <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-600" />
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

      <Card className="border-none shadow-md overflow-hidden">
        {loading ? (
          <div className="p-6">
            <RecentTransactionsSkeleton />
          </div>
        ) : (
          <>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" /> Recent Transactions
                  </CardTitle>
                  <CardDescription>Your recent 5 transactions</CardDescription>
                </div>
                {recentTransactions.length > 0 && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={recentTransactions[0]?.category === Category.Income ? "/income" : "/expenses"}>
                      View All
                    </Link>
                  </Button>
                )}
              </div>
            </CardHeader>
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