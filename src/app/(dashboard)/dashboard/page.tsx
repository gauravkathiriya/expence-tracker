"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { formatCurrency } from "@/lib/utils"
import { Transaction, Category } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/income/new">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Income
            </Link>
          </Button>
          <Button asChild>
            <Link href="/expenses/new">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Income</CardTitle>
            <CardDescription>Your total income to date</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-6 w-28 animate-pulse rounded bg-muted" />
            ) : (
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(totalIncome)}
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Expense</CardTitle>
            <CardDescription>Your total expenses to date</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-6 w-28 animate-pulse rounded bg-muted" />
            ) : (
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(totalExpense)}
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Balance</CardTitle>
            <CardDescription>Current balance</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-6 w-28 animate-pulse rounded bg-muted" />
            ) : (
              <p className={`text-2xl font-bold ${totalIncome - totalExpense >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(totalIncome - totalExpense)}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your recent 5 transactions</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="h-12 animate-pulse rounded bg-muted" />
              ))}
            </div>
          ) : recentTransactions.length > 0 ? (
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{transaction.description || transaction.type}</p>
                    <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                  <p className={`font-medium ${transaction.category === Category.Income ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.category === Category.Income ? '+' : '-'}
                    {formatCurrency(transaction.amount)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No transactions yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 