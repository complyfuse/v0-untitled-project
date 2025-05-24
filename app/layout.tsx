import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ComplyFuse – Vendor Assessments for EU SMBs in 15 Minutes",
  description:
    "Launch, track and audit vendor questionnaires without spreadsheets or big-suite price tags. Join the ComplyFuse wait-list.",
  keywords: "vendor assessment, compliance, GDPR, NIS2, DORA, EU compliance, vendor management",
  openGraph: {
    title: "ComplyFuse – Vendor Assessments for EU SMBs in 15 Minutes",
    description: "Launch, track and audit vendor questionnaires without spreadsheets or big-suite price tags.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
