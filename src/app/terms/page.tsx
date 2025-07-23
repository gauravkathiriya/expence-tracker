export const metadata = {
  title: "Terms of Service | FinanceTracker",
  description: "Read our terms of service and user agreement.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms of Service
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Last updated: {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using FinanceTracker's services, website, or applications (collectively, the "Services"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              FinanceTracker provides financial management tools and services that allow users to track expenses, 
              monitor income, create budgets, and analyze their financial data. The specific features and functionality 
              may vary based on the subscription plan selected.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our Services, you must create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information when creating your account</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              We reserve the right to terminate accounts that violate these terms or for any other reason at our discretion.
            </p>

            <h2>4. Subscription and Billing</h2>
            <p>
              FinanceTracker offers both free and paid subscription plans. By selecting a paid plan, you agree to pay all fees 
              associated with that plan. Subscription fees are billed in advance on a recurring basis, depending on the billing 
              cycle you select (monthly or annually).
            </p>
            <p>
              You may cancel your subscription at any time, but no refunds will be provided for any unused portion of your 
              current billing period. We reserve the right to change our pricing and subscription plans with reasonable notice.
            </p>

            <h2>5. User Content</h2>
            <p>
              You retain ownership of any content you submit, upload, or create within our Services ("User Content"). 
              By providing User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, 
              and display that content solely for the purpose of providing and improving the Services.
            </p>
            <p>
              You are solely responsible for your User Content and must not submit content that:
            </p>
            <ul>
              <li>Violates any applicable law or regulation</li>
              <li>Infringes on the rights of others</li>
              <li>Is harmful, fraudulent, deceptive, or offensive</li>
              <li>Jeopardizes the security of your account or anyone else's</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              The Services, including all content, features, and functionality, are owned by FinanceTracker and are protected 
              by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create 
              derivative works of, publicly display, or use our intellectual property without our explicit permission.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FinanceTracker shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or 
              in connection with your use of our Services.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. 
              We do not warrant that the Services will be uninterrupted or error-free, that defects will be corrected, or that 
              the Services are free of viruses or other harmful components.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of New York, 
              without regard to its conflict of law provisions.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time by posting the revised terms on our website. Your continued use of the Services 
              after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@financetracker.com<br />
              Address: 123 Finance Street, Suite 100, New York, NY 10001, United States
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 