"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, LineChart, BarChart4, Bell, CalendarClock, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function UpcomingFeaturesPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Upcoming Features"
          description="Exciting new features coming soon to FinanceTracker"
          icon={Sparkles}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card variant="glass" className="card-shadow">
          <div className="absolute top-4 right-4 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
            Coming Soon
          </div>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarClock className="mr-2 h-5 w-5 text-primary" />
              Recurring Management
            </CardTitle>
            <CardDescription>
              Set up and manage recurring transactions automatically
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Schedule recurring income and expenses</li>
                <li>Flexible frequency options (daily, weekly, monthly, yearly)</li>
                <li>Automatic transaction creation</li>
                <li>Reminder notifications</li>
                <li>Edit or cancel recurring items anytime</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-sm">Estimated release: Q3 2023</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/recurring">
                  Preview <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="glass" className="card-shadow">
          <div className="absolute top-4 right-4 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
            Coming Soon
          </div>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart4 className="mr-2 h-5 w-5 text-primary" />
              Advanced Reports
            </CardTitle>
            <CardDescription>
              Detailed financial reports and analytics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Customizable reporting periods</li>
                <li>Category-based spending analysis</li>
                <li>Income vs. expense trends</li>
                <li>Budget performance metrics</li>
                <li>Export reports in multiple formats</li>
                <li>Tax-ready summaries</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-sm">Estimated release: Q4 2023</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/reports">
                  Preview <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="bordered" className="card-shadow">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-primary" />
            Get Notified
          </CardTitle>
          <CardDescription>
            Sign up to be notified when new features are released
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit" variant="gradient">
              Subscribe
            </Button>
          </form>
          <p className="mt-2 text-xs text-muted-foreground">
            We'll only notify you about new features and important updates. No spam.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 