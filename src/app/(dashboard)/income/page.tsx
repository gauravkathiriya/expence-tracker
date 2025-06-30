"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"

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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Income</h1>
        <Button asChild>
          <Link href="/income/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Income
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Income</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="h-12 animate-pulse rounded bg-muted" />
              ))}
            </div>
          ) : incomeData.length > 0 ? (
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
    </div>
  )
} 