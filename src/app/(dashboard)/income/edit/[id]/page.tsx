import { EditIncomeClient } from "./client"

export default async function EditIncomePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditIncomeClient id={id} />
} 