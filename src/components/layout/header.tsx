"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LogOut, Menu, X, LineChart, CreditCard, Home, DollarSign, Settings, UserCircle } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { supabase } from "@/lib/supabase"
import { toast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserProfile } from "@/lib/types"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        if (data) {
          setUserProfile(data as UserProfile)
        }
      }
    }

    fetchUserProfile()
  }, [])

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
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative hover:bg-muted/80 h-9 w-9">
                {userProfile?.avatar_url ? (
                  <Image 
                    src={userProfile.avatar_url} 
                    alt="Profile" 
                    width={36} 
                    height={36} 
                    className="rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="h-6 w-6 text-muted-foreground" />
                )}
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="font-medium">{userProfile?.full_name || "User"}</span>
                  <span className="text-xs text-muted-foreground">{userProfile?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:text-red-700 focus:text-red-700 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <Link 
              href="/profile" 
              className={`flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${isActive('/profile') ? 'text-purple-600 dark:text-purple-400 font-semibold' : ''}`}
              onClick={toggleMenu}
            >
              <UserCircle className={`mr-1.5 h-4 w-4 ${isActive('/profile') ? 'text-purple-600 dark:text-purple-400' : 'text-muted-foreground'}`} />
              Profile
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