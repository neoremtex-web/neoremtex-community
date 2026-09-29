import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeoRemtex Community',
  description: 'Fórum e comunidade para motos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
