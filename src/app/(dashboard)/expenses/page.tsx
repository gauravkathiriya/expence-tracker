"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { PlusCircle, Pencil, Trash2, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import { formatCurrency, formatDate } from "@/lib/utils"
import { Transaction, Category } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { TransactionTableSkeleton } from "@/components/transactions/transaction-skeleton"
import { PageHeader } from "@/components/layout/page-header"

export default function ExpensesPage() {
  const [loading, setLoading] = useState(true)
  const [expensesData, setExpensesData] = useState<Transaction[]>([])

  const fetchData = async () => {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        return
      }

      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", user.id)
        .eq("category", Category.Expense)
        .order("date", { ascending: false })

      if (error) {
        throw error
      }

      setExpensesData(data as Transaction[])
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading expense data",
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        throw new Error("User not authenticated")
      }

      const { error } = await supabase
        .from("transactions")
        .delete()
        .eq("id", id)
        .eq("user_id", user.id)

      if (error) {
        throw error
      }

      toast({
        title: "Expense deleted",
      })

      // Refresh data
      fetchData()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting expense",
        description: error.message,
      })
    }
  }

  return (
    <div className="container space-y-6 py-8">
      {loading ? (
        <TransactionTableSkeleton />
      ) : (
        <>
          <PageHeader
            title="Expenses"
            description="Track and manage your expense transactions"
            icon={CreditCard}
          >
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/expenses/new">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
              </Link>
            </Button>
          </PageHeader>

          <Card>
            <CardHeader>
              <CardTitle>All Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              {expensesData.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expensesData.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell>{formatDate(expense.date)}</TableCell>
                    <TableCell>{expense.description || "-"}</TableCell>
                    <TableCell>
                      {expense.type.charAt(0).toUpperCase() + expense.type.slice(1)}
                    </TableCell>
                    <TableCell className="text-right font-medium text-red-600">
                      {formatCurrency(expense.amount)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                        >
                          <Link href={`/expenses/edit/${expense.id}`}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(expense.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-6">
              <p className="text-muted-foreground">No expense entries yet.</p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/expenses/new">Add your first expense</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      </>
      )}
    </div>
  )
} 