import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import Breadcrumb from "./components/breadcrumb"
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dar Chabab Tetouan - Centre de Jeunesse",
  description: "Centre culturel et éducatif dédié à l'autonomisation des jeunes à Tetouan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <Breadcrumb />
          <main className="pt-[128px]">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
