'use client'

import { CommunityLinks } from '@/components/CommunityLinks'
import { Container } from '@/components/Container'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* Hero Section */}
      <section className="border-b border-line">
        <Container className="flex flex-col items-start justify-center py-20 md:py-32">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            Bem-vindo
          </p>
          <h1 className="mt-6 font-display text-5xl uppercase leading-tight md:text-7xl">
            NeoRemtex <span className="text-accent">Community</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Fórum para troca de experiências sobre mecânica e elétrica de motos. Tire suas dúvidas,
            compartilhe soluções e converse com membros da comunidade sem necessidade de cadastro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#comunidade"
              className="bg-accent px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-bg transition hover:bg-accent-dark"
            >
              Participar
            </a>
            <a
              href="#comunidade"
              className="border border-line bg-panel px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-fg transition hover:border-accent hover:text-accent"
            >
              Ver mais
            </a>
          </div>
        </Container>
      </section>

      {/* Community Section */}
      <section id="comunidade" className="border-b border-line bg-panel/30">
        <Container className="py-16 md:py-24">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            Comunidade
          </p>
          <h2 className="mt-6 font-display text-4xl uppercase leading-tight md:text-5xl">
            Participe dos <span className="text-accent">canais</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            Escolha o melhor canal de comunicação para você e comece a participar das discussões
            sobre mecânica, elétrica e manutenção de motos.
          </p>
          <div className="mt-12">
            <CommunityLinks />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            Recursos
          </p>
          <h2 className="mt-6 font-display text-4xl uppercase leading-tight md:text-5xl">
            Como <span className="text-accent">funciona</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border border-line bg-panel p-6">
              <h3 className="font-display text-lg uppercase text-accent">Sem Cadastro</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Escolha um apelido e comece a participar imediatamente. Sem formulários complicados.
              </p>
            </div>
            <div className="border border-line bg-panel p-6">
              <h3 className="font-display text-lg uppercase text-accent">Organizado</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Categorias para mecânica, elétrica, manutenção e tópicos gerais facilitam a busca.
              </p>
            </div>
            <div className="border border-line bg-panel p-6">
              <h3 className="font-display text-lg uppercase text-accent">Comunidade</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Conecte-se com outros membros, tire dúvidas e compartilhe suas experiências.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-panel/50">
        <Container className="py-12 text-center">
          <p className="text-sm text-muted">
            © 2024 NeoRemtex Community. Todos os direitos reservados.
          </p>
        </Container>
      </footer>
    </main>
  )
}
