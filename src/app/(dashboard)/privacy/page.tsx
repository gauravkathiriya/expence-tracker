"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Shield, User, Database, Activity, Lock, ExternalLink, FileCheck, AlertCircle, Users, Clock, CheckCircle, XCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your information"
          icon={Shield}
        />
      </div>

      <div className="flex items-center justify-center w-full mb-8">
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg flex items-center w-full max-w-3xl">
          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium m-0">
            This privacy policy is current and fully compliant with the latest data protection regulations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Data Protection</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your data is encrypted and stored securely with industry-standard protocols and regular security assessments.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Your Rights</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            You have the right to access, correct, delete, or export your personal information at any time.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Data Usage</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We only use your data to provide and improve our services. We never sell your personal information to third parties.
          </p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Introduction
        </h2>
        <p>
          At FinanceTracker, we respect your privacy and are committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
          you use our financial management application.
        </p>

        <div className="my-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 m-0">Important Notice</h3>
          </div>
          <p className="text-amber-800 dark:text-amber-300 text-sm mb-0">
            By using our application, you agree to the collection and use of information in accordance with this policy.
            If you do not agree with our policies, please do not use our service.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          Information We Collect
        </h2>
        <p>We collect several types of information from and about users of our application, including:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <User className="h-3 w-3 text-primary" />
            </div>
            <div>
              <strong>Personal Information:</strong> Name, email address, and other contact details you provide
              when creating an account.
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Database className="h-3 w-3 text-primary" />
            </div>
            <div>
              <strong>Financial Information:</strong> Transaction data, account balances, income sources,
              expenses, and other financial information you choose to input into the application.
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Activity className="h-3 w-3 text-primary" />
            </div>
            <div>
              <strong>Usage Data:</strong> Information about how you interact with our application, including
              features used, time spent, and actions taken.
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-3 w-3 text-primary" />
            </div>
            <div>
              <strong>Device Information:</strong> Information about your device, operating system, browser
              type, IP address, and other technical details.
            </div>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 mt-4">
          <Activity className="h-6 w-6 text-primary" />
          How We Use Your Information
        </h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul className="space-y-3 pl-0 list-none">
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <FileCheck className="h-3 w-3 text-primary" />
            </div>
            Providing and maintaining our application
          </li>
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <User className="h-3 w-3 text-primary" />
            </div>
            Personalizing your experience
          </li>
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Activity className="h-3 w-3 text-primary" />
            </div>
            Analyzing usage patterns to improve our application
          </li>
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <ExternalLink className="h-3 w-3 text-primary" />
            </div>
            Communicating with you about updates, features, or support
          </li>
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <AlertCircle className="h-3 w-3 text-primary" />
            </div>
            Detecting and preventing fraudulent or unauthorized activity
          </li>
          <li className="flex items-center">
            <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-3 w-3 text-primary" />
            </div>
            Complying with legal obligations
          </li>
        </ul>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              What We Do
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Encrypt all personal data
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Use secure connections (HTTPS/SSL)
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Regularly update security measures
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Allow you to delete your data
              </li>
            </ul>
          </div>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <XCircle className="h-5 w-5 text-red-500" />
              What We Don't Do
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Sell your personal information
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Share data with unauthorized parties
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Keep your data longer than necessary
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Use your data for unrelated purposes
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <Lock className="h-6 w-6 text-primary" />
          Data Security
        </h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information from unauthorized access, disclosure, alteration, or destruction. These measures
          include encryption, secure socket layer technology (SSL), regular security assessments, and
          strict access controls.
        </p>

        <h2 className="flex items-center gap-2 mt-4">
          <ExternalLink className="h-6 w-6 text-primary" />
          Third-Party Services
        </h2>
        <p>
          Our application may integrate with third-party services to enhance functionality. These
          third parties may collect information about you when you use our application. We encourage
          you to review the privacy policies of these third parties.
        </p>

        <h2 className="flex items-center gap-2 mt-4">
          <Users className="h-6 w-6 text-primary" />
          Children's Privacy
        </h2>
        <p>
          Our application is not intended for children under 16 years of age. We do not knowingly collect
          personal information from children under 16. If we learn we have collected personal information
          from a child under 16, we will delete that information promptly.
        </p>

        <h2 className="flex items-center gap-2 mt-4">
          <Clock className="h-6 w-6 text-primary" />
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <div className="bg-muted/30 p-5 rounded-lg mt-4">
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="flex items-center gap-2 mt-2">
            <ExternalLink className="h-4 w-4 text-primary" />
            <strong>Email:</strong> privacy@financetracker.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <ExternalLink className="h-4 w-4 text-primary" />
            <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
          </p>
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