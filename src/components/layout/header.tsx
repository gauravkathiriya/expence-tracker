"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { supabase } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      toast({
        title: "Logged out successfully",
      })
      router.push("/login")
      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="font-bold">Expense Tracker</span>
        </Link>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/dashboard" 
              className="transition-colors hover:text-foreground/80"
            >
              Dashboard
            </Link>
            <Link 
              href="/income" 
              className="transition-colors hover:text-foreground/80"
            >
              Income
            </Link>
            <Link 
              href="/expenses" 
              className="transition-colors hover:text-foreground/80"
            >
              Expenses
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Logout</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              href="/dashboard" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              href="/income" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={toggleMenu}
            >
              Income
            </Link>
            <Link 
              href="/expenses" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={toggleMenu}
            >
              Expenses
            </Link>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => {
                handleLogout()
                toggleMenu()
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 