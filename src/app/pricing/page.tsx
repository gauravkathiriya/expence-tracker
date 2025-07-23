import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Pricing | FinanceTracker",
  description: "Choose the perfect plan for your financial management needs.",
}

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that fits your needs. All plans include core features with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Free Plan */}
            <div className="rounded-lg border bg-background p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Perfect for individuals just starting out.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-sm text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic expense tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Income management</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Simple reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Up to 50 transactions/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="rounded-lg border bg-background p-8 shadow-sm relative">
              <div className="absolute -top-3 right-4 bg-primary px-3 py-1 rounded-full text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For individuals who want more control.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="ml-1 text-sm text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Budget planning tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Data export</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button asChild className="w-full" variant="default">
                <Link href="/signup?plan=premium">Choose Premium</Link>
              </Button>
            </div>

            {/* Business Plan */}
            <div className="rounded-lg border bg-background p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Business</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For small businesses and teams.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$24.99</span>
                  <span className="ml-1 text-sm text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced tax reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/signup?plan=business">Choose Business</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Free</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                  <th className="py-4 px-6 text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Expense Tracking</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Monthly Transactions</td>
                  <td className="py-4 px-6 text-center">50</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Reports & Analytics</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Budget Planning</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Data Export</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Team Access</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">API Access</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">Priority</td>
                  <td className="py-4 px-6 text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, all paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How secure is my data?</h3>
              <p className="text-muted-foreground">
                We use bank-level encryption to protect your data. Your financial information is never shared with third parties.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
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
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of users who have transformed their financial habits with FinanceTracker.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/signup">
                  Sign up for free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 