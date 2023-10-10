import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome Laser Cutting Services in West Delhi, India | Precision Engraving, Cutting, and Design',
  description: 'Welcome Laser offers top-notch laser cutting services in West Delhi, India. Our expert team provides high-precision engraving, cutting, and custom design solutions for leather, rexine, and fabric industries. Explore our services today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
