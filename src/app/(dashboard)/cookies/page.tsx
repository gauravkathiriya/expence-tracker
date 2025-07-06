"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Cookie } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-6 mb-8">
        <PageHeader
          title="Cookie Policy"
          description="How we use cookies and similar technologies"
          icon={Cookie}
        />
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>Last updated: June 15, 2023</p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and more useful to you.
        </p>
        <p>
          Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
        </p>

        <h2>How FinanceTracker Uses Cookies</h2>
        <p>
          When you use and access our service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These cookies are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.
          </li>
          <li>
            <strong>Analytical/performance cookies:</strong> These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
          </li>
          <li>
            <strong>Functionality cookies:</strong> These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).
          </li>
          <li>
            <strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
          </li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
        </p>

        <h2>What Are Your Choices Regarding Cookies</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <h3>For Chrome web browser</h3>
        <p>
          Visit <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">this page from Google</a>.
        </p>

        <h3>For Internet Explorer web browser</h3>
        <p>
          Visit <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">this page from Microsoft</a>.
        </p>

        <h3>For Firefox web browser</h3>
        <p>
          Visit <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer">this page from Mozilla</a>.
        </p>

        <h3>For Safari web browser</h3>
        <p>
          Visit <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">this page from Apple</a>.
        </p>

        <h3>For any other web browser</h3>
        <p>
          Please search for "how to delete cookies" in your preferred search engine.
        </p>

        <h2>Where Can You Find More Information About Cookies</h2>
        <p>
          You can learn more about cookies at the following third-party websites:
        </p>
        <ul>
          <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">AllAboutCookies</a></li>
          <li><a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
        </ul>

        <h2>Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
        <p>
          You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> privacy@financetracker.com<br />
          <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
        </p>
      </div>
    </div>
  )
} 