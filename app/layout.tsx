import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MVBD Admin | MoviesVerseBD",
  description: "Secure administration dashboard for MoviesVerseBD.",
  generator: "mvbd-admin",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d12",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark bg-background"><body className="antialiased">{children}</body></html>
}
