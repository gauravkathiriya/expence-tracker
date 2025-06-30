"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionForm } from "@/components/transactions/transaction-form"
import { Category, Transaction } from "@/lib/types"
import { supabase } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

export default function EditExpensePage({ params }: { params: { id: string } }) {
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        setLoading(true)
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          router.push("/login")
          return
        }

        const { data, error } = await supabase
          .from("transactions")
          .select("*")
          .eq("id", params.id)
          .eq("user_id", user.id)
          .eq("category", Category.Expense)
          .single()

        if (error) {
          throw error
        }

        if (!data) {
          toast({
            variant: "destructive",
            title: "Not found",
            description: "The requested expense entry was not found.",
          })
          router.push("/expenses")
          return
        }

        setTransaction(data as Transaction)
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        })
        router.push("/expenses")
      } finally {
        setLoading(false)
      }
    }

    fetchTransaction()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="container py-8">
        <div className="space-y-2">
          <div className="h-8 w-1/3 animate-pulse rounded bg-muted" />
          <div className="h-64 animate-pulse rounded bg-muted" />
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Expense</h1>
      <Card>
        <CardHeader>
          <CardTitle>Expense Details</CardTitle>
        </CardHeader>
        <CardContent>
          {transaction && (
            <TransactionForm 
              category={Category.Expense} 
              initialData={transaction}
              isEditing={true}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
} 