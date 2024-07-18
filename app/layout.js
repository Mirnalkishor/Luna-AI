import '@styles/globals.css'
import { Session } from 'next-auth'
import { Inter } from 'next/font/google'
import AuthProvider from '@components/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LunaAI',
  description: 'Luna AI An open-source chatbot leveraging Generative AI to elevate Customer Service experiences.',
}

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <AuthProvider session={session}>

      {children}
      </AuthProvider>
      
      </body>
    </html>
  )
}