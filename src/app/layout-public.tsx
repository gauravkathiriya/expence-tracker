"use client"

import Link from "next/link"
import { useState } from "react"
import { DollarSign, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Footer } from "@/components/layout/footer"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-xl finance-gradient flex items-center justify-center text-white shadow-md">
                <DollarSign className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FinanceTracker
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
            
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
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="container border-t md:hidden">
            <nav className="grid gap-2 py-4">
              <Link 
                href="/about" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/features" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <div className="h-px bg-border my-2"></div>
              <Link 
                href="/login" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="flex items-center py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </nav>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
} 