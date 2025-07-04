"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { TransactionType, Category } from "@/lib/types"
import { CalendarIcon, FilterIcon } from "lucide-react"

export type FilterOptions = {
  startDate: string
  endDate: string
  type: TransactionType | "all"
  category: Category | "all"
  sortBy: "date" | "amount"
  sortOrder: "asc" | "desc"
}

type TransactionFiltersProps = {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
  onReset: () => void
}

export function TransactionFilters({ 
  filters, 
  onFilterChange,
  onReset
}: TransactionFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    })
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FilterIcon size={16} />
              <h3 className="text-sm font-medium">Filters</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>

          {isExpanded && (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="startDate"
                      type="date"
                      className="pl-8"
                      value={filters.startDate}
                      onChange={(e) => handleChange("startDate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="endDate"
                      type="date"
                      className="pl-8"
                      value={filters.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={filters.category} 
                    onValueChange={(value) => handleChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value={Category.Income}>Income</SelectItem>
                      <SelectItem value={Category.Expense}>Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Transaction Type</Label>
                  <Select 
                    value={filters.type} 
                    onValueChange={(value) => handleChange("type", value as TransactionType | "all")}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="salary">Salary</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="other">Other Income</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="housing">Housing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sortBy">Sort By</Label>
                  <Select 
                    value={filters.sortBy} 
                    onValueChange={(value) => handleChange("sortBy", value as "date" | "amount")}
                  >
                    <SelectTrigger id="sortBy">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="amount">Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sortOrder">Sort Order</Label>
                  <Select 
                    value={filters.sortOrder} 
                    onValueChange={(value) => handleChange("sortOrder", value as "asc" | "desc")}
                  >
                    <SelectTrigger id="sortOrder">
                      <SelectValue placeholder="Sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="desc">Newest/Highest First</SelectItem>
                      <SelectItem value="asc">Oldest/Lowest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onReset}
                >
                  Reset Filters
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 