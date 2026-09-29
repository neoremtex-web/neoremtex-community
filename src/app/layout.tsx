import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'NeoRemtex Community | Fórum de Discussão',
  description: 'Plataforma de comunidade e fórum para discussão sobre mecânica e elétrica de motos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
