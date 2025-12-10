import type { Metadata } from 'next'
import { Inter, Italianno } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italianno',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'angel.rent - The Art of Staying',
  description: 'Boutique hospitality curated for international creatives and digital nomads in the heart of CDMX. Be the first to experience El Ángel.',
  keywords: ['boutique hospitality', 'CDMX', 'Reforma', 'luxury rental', 'creative sanctuary', 'digital nomads'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${italianno.variable}`}>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-7VXBQY7W2F`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VXBQY7W2F');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

