export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contributes: {
        Row: {
          id: number
          promo_code_url: string
          user_id: string
          category: number
          received_user_id: string
          created_at: string
          received_at: string | null
          updated_at: string | null
          expired_at: string
        }
        Insert: {
          promo_code_url: string
          user_id: string
          category: number
        }
        Update: {
          promo_code_url?: string
          received_user_id?: string
          received_at?: string
          updated_at: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}