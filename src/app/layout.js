import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* autentizace */}
        <AuthProvider>

          <div className="container">
              {children}
          </div>

        </AuthProvider>

      </body>
    </html>
  )
}
