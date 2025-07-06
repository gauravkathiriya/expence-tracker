"use client"

import { PageHeader } from "@/components/layout/page-header"
import { FileText } from "lucide-react"

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

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>Last updated: June 15, 2023</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using FinanceTracker, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
        </p>

        <h2>Description of Service</h2>
        <p>
          FinanceTracker is a financial management application that allows users to track income, expenses, and manage their personal finances. We provide tools for financial tracking, budgeting, reporting, and analysis.
        </p>

        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2>User Content</h2>
        <p>
          Our service allows you to enter, upload, and store financial data and related information. You retain all rights to your data, and you are responsible for the content you provide.
        </p>
        <p>
          By providing content to FinanceTracker, you grant us the right to use, modify, perform, display, reproduce, and distribute such content solely for the purpose of providing and improving our services.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The service and its original content (excluding user-provided content), features, and functionality are and will remain the exclusive property of FinanceTracker and its licensors. The service is protected by copyright, trademark, and other laws.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FinanceTracker.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall FinanceTracker, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ol>
          <li>Your access to or use of or inability to access or use the service;</li>
          <li>Any conduct or content of any third party on the service;</li>
          <li>Any content obtained from the service; and</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ol>

        <h2>Disclaimer</h2>
        <p>
          Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> legal@financetracker.com<br />
          <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
        </p>
      </div>
    </div>
  )
} 