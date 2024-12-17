import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechInsights Blog',
  description: 'A dynamic blog about web development and technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">TechInsights</Link>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 py-4 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            &copy; 2023 TechInsights Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

