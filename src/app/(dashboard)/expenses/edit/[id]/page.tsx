import { EditExpenseClient } from "./client"

export default async function EditExpensePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditExpenseClient id={id} />
} 