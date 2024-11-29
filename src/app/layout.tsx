import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
ThemeProvider
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio showcasing my projects and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

