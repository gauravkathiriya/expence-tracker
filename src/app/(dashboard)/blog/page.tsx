"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Bookmark, Clock, Calendar, User, Tag, ChevronRight, Search, Filter, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "10 Financial Habits That Will Change Your Life",
      excerpt: "Discover the daily habits that can transform your financial future and help you build lasting wealth.",
      category: "Personal Finance",
      author: "Sarah Johnson",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "/finance-habits.jpg",
      tags: ["Habits", "Wealth Building", "Personal Finance"]
    },
    {
      id: 2,
      title: "Understanding Market Volatility: A Beginner's Guide",
      excerpt: "Learn how to navigate market ups and downs and make informed investment decisions during volatile periods.",
      category: "Investing",
      author: "Michael Chen",
      date: "June 10, 2023",
      readTime: "12 min read",
      image: "/market-volatility.jpg",
      tags: ["Investing", "Markets", "Risk Management"]
    },
    {
      id: 3,
      title: "The Psychology of Spending: Why We Buy What We Buy",
      excerpt: "Explore the psychological factors that influence our spending decisions and how to make more conscious choices.",
      category: "Behavioral Finance",
      author: "Dr. Lisa Taylor",
      date: "June 5, 2023",
      readTime: "10 min read",
      image: "/psychology-spending.jpg",
      tags: ["Psychology", "Spending", "Behavior"]
    }
  ]

  const recentPosts = [
    {
      id: 4,
      title: "How to Talk to Your Partner About Money",
      category: "Relationships & Money",
      date: "June 3, 2023",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Crypto in 2023: What You Need to Know",
      category: "Cryptocurrency",
      date: "May 28, 2023",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Inflation-Proof Your Finances: 5 Strategies That Work",
      category: "Economy",
      date: "May 25, 2023",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "The Ultimate Guide to Tax-Efficient Investing",
      category: "Taxes",
      date: "May 20, 2023",
      readTime: "11 min read"
    }
  ]

  const popularTags = [
    "Personal Finance", 
    "Investing", 
    "Budgeting", 
    "Retirement", 
    "Debt", 
    "Saving", 
    "Real Estate", 
    "Taxes"
  ]

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="FinanceTracker Blog"
          description="Insights, tips, and strategies to improve your financial life"
          icon={BookOpen}
        />
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Articles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.id} variant="glass" className="card-shadow overflow-hidden">
              <div className="relative h-48 w-full bg-muted">
                <div className="absolute top-2 right-2 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                    <Bookmark className="h-4 w-4" />
                    <span className="sr-only">Bookmark</span>
                  </Button>
                </div>
                {/* Replace with actual images in production */}
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/40" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-xs font-medium">{post.author}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3.5 w-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Recent Articles</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog/all">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Card key={post.id} variant="default" className="card-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-medium text-lg mb-1">{post.title}</h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary whitespace-nowrap" asChild>
                      <Link href={`/blog/post/${post.id}`}>
                        Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card variant="bordered" className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-muted">
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered" className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Subscribe to Our Newsletter</CardTitle>
              <CardDescription>Get the latest articles delivered to your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button type="submit" className="w-full">Subscribe</Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">
                We'll never share your email. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>

          <Card variant="gradient" className="card-shadow">
            <CardContent className="p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Become a Contributor</h3>
              <p className="text-white/80 text-sm mb-4">
                Share your financial knowledge and insights with our community
              </p>
              <Button variant="glass">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 