'use client';

import '../css/globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Media',
  description: 'My personal Pinterest social media',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}
          suppressHydrationWarning={true} >
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
