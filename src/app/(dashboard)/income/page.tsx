"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { PlusCircle, Pencil, Trash2, TrendingUp } from "lucide-react"

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

export default function IncomePage() {
  const [loading, setLoading] = useState(true)
  const [incomeData, setIncomeData] = useState<Transaction[]>([])

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
        .eq("category", Category.Income)
        .order("date", { ascending: false })

      if (error) {
        throw error
      }

      setIncomeData(data as Transaction[])
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading income data",
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
        title: "Income deleted",
      })

      // Refresh data
      fetchData()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting income",
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
            title="Income"
            description="Track and manage your income transactions"
            icon={TrendingUp}
          >
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/income/new">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Income
              </Link>
            </Button>
          </PageHeader>

          <Card>
            <CardHeader>
              <CardTitle>All Income</CardTitle>
            </CardHeader>
            <CardContent>
              {incomeData.length > 0 ? (
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
                    {incomeData.map((income) => (
                      <TableRow key={income.id}>
                        <TableCell>{formatDate(income.date)}</TableCell>
                        <TableCell>{income.description || "-"}</TableCell>
                        <TableCell>
                          {income.type.charAt(0).toUpperCase() + income.type.slice(1)}
                        </TableCell>
                        <TableCell className="text-right font-medium text-green-600">
                          {formatCurrency(income.amount)}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                            >
                              <Link href={`/income/edit/${income.id}`}>
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(income.id)}
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
                  <p className="text-muted-foreground">No income entries yet.</p>
                  <Button asChild variant="link" className="mt-2">
                    <Link href="/income/new">Add your first income</Link>
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