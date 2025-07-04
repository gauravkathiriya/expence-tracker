"use client"

import { useEffect, useState, useCallback } from "react"
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
import { TransactionTableSkeleton } from "@/components/transactions/transaction-skeleton"
import { PageHeader } from "@/components/layout/page-header"
import { FilterOptions, TransactionFilters } from "@/components/transactions/transaction-filters"
import { ExportData } from "@/components/transactions/export-data"

export default function IncomePage() {
  const [loading, setLoading] = useState(true)
  const [incomeData, setIncomeData] = useState<Transaction[]>([])
  const [filteredData, setFilteredData] = useState<Transaction[]>([])
  const [filters, setFilters] = useState<FilterOptions>({
    startDate: "",
    endDate: "",
    type: "all",
    category: Category.Income,
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
        .eq("category", Category.Income)
        .order("date", { ascending: false })

      if (error) {
        throw error
      }

      setIncomeData(data as Transaction[])
      setFilteredData(data as Transaction[])
    } catch (error: unknown) {
      toast({
        variant: "destructive",
        title: "Error loading income data",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const applyFilters = useCallback(() => {
    let result = [...incomeData]

    // Filter by date range
    if (filters.startDate) {
      result = result.filter(income =>
        new Date(income.date) >= new Date(filters.startDate)
      )
    }

    if (filters.endDate) {
      result = result.filter(income =>
        new Date(income.date) <= new Date(filters.endDate)
      )
    }

    // Filter by type
    if (filters.type !== "all") {
      result = result.filter(income => income.type === filters.type)
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
  }, [filters, incomeData])

  useEffect(() => {
    if (incomeData.length > 0) {
      applyFilters()
    }
  }, [filters, incomeData, applyFilters])

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  const resetFilters = () => {
    setFilters({
      startDate: "",
      endDate: "",
      type: "all",
      category: Category.Income,
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
        title: "Income deleted",
      })

      // Refresh data
      fetchData()
    } catch (error: unknown) {
      toast({
        variant: "destructive",
        title: "Error deleting income",
        description: error instanceof Error ? error.message : "An unknown error occurred",
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
            <div className="flex items-center gap-3">
              <ExportData data={filteredData} filename="income" />
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/income/new">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Income
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
                <span>All Income</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {filteredData.length} {filteredData.length === 1 ? 'income' : 'incomes'} found
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
                    {filteredData.map((income) => (
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
                  <p className="text-muted-foreground">No income entries found with the current filters.</p>
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