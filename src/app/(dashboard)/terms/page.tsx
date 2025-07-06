"use client"

import { PageHeader } from "@/components/layout/page-header"
import { FileText, Clock, CheckCircle, Users, Lock, Code, AlertTriangle, Scale, GlobeLock, Mail, Info, XCircle, Eye } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Terms of Service"
          description="The rules and guidelines for using FinanceTracker"
          icon={FileText}
        />
      </div>

      <div className="flex items-center justify-center w-full mb-8">
        <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-lg flex items-center w-full max-w-3xl">
          <Info className="h-5 w-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium m-0">
            These terms were last updated on June 15, 2023. By using our service, you agree to these terms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Account Security</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            You are responsible for maintaining the security of your account and password. We cannot be held liable for any loss resulting from compromised account credentials.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Dispute Resolution</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Any disputes arising from the use of our service will be resolved through arbitration in accordance with the laws of the United States.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Content Ownership</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            You retain all rights to the financial data you input into our system. We only use this data to provide our services to you.
          </p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          Agreement to Terms
        </h2>
        <div className="bg-muted/30 p-5 rounded-lg">
          <p className="mb-0">
            By accessing or using FinanceTracker, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </div>

        <div className="my-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 m-0">Important Notice</h3>
          </div>
          <p className="text-amber-800 dark:text-amber-300 text-sm mb-0">
            These Terms constitute a legally binding agreement between you and FinanceTracker. It is your responsibility to review these Terms periodically for changes. Your continued use of the service following the posting of any changes constitutes your acceptance of those changes.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Description of Service
        </h2>
        <p>
          FinanceTracker is a financial management application that allows users to track income, expenses, and manage their personal finances. We provide tools for financial tracking, budgeting, reporting, and analysis.
        </p>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Service Features
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Income and expense tracking
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Budget planning and management
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Financial reports and analytics
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Secure data storage and backup
              </li>
            </ul>
          </div>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <Eye className="h-5 w-5 text-blue-500" />
              Service Limitations
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                Not a substitute for professional financial advice
              </li>
              <li className="flex items-center text-sm">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                No guarantee of financial outcomes
              </li>
              <li className="flex items-center text-sm">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                May experience occasional maintenance downtime
              </li>
              <li className="flex items-center text-sm">
                <Info className="h-4 w-4 text-blue-500 mr-2" />
                Features may change with service updates
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          User Accounts
        </h2>
        <div className="space-y-4">
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <div className="flex items-start bg-muted/30 p-4 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-amber-800 dark:text-amber-300 text-sm m-0">
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          User Content
        </h2>
        <p>
          Our service allows you to enter, upload, and store financial data and related information. You retain all rights to your data, and you are responsible for the content you provide.
        </p>
        <p>
          By providing content to FinanceTracker, you grant us the right to use, modify, perform, display, reproduce, and distribute such content solely for the purpose of providing and improving our services.
        </p>

        <div className="my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 m-0">Data Usage Notice</h3>
          </div>
          <p className="text-blue-800 dark:text-blue-300 text-sm mb-0">
            While you retain ownership of your content, we may use anonymized and aggregated data for improving our services, conducting research, and generating statistical analyses about personal finance trends.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          Intellectual Property
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-medium mb-2">Our Property</p>
            <p className="text-sm mb-0">
              The service and its original content (excluding user-provided content), features, and functionality are and will remain the exclusive property of FinanceTracker and its licensors.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-medium mb-2">Trademarks</p>
            <p className="text-sm mb-0">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FinanceTracker.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-primary" />
          Limitation of Liability
        </h2>
        <p>
          In no event shall FinanceTracker, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ol className="space-y-2 pl-0 list-none">
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">1</span>
            </div>
            <div>Your access to or use of or inability to access or use the service;</div>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">2</span>
            </div>
            <div>Any conduct or content of any third party on the service;</div>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">3</span>
            </div>
            <div>Any content obtained from the service; and</div>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">4</span>
            </div>
            <div>Unauthorized access, use, or alteration of your transmissions or content.</div>
          </li>
        </ol>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Your Responsibilities
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Provide accurate information
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Maintain account security
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Use the service lawfully
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Report security issues promptly
              </li>
            </ul>
          </div>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <XCircle className="h-5 w-5 text-red-500" />
              Prohibited Activities
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Violate any laws or regulations
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Impersonate others or misrepresent identity
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Attempt to gain unauthorized access
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Use the service for illegal activities
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/30 p-5 rounded-lg mt-4">
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <strong>Email:</strong> legal@financetracker.com
            </div>
            <div className="flex items-center gap-2">
              <GlobeLock className="h-5 w-5 text-primary" />
              <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mb-8">
          <p className="flex items-center text-muted-foreground">
            <Clock className="inline-block mr-2 h-4 w-4" />
            Last updated: June 15, 2023
          </p>
        </div>
      </div>
    </div>
  )
} 