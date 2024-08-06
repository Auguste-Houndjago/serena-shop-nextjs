import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header'

import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { WelcomeModal } from '@/components/ui/WelcomeModal'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Serena Shop',
  description: 'Modern ECommerce Website with Next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                <div><WelcomeModal/></div>
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>
                    Copyright © 2023 - All right reserved by Next Capitain001(Houndjago Auguste)
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
