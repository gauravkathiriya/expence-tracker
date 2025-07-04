/* eslint-disable */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          amount: number
          description: string | null
          category: "income" | "expense"
          type: "salary" | "freelance" | "investment" | "other" | "food" | "transportation" | "utilities" | "entertainment" | "shopping" | "health" | "education" | "housing"
          date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          description?: string | null
          category: "income" | "expense"
          type: "salary" | "freelance" | "investment" | "other" | "food" | "transportation" | "utilities" | "entertainment" | "shopping" | "health" | "education" | "housing"
          date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          description?: string | null
          category?: "income" | "expense"
          type?: "salary" | "freelance" | "investment" | "other" | "food" | "transportation" | "utilities" | "entertainment" | "shopping" | "health" | "education" | "housing"
          date?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      transaction_category: "income" | "expense"
      transaction_type: "salary" | "freelance" | "investment" | "other" | "food" | "transportation" | "utilities" | "entertainment" | "shopping" | "health" | "education" | "housing"
    }
  }
}
