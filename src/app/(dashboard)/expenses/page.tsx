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
import { FilterOptions, TransactionFilters } from "@/components/transactions/transaction-filters"
import { ExportData } from "@/components/transactions/export-data"

export default function ExpensesPage() {
  const [loading, setLoading] = useState(true)
  const [expensesData, setExpensesData] = useState<Transaction[]>([])
  const [filteredData, setFilteredData] = useState<Transaction[]>([])
  const [filters, setFilters] = useState<FilterOptions>({
    startDate: "",
    endDate: "",
    type: "all",
    category: Category.Expense,
    sortBy: "date",
    sortOrder: "desc"
  })

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
      setFilteredData(data as Transaction[])
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

  useEffect(() => {
    if (expensesData.length > 0) {
      applyFilters()
    }
  }, [filters, expensesData])

  const applyFilters = () => {
    let result = [...expensesData]

    // Filter by date range
    if (filters.startDate) {
      result = result.filter(expense => 
        new Date(expense.date) >= new Date(filters.startDate)
      )
    }

    if (filters.endDate) {
      result = result.filter(expense => 
        new Date(expense.date) <= new Date(filters.endDate)
      )
    }

    // Filter by type
    if (filters.type !== "all") {
      result = result.filter(expense => expense.type === filters.type)
    }

    // Sort by selected field
    result.sort((a, b) => {
      if (filters.sortBy === "date") {
        return filters.sortOrder === "asc" 
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return filters.sortOrder === "asc"
          ? a.amount - b.amount
          : b.amount - a.amount
      }
    })

    setFilteredData(result)
  }

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  const resetFilters = () => {
    setFilters({
      startDate: "",
      endDate: "",
      type: "all",
      category: Category.Expense,
      sortBy: "date",
      sortOrder: "desc"
    })
  }

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
            <div className="flex items-center gap-3">
              <ExportData data={filteredData} filename="expenses" />
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/expenses/new">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
                </Link>
              </Button>
            </div>
          </PageHeader>

          <TransactionFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>All Expenses</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {filteredData.length} {filteredData.length === 1 ? 'expense' : 'expenses'} found
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredData.length > 0 ? (
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
                    {filteredData.map((expense) => (
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
                  <p className="text-muted-foreground">No expense entries found with the current filters.</p>
                  <Button onClick={resetFilters} variant="link" className="mt-2">
                    Reset filters
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