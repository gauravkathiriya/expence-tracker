"use client"

import { PageHeader } from "@/components/layout/page-header"
import { 
  HelpCircle, 
  Plus, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Settings, 
  Search, 
  Download, 
  Upload, 
  Shield, 
  Mail, 
  MessageCircle, 
  BookOpen, 
  Zap, 
  Target, 
  PieChart, 
  BarChart3, 
  CreditCard, 
  Wallet, 
  PiggyBank,
  AlertCircle,
  CheckCircle,
  Info,
  Clock,
  Users,
  FileText
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Help Center"
          description="Everything you need to know about using FinanceTracker"
          icon={HelpCircle}
        />
      </div>

      <div className="flex items-center justify-center w-full mb-8">
        <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-lg flex items-center w-full max-w-3xl">
          <Info className="h-5 w-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium m-0">
            Can't find what you're looking for? Contact our support team for personalized assistance.
          </p>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          Quick Start Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-medium">Add Your First Transaction</h3>
              <p className="text-sm text-muted-foreground">
                Go to Expenses or Income tab and click the "+" button to add your first transaction.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-medium">Set Up Categories</h3>
              <p className="text-sm text-muted-foreground">
                Organize your transactions by creating custom categories that match your spending habits.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-medium">View Your Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Check your dashboard to see spending trends, income overview, and financial insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Expense Tracking</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Easily record and categorize your daily expenses with detailed descriptions and tags.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Add expenses with categories</li>
            <li>• Attach receipts and notes</li>
            <li>• Set recurring expenses</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Income Management</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Track all your income sources including salary, freelance work, and other earnings.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Record multiple income sources</li>
            <li>• Set up recurring income</li>
            <li>• Track income trends</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Analytics & Reports</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Get detailed insights into your spending patterns with visual charts and reports.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Spending by category</li>
            <li>• Monthly/yearly trends</li>
            <li>• Budget vs actual</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Budget Planning</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Set monthly budgets for different categories and track your progress.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Create category budgets</li>
            <li>• Set spending limits</li>
            <li>• Get budget alerts</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Recurring Transactions</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Automatically track regular expenses like subscriptions, bills, and income.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Set up recurring expenses</li>
            <li>• Automate bill tracking</li>
            <li>• Never miss payments</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Data Security</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Your financial data is encrypted and stored securely with industry-standard protection.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Bank-level encryption</li>
            <li>• Secure cloud backup</li>
            <li>• Privacy protection</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-primary" />
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">How do I add a new expense?</h3>
            <p className="text-sm text-muted-foreground">
              Navigate to the Expenses tab and click the "+" button. Fill in the amount, category, date, and any additional notes. You can also attach receipts for future reference.
            </p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">Can I export my financial data?</h3>
            <p className="text-sm text-muted-foreground">
              Yes! Go to Settings → Data Export to download your transactions in CSV or PDF format. This includes all your expenses, income, and reports.
            </p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">How do I set up a budget?</h3>
            <p className="text-sm text-muted-foreground">
              Visit the Budget section in your dashboard. Click "Create Budget" and set spending limits for different categories. You'll receive notifications when you approach your limits.
            </p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">Is my financial data secure?</h3>
            <p className="text-sm text-muted-foreground">
              Absolutely. We use bank-level encryption to protect your data. All information is stored securely and we never share your personal financial data with third parties.
            </p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">How do I create custom categories?</h3>
            <p className="text-sm text-muted-foreground">
              When adding a transaction, you can create new categories by typing a new category name. You can also manage all categories in Settings → Categories.
            </p>
          </div>

          <div className="pb-4">
            <h3 className="font-medium mb-2">Can I sync with my bank account?</h3>
            <p className="text-sm text-muted-foreground">
              Currently, we support manual entry of transactions. We're working on bank integration features that will be available in future updates.
            </p>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <AlertCircle className="h-5 w-5 text-primary" />
          Troubleshooting
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">App not loading?</h3>
                <p className="text-sm text-muted-foreground">
                  Try refreshing the page or clearing your browser cache. If the issue persists, check your internet connection.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Can't save transactions?</h3>
                <p className="text-sm text-muted-foreground">
                  Make sure all required fields are filled. Check that the amount is a valid number and the date is correct.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Charts not displaying?</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure you have transactions in the selected date range. Charts require data to be visible.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Login issues?</h3>
                <p className="text-sm text-muted-foreground">
                  Verify your email and password. Use the "Forgot Password" link if needed. Contact support if problems continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Support */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <MessageCircle className="h-5 w-5 text-primary" />
          Contact & Support
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get help via email
            </p>
            <a href="mailto:support@financetracker.com" className="text-primary text-sm hover:underline">
              support@financetracker.com
            </a>
          </div>

          <div className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Chat with our support team
            </p>
            <button className="text-primary text-sm hover:underline">
              Start Chat
            </button>
          </div>

          <div className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Documentation</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Detailed guides and tutorials
            </p>
            <a href="/guides" className="text-primary text-sm hover:underline">
              View Guides
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium">Response Time</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-0">
            We typically respond to support requests within 24 hours. For urgent issues, please use the live chat option.
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
          <FileText className="h-5 w-5 text-primary" />
          Additional Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/guides" className="flex items-center p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
            <BookOpen className="h-5 w-5 text-primary mr-3" />
            <div>
              <h3 className="font-medium">User Guides</h3>
              <p className="text-sm text-muted-foreground">Step-by-step tutorials for all features</p>
            </div>
          </a>

          <a href="/blog" className="flex items-center p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
            <FileText className="h-5 w-5 text-primary mr-3" />
            <div>
              <h3 className="font-medium">Blog & Tips</h3>
              <p className="text-sm text-muted-foreground">Financial tips and best practices</p>
            </div>
          </a>

          <a href="/privacy" className="flex items-center p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
            <Shield className="h-5 w-5 text-primary mr-3" />
            <div>
              <h3 className="font-medium">Privacy Policy</h3>
              <p className="text-sm text-muted-foreground">How we protect your data</p>
            </div>
          </a>

          <a href="/terms" className="flex items-center p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
            <FileText className="h-5 w-5 text-primary mr-3" />
            <div>
              <h3 className="font-medium">Terms of Service</h3>
              <p className="text-sm text-muted-foreground">Service terms and conditions</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
} 