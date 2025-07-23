import { BarChart4, LineChart, PieChart, Calendar, Clock, Bell, Lock, Smartphone, Zap, Cloud, RefreshCw, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Features | FinanceTracker",
  description: "Explore the powerful features of FinanceTracker that help you manage your finances.",
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Financial Success
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover all the tools and features that make FinanceTracker the ultimate solution for managing your finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Core Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expense Tracking</h3>
              <p className="text-muted-foreground">
                Easily log and categorize your expenses to keep track of where your money is going. Add notes, receipts, and tags for better organization.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Income Management</h3>
              <p className="text-muted-foreground">
                Track all your income sources in one place. Monitor salary, freelance work, investments, and other revenue streams.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Detailed Reports</h3>
              <p className="text-muted-foreground">
                Visualize your financial data with interactive charts and graphs. Gain insights into your spending patterns and saving habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Advanced Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Budget Planning</h3>
              <p className="text-sm text-muted-foreground">
                Create monthly, quarterly, or annual budgets for different expense categories.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Recurring Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Set up recurring expenses and income for automatic tracking of regular transactions.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Smart Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get notifications for upcoming bills, budget limits, and unusual spending patterns.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Secure Data</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption ensures your financial data is always safe and secure.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Mobile Access</h3>
              <p className="text-sm text-muted-foreground">
                Access your financial data on the go with our responsive web application.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Quick Entry</h3>
              <p className="text-sm text-muted-foreground">
                Add expenses in seconds with our streamlined input forms and templates.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Cloud Sync</h3>
              <p className="text-sm text-muted-foreground">
                Your data is automatically synced across all your devices in real-time.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <RefreshCw className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Data Import/Export</h3>
              <p className="text-sm text-muted-foreground">
                Easily import data from other financial tools or export your data for backup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Coming Soon</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                We're constantly improving FinanceTracker with new features and enhancements.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Investment Tracking</h3>
                <p className="text-muted-foreground">
                  Track your investments and monitor their performance over time.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Bank Integration</h3>
                <p className="text-muted-foreground">
                  Connect your bank accounts for automatic transaction importing.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Mobile App</h3>
                <p className="text-muted-foreground">
                  Native mobile applications for iOS and Android devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to experience these features?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Sign up today and start your journey to better financial management.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/signup">
                  Get Started for Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 