"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  {...field}
                />
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
                <Input placeholder="Description" {...field} />
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
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
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
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading 
              ? isEditing ? "Updating..." : "Adding..." 
              : buttonText
            }
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
} 