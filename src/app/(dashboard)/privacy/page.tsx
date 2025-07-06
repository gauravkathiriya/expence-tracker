"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Shield } from "lucide-react"

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

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>Last updated: June 15, 2023</p>

        <h2>Introduction</h2>
        <p>
          At FinanceTracker, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
          you use our financial management application.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect several types of information from and about users of our application, including:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, and other contact details you provide 
            when creating an account.
          </li>
          <li>
            <strong>Financial Information:</strong> Transaction data, account balances, income sources, 
            expenses, and other financial information you choose to input into the application.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with our application, including 
            features used, time spent, and actions taken.
          </li>
          <li>
            <strong>Device Information:</strong> Information about your device, operating system, browser 
            type, IP address, and other technical details.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>Providing and maintaining our application</li>
          <li>Personalizing your experience</li>
          <li>Analyzing usage patterns to improve our application</li>
          <li>Communicating with you about updates, features, or support</li>
          <li>Detecting and preventing fraudulent or unauthorized activity</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal 
          information from unauthorized access, disclosure, alteration, or destruction. These measures 
          include encryption, secure socket layer technology (SSL), regular security assessments, and 
          strict access controls.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our application may integrate with third-party services to enhance functionality. These 
          third parties may collect information about you when you use our application. We encourage 
          you to review the privacy policies of these third parties.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate or incomplete information</li>
          <li>The right to delete your personal information</li>
          <li>The right to restrict or object to processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our application is not intended for children under 16 years of age. We do not knowingly collect 
          personal information from children under 16. If we learn we have collected personal information 
          from a child under 16, we will delete that information promptly.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> privacy@financetracker.com<br />
          <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
        </p>
      </div>
    </div>
  )
} 