import Header from "./header";
import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex h-screen overflow-y-scroll flex-col items-center justify-between p-24 bg-gray-50 dark:bg-gray-800">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}