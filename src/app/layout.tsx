import { Analytics } from '@vercel/analytics/react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/src/components/templates/Footer'
import { Top } from '@/src/components/templates/Top'
import GoogleAnalytics from '@/src/components/util/GoogleAnalytics'

import { Providers } from './providers'

import '@/src/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Activ Savoirs',
  description: 'Centre de formations sur mesure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={` ${inter.className}`}>
        <Providers>
          <div className="min-h-screen min-w-screen">
            <Top />
            <main className="flex-1">
              <div className="w-full mx-auto">
                <div className="flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                  <GoogleAnalytics />
                  {children}
                  <Analytics />
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
