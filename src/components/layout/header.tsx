"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LogOut, Menu, X, LineChart, CreditCard, Home, DollarSign, Settings, UserCircle, PieChart, BarChart4, Bell, FileText } from "lucide-react"
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
  const [notificationCount, setNotificationCount] = useState(0)
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
          
          // Simulate notification count - in a real app, fetch from API
          setNotificationCount(Math.floor(Math.random() * 5))
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
    } catch (error: unknown) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const getNavItemClass = (path: string) => {
    const baseClass = "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors"
    return isActive(path)
      ? `${baseClass} bg-primary/10 text-primary`
      : `${baseClass} text-muted-foreground hover:bg-muted hover:text-foreground`
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-xl finance-gradient flex items-center justify-center text-white shadow-md">
              <DollarSign className="h-5 w-5" />
            </div>
            <span className="hidden sm:inline-block font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FinanceTracker
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/dashboard" className={getNavItemClass('/dashboard')}>
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link href="/income" className={getNavItemClass('/income')}>
              <BarChart4 className="h-4 w-4" />
              <span>Income</span>
            </Link>
            <Link href="/expenses" className={getNavItemClass('/expenses')}>
              <CreditCard className="h-4 w-4" />
              <span>Expenses</span>
            </Link>
            <Link href="/recurring" className={getNavItemClass('/recurring')}>
              <LineChart className="h-4 w-4" />
              <span>Recurring</span>
            </Link>
            <Link href="/reports" className={getNavItemClass('/reports')}>
              <PieChart className="h-4 w-4" />
              <span>Reports</span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {notificationCount}
              </span>
            )}
          </Button>
          
          <Button variant="ghost" size="icon">
            <FileText className="h-5 w-5 text-muted-foreground" />
          </Button>
          
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
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-primary" />
                  </div>
                )}
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success border-2 border-background" />
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
              <DropdownMenuItem onClick={handleLogout} className="text-danger hover:text-danger focus:text-danger cursor-pointer">
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
          <nav className="grid gap-2 py-4">
            <Link 
              href="/dashboard" 
              className={getNavItemClass('/dashboard')}
              onClick={toggleMenu}
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/income" 
              className={getNavItemClass('/income')}
              onClick={toggleMenu}
            >
              <BarChart4 className="h-4 w-4" />
              <span>Income</span>
            </Link>
            <Link 
              href="/expenses" 
              className={getNavItemClass('/expenses')}
              onClick={toggleMenu}
            >
              <CreditCard className="h-4 w-4" />
              <span>Expenses</span>
            </Link>
            <Link 
              href="/recurring" 
              className={getNavItemClass('/recurring')}
              onClick={toggleMenu}
            >
              <LineChart className="h-4 w-4" />
              <span>Recurring</span>
            </Link>
            <Link 
              href="/reports" 
              className={getNavItemClass('/reports')}
              onClick={toggleMenu}
            >
              <PieChart className="h-4 w-4" />
              <span>Reports</span>
            </Link>
            <Link 
              href="/profile" 
              className={getNavItemClass('/profile')}
              onClick={toggleMenu}
            >
              <UserCircle className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            <Button
              variant="ghost"
              className="justify-start text-danger hover:text-danger hover:bg-danger/10"
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