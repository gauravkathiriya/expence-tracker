import { Users, Target, Award, Heart } from "lucide-react"

export const metadata = {
  title: "About Us | FinanceTracker",
  description: "Learn about our mission, values, and the team behind FinanceTracker.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About FinanceTracker
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our mission is to empower individuals and businesses with the tools they need to achieve financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                FinanceTracker was founded in 2023 with a simple but powerful mission: to make financial management accessible to everyone. 
                Our founders experienced firsthand the challenges of managing personal finances and saw an opportunity to create a solution 
                that would help people take control of their financial lives.
              </p>
              <p className="text-muted-foreground">
                What started as a simple expense tracking tool has evolved into a comprehensive financial management platform used by 
                thousands of individuals and businesses worldwide. We're proud of how far we've come, but we're even more excited about 
                the journey ahead.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <Target className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">$5M+</h3>
                <p className="text-muted-foreground">Savings Tracked</p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">4.8/5</h3>
                <p className="text-muted-foreground">User Rating</p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">User-Centric</h3>
              <p className="text-muted-foreground">
                We put our users first in everything we do, from product design to customer support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Simplicity</h3>
              <p className="text-muted-foreground">
                We believe financial management should be simple and accessible to everyone.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our product and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="h-32 w-32 rounded-full bg-muted"></div>
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-muted-foreground text-center">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 