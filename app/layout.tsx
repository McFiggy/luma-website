
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'GrowLuma - Chemical-free seed sanitation with nonthermal plasma',
  description: 'LUMA builds nonthermal plasma systems that sanitize seed surfaces, boost germination, and reduce chemical inputs. Chemical-free seed sanitation with nonthermal plasma.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'GrowLuma - Chemical-free seed sanitation with nonthermal plasma',
    description: 'LUMA builds nonthermal plasma systems that sanitize seed surfaces, boost germination, and reduce chemical inputs.',
    url: '/',
    siteName: 'GrowLuma',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowLuma - Chemical-free seed sanitation with nonthermal plasma',
    description: 'LUMA builds nonthermal plasma systems that sanitize seed surfaces, boost germination, and reduce chemical inputs.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
