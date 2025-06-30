import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionForm } from "@/components/transactions/transaction-form"
import { Category } from "@/lib/types"

export default function NewExpensePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Add Expense</h1>
      <Card>
        <CardHeader>
          <CardTitle>Expense Details</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionForm category={Category.Expense} />
        </CardContent>
      </Card>
    </div>
  )
} 