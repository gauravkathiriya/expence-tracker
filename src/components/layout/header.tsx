"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LogOut, Menu, X, LineChart, CreditCard, Home, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { supabase } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
            <DollarSign className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ExpenseTracker
          </span>
        </Link>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/dashboard" 
              className={`flex items-center transition-colors hover:text-foreground/80 ${isActive('/dashboard') ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              <Home className={`mr-1.5 h-4 w-4 ${isActive('/dashboard') ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'}`} />
              Dashboard
            </Link>
            <Link 
              href="/income" 
              className={`flex items-center transition-colors hover:text-foreground/80 ${isActive('/income') ? 'text-green-600 dark:text-green-400 font-semibold' : ''}`}
            >
              <LineChart className={`mr-1.5 h-4 w-4 ${isActive('/income') ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`} />
              Income
            </Link>
            <Link 
              href="/expenses" 
              className={`flex items-center transition-colors hover:text-foreground/80 ${isActive('/expenses') ? 'text-red-600 dark:text-red-400 font-semibold' : ''}`}
            >
              <CreditCard className={`mr-1.5 h-4 w-4 ${isActive('/expenses') ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'}`} />
              Expenses
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center text-muted-foreground hover:text-foreground hover:bg-muted/80"
            onClick={handleLogout}
          >
            <LogOut className="mr-1.5 h-4 w-4" />
            Logout
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container border-t md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              href="/dashboard" 
              className={`flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${isActive('/dashboard') ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              onClick={toggleMenu}
            >
              <Home className={`mr-1.5 h-4 w-4 ${isActive('/dashboard') ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'}`} />
              Dashboard
            </Link>
            <Link 
              href="/income" 
              className={`flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${isActive('/income') ? 'text-green-600 dark:text-green-400 font-semibold' : ''}`}
              onClick={toggleMenu}
            >
              <LineChart className={`mr-1.5 h-4 w-4 ${isActive('/income') ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`} />
              Income
            </Link>
            <Link 
              href="/expenses" 
              className={`flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${isActive('/expenses') ? 'text-red-600 dark:text-red-400 font-semibold' : ''}`}
              onClick={toggleMenu}
            >
              <CreditCard className={`mr-1.5 h-4 w-4 ${isActive('/expenses') ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'}`} />
              Expenses
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => {
                handleLogout()
                toggleMenu()
              }}
            >
              <LogOut className="mr-1.5 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 