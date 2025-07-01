"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { ArrowLeft, DollarSign, Calendar, Tag, AlignLeft, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import { Category, Transaction, TransactionType } from "@/lib/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionFormSkeleton } from "@/components/transactions/transaction-skeleton"

const transactionFormSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }).refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    {
      message: "Amount must be a positive number",
    }
  ),
  description: z.string().optional(),
  type: z.string({ required_error: "Please select a type" }),
  date: z.string().min(1, { message: "Date is required" }),
})

type TransactionFormProps = {
  category: Category
  initialData?: Transaction
  isEditing?: boolean
}

export function TransactionForm({ 
  category, 
  initialData, 
  isEditing = false 
}: TransactionFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFormLoading, setIsFormLoading] = useState<boolean>(true)
  const router = useRouter()

  const title = category === Category.Income ? "Income" : "Expense"
  const successMessage = isEditing 
    ? `${title} updated successfully` 
    : `${title} added successfully`
  const buttonText = isEditing ? `Update ${title}` : `Add ${title}`

  const defaultValues = initialData 
    ? {
        amount: String(initialData.amount),
        description: initialData.description || "",
        type: initialData.type,
        date: initialData.date,
      }
    : {
        amount: "",
        description: "",
        type: "",
        date: format(new Date(), "yyyy-MM-dd"),
      }

  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues,
  })
  
  useEffect(() => {
    // Simulate form loading
    const timer = setTimeout(() => {
      setIsFormLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  async function onSubmit(values: z.infer<typeof transactionFormSchema>) {
    try {
      setIsLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        throw new Error("User not authenticated")
      }

      const transaction = {
        user_id: user.id,
        amount: Number(values.amount),
        description: values.description || null,
        category,
        type: values.type as TransactionType,
        date: values.date,
      }

      if (isEditing && initialData) {
        // Update existing transaction
        const { error } = await supabase
          .from("transactions")
          .update(transaction)
          .eq("id", initialData.id)
          .eq("user_id", user.id)

        if (error) throw error
      } else {
        // Insert new transaction
        const { error } = await supabase
          .from("transactions")
          .insert(transaction)

        if (error) throw error
      }

      toast({
        title: successMessage,
      })

      // Redirect based on transaction category
      router.push(category === Category.Income ? "/income" : "/expenses")
      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-none shadow-lg max-w-xl mx-auto">
      <CardHeader className={`space-y-1 ${category === Category.Income ? 'bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20' : 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'}`}>
        <div className="flex items-center space-x-2">
          {category === Category.Income ? (
            <ArrowUpCircle className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownCircle className="h-5 w-5 text-red-600" />
          )}
          <CardTitle>{isEditing ? `Edit ${title}` : `New ${title}`}</CardTitle>
        </div>
        <CardDescription>
          {isEditing ? `Update your ${title.toLowerCase()} information` : `Enter your ${title.toLowerCase()} details`}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {isFormLoading ? (
          <TransactionFormSkeleton />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="0.00"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <AlignLeft className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Description" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <SelectTrigger className="pl-10">
                          <Tag className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      {category === Category.Income ? (
                        <>
                          <SelectItem value="salary">Salary</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="food">Food</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="shopping">Shopping</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="date" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full ${category === Category.Income ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white`}
                >
                  {isLoading 
                    ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {isEditing ? "Updating..." : "Adding..."}
                      </div>
                    ) 
                    : buttonText
                  }
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="w-full flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Cancel
                </Button>
              </div>
            </div>
          </form>
        </Form>
        )}
      </CardContent>
    </Card>
  )
} 