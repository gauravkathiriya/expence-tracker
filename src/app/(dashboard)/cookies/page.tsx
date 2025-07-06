"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Cookie, Clock, Info, Check, Settings, AlertCircle, ExternalLink, FileText, Mail, GlobeLock, Trash2, CheckCircle, XCircle } from "lucide-react"

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

      <div className="flex items-center justify-center w-full mb-8">
        <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200 px-4 py-3 rounded-lg flex items-center w-full max-w-3xl">
          <Cookie className="h-5 w-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium m-0">
            This website uses cookies to enhance your browsing experience. You can manage your cookie preferences at any time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Essential Cookies</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            These cookies are necessary for the website to function and cannot be switched off in our systems.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Preference Cookies</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            These cookies allow us to remember choices you make and provide enhanced, personalized features.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Analytics Cookies</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            These cookies help us understand how visitors interact with our website, helping us improve our services.
          </p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="flex items-center text-muted-foreground">
          <Clock className="inline-block mr-2 h-4 w-4" />
          Last updated: June 15, 2023
        </p>

        <h2 className="flex items-center gap-2">
          <Info className="h-6 w-6 text-primary" />
          What Are Cookies
        </h2>
        <div className="bg-muted/30 p-5 rounded-lg">
          <p className="mb-2">
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and more useful to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start">
              <div className="mr-2 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Cookie className="h-3 w-3 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Persistent Cookies</p>
                <p className="text-sm m-0">Remain on your device when you go offline</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-3 w-3 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Session Cookies</p>
                <p className="text-sm m-0">Deleted when you close your web browser</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 m-0">Important Notice</h3>
          </div>
          <p className="text-amber-800 dark:text-amber-300 text-sm mb-0">
            By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. 
            If you do not agree to our use of cookies, you should set your browser settings accordingly or not use our website.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          How FinanceTracker Uses Cookies
        </h2>
        <p>
          When you use and access our service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <h4 className="text-base font-medium m-0">Essential cookies</h4>
            </div>
            <p className="text-sm m-0">
              These cookies are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Settings className="h-3 w-3 text-primary" />
              </div>
              <h4 className="text-base font-medium m-0">Analytical/performance cookies</h4>
            </div>
            <p className="text-sm m-0">
              These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Settings className="h-3 w-3 text-primary" />
              </div>
              <h4 className="text-base font-medium m-0">Functionality cookies</h4>
            </div>
            <p className="text-sm m-0">
              These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Settings className="h-3 w-3 text-primary" />
              </div>
              <h4 className="text-base font-medium m-0">Targeting cookies</h4>
            </div>
            <p className="text-sm m-0">
              These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
            </p>
          </div>
        </div>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Cookie Benefits
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Remember your login details
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Provide personalized content
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Improve website performance
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Enhance user experience
              </li>
            </ul>
          </div>
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-5">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
              <XCircle className="h-5 w-5 text-red-500" />
              Cookie Limitations
            </h3>
            <ul className="space-y-2 pl-0 list-none">
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                May slow down browsing slightly
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Can be blocked by browser settings
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                May raise privacy concerns
              </li>
              <li className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Some features won't work without them
              </li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <ExternalLink className="h-6 w-6 text-primary" />
          Third-Party Cookies
        </h2>
        <div className="flex items-start bg-muted/30 p-4 rounded-lg">
          <AlertCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm m-0">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          What Are Your Choices Regarding Cookies
        </h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-warning">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-warning mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm m-0">
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
          </div>
        </div>

        <div className="my-8 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 m-0">Cookie Management</h3>
          </div>
          <p className="text-blue-800 dark:text-blue-300 text-sm mb-2">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/50 dark:bg-blue-900/30 p-3 rounded-md">
              <p className="text-sm font-medium mb-1">Browser Settings</p>
              <p className="text-xs m-0">Adjust cookie settings in your browser preferences</p>
            </div>
            <div className="bg-white/50 dark:bg-blue-900/30 p-3 rounded-md">
              <p className="text-sm font-medium mb-1">Cookie Consent Tool</p>
              <p className="text-xs m-0">Use our cookie banner to manage your preferences</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            For Chrome web browser
          </h3>
          <p>
            Visit <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">this page from Google <ExternalLink className="ml-1 h-3 w-3" /></a>.
          </p>

          <h3 className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            For Internet Explorer web browser
          </h3>
          <p>
            Visit <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">this page from Microsoft <ExternalLink className="ml-1 h-3 w-3" /></a>.
          </p>

          <h3 className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            For Firefox web browser
          </h3>
          <p>
            Visit <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">this page from Mozilla <ExternalLink className="ml-1 h-3 w-3" /></a>.
          </p>

          <h3 className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            For Safari web browser
          </h3>
          <p>
            Visit <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">this page from Apple <ExternalLink className="ml-1 h-3 w-3" /></a>.
          </p>

          <h3 className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            For any other web browser
          </h3>
          <p>
            Please search for "how to delete cookies" in your preferred search engine.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Where Can You Find More Information About Cookies
        </h2>
        <p>
          You can learn more about cookies at the following third-party websites:
        </p>
        <ul className="space-y-2 pl-0 list-none">
          <li className="flex items-center">
            <ExternalLink className="h-4 w-4 text-primary mr-2" />
            <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              AllAboutCookies <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink className="h-4 w-4 text-primary mr-2" />
            <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              Network Advertising Initiative <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          Changes to This Cookie Policy
        </h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
        <div className="flex items-start bg-muted/30 p-4 rounded-lg">
          <Info className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm m-0">
            You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
          </p>
        </div>

        <h2 className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          Contact Us
        </h2>
        <div className="bg-muted/30 p-5 rounded-lg mt-4">
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <strong>Email:</strong> privacy@financetracker.com
            </div>
            <div className="flex items-center gap-2">
              <GlobeLock className="h-5 w-5 text-primary" />
              <strong>Address:</strong> 123 Financial Street, Suite 100, San Francisco, CA 94105
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 