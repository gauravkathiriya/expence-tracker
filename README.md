# Expense Tracker

A comprehensive expense tracking application built with Next.js 14, Shadcn UI components, and Supabase backend. Manage your income and expenses with ease, categorize transactions, and monitor your financial health with a clean, responsive interface.

## Features

- 🔒 Authentication with Supabase (Login, Signup, Logout)
- 💰 Add, edit, and delete income transactions 
- 💸 Add, edit, and delete expense transactions
- 📊 Dashboard with financial overview
- 📱 Responsive design for all devices
- 🌓 Light/Dark mode with theme support
- 🔍 Filter and search transactions
- 📅 Date-based transaction tracking

## Technologies Used

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Supabase (Authentication, PostgreSQL Database)
- **State Management**: React Hooks, Zustand
- **Form Management**: React Hook Form, Zod validation
- **Styling**: Tailwind CSS, CSS Modules

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Supabase account (for database and authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Set up the Supabase schema by running the SQL queries in `src/lib/schema.sql` in your Supabase SQL editor.

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
expense-tracker/
├─ src/
│  ├─ app/
│  │  ├─ (dashboard)/     # Dashboard layout and its pages
│  │  │  ├─ dashboard/
│  │  │  ├─ income/       # Income pages
│  │  │  ├─ expenses/     # Expense pages
│  │  │  └─ layout.tsx
│  │  ├─ login/           # Authentication pages
│  │  ├─ signup/
│  │  ├─ auth/            # Auth callback handling
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ auth/            # Authentication components
│  │  ├─ layout/          # Layout components like headers
│  │  ├─ transactions/    # Transaction-related components 
│  │  └─ ui/              # Shadcn UI components
│  ├─ lib/
│  │  ├─ auth.ts          # Authentication utilities
│  │  ├─ database.types.ts # Supabase database types
│  │  ├─ schema.sql       # Supabase schema setup
│  │  ├─ supabase.ts      # Supabase client config
│  │  ├─ types.ts         # TypeScript types
│  │  └─ utils.ts         # Utility functions
└─ ...
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/expense-tracker](https://github.com/yourusername/expense-tracker)
