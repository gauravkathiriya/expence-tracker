"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Wallet, PiggyBank, BarChart4, Clock, ArrowRight, GraduationCap, DollarSign, BadgeDollarSign, Landmark, ChevronRight, Search } from "lucide-react"
import Link from "next/link"

export default function FinancialGuidesPage() {
  const featuredGuides = [
    {
      title: "Budgeting 101: How to Create Your First Budget",
      description: "Learn the fundamentals of creating and sticking to a budget that works for your lifestyle",
      icon: Wallet,
      category: "Budgeting",
      readTime: "8 min read",
      level: "Beginner",
      link: "/guides/budgeting-101"
    },
    {
      title: "Emergency Funds: Why You Need One & How to Build It",
      description: "Discover the importance of having an emergency fund and strategies to build one quickly",
      icon: PiggyBank,
      category: "Saving",
      readTime: "10 min read",
      level: "Beginner",
      link: "/guides/emergency-funds"
    },
    {
      title: "Understanding Credit Scores & How to Improve Them",
      description: "Everything you need to know about credit scores and practical steps to improve yours",
      icon: TrendingUp,
      category: "Credit",
      readTime: "12 min read",
      level: "Intermediate",
      link: "/guides/credit-scores"
    }
  ]

  const guideCategories = [
    {
      title: "Budgeting",
      description: "Master the art of budgeting and expense tracking",
      icon: Wallet,
      count: 8,
      link: "/guides/category/budgeting"
    },
    {
      title: "Saving",
      description: "Strategies to save more and reach your goals faster",
      icon: PiggyBank,
      count: 6,
      link: "/guides/category/saving"
    },
    {
      title: "Investing",
      description: "Learn how to grow your wealth through investments",
      icon: TrendingUp,
      count: 10,
      link: "/guides/category/investing"
    },
    {
      title: "Debt Management",
      description: "Strategies to manage and eliminate debt effectively",
      icon: BadgeDollarSign,
      count: 7,
      link: "/guides/category/debt"
    },
    {
      title: "Retirement",
      description: "Plan for a secure and comfortable retirement",
      icon: Clock,
      count: 5,
      link: "/guides/category/retirement"
    },
    {
      title: "Banking",
      description: "Make the most of your banking relationships",
      icon: Landmark,
      count: 4,
      link: "/guides/category/banking"
    }
  ]

  const recentGuides = [
    {
      title: "5 Ways to Reduce Your Monthly Expenses",
      category: "Budgeting",
      date: "June 10, 2023",
      link: "/guides/reduce-monthly-expenses"
    },
    {
      title: "Investing for Beginners: Getting Started with $500",
      category: "Investing",
      date: "June 5, 2023",
      link: "/guides/investing-beginners"
    },
    {
      title: "How to Negotiate Lower Interest Rates on Your Credit Cards",
      category: "Debt Management",
      date: "May 28, 2023",
      link: "/guides/negotiate-interest-rates"
    },
    {
      title: "The 50/30/20 Budget Rule Explained",
      category: "Budgeting",
      date: "May 20, 2023",
      link: "/guides/50-30-20-budget"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Financial Guides"
          description="Educational resources to help you master your finances"
          icon={BookOpen}
        />
        <div className="mt-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for financial guides..."
              className="w-full rounded-full border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center">
          <GraduationCap className="mr-2 h-5 w-5 text-primary" /> Featured Guides
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredGuides.map((guide, index) => (
            <Card key={index} variant="glass" className="card-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <guide.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{guide.category}</span>
                </div>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3.5 w-3.5" />
                  <span>{guide.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{guide.level}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary" asChild>
                  <Link href={guide.link}>
                    Read Guide <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center">
          <BarChart4 className="mr-2 h-5 w-5 text-primary" /> Browse by Category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {guideCategories.map((category, index) => (
            <Card key={index} variant="default" className="card-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                    {category.count} guides
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={category.link}>
                    View Guides <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Recent Guides</h2>
          <div className="space-y-4">
            {recentGuides.map((guide, index) => (
              <Card key={index} variant="default" className="card-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary">{guide.category}</span>
                        <span className="text-xs text-muted-foreground">{guide.date}</span>
                      </div>
                      <h3 className="font-medium">{guide.title}</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <Link href={guide.link}>
                        Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" asChild>
              <Link href="/guides/all">
                View All Guides <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Card variant="bordered" className="card-shadow h-fit">
          <CardHeader>
            <CardTitle className="text-xl">Financial Tip of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted/50 p-4 mb-4">
              <p className="italic text-sm">
                "Pay yourself first. Before you pay your bills, before you buy groceries, before you do anything else, set aside a portion of your income to save. Put the money into your 401(k), IRA, or savings account."
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Automating your savings is one of the easiest and most effective strategies for building wealth over time.
            </p>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <span className="text-xs text-muted-foreground">Updated daily</span>
            <Button variant="ghost" size="sm">
              Share <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card variant="gradient" className="card-shadow">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-white text-center md:text-left">
            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-white/80">
              Get the latest financial guides and tips delivered to your inbox weekly
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            />
            <Button variant="glass" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 