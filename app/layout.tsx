import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Sree Vidhya Jyothi Coaching Centre (R) - Excellence in Education',
  description: 'Sree Vidhya Jyothi Coaching Centre (R): Premier institution dedicated to nurturing young minds with cutting-edge education, modern facilities, and holistic development.',
  generator: 'v0.app',
  icons: {
  icon: [
    { url: '/logo.jpg', type: 'image/jpeg' }
  ],
  apple: '/logo.jpg',
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
