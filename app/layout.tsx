import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import AnimationProvider from "@/components/animation-provider"
import VerifyImages from "./verify-images"

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Load Bebas Neue font for headings - more rock-styled
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Broken Leash | 90's Rock. No Restraints.",
  description: "Official website of rock band Broken Leash. Check out our music, upcoming shows, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebasNeue.variable} noise-bg min-h-screen flex flex-col`}>
        <AnimationProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <VerifyImages />
        </AnimationProvider>
      </body>
    </html>
  )
}
