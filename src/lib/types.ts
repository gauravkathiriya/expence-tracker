export type UserProfile = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  bio?: string
  created_at: string
}

export type TransactionType = 'salary' | 'freelance' | 'investment' | 'other' | 'food' | 'transportation' | 'utilities' | 'entertainment' | 'shopping' | 'health' | 'education' | 'housing'

export enum Category {
  Income = 'income',
  Expense = 'expense'
}

export type Transaction = {
  id: string
  user_id: string
  amount: number
  description: string
  category: Category
  type: TransactionType
  date: string
  created_at: string
  updated_at: string
} 