import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { IBM_Plex_Sans } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css"

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
})

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", font.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
