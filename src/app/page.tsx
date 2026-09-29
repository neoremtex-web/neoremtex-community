export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Comunidade
        </p>
        <h1 className="font-display text-5xl uppercase leading-none md:text-7xl">
          NeoRemtex <span className="text-accent">Community</span>
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted">
          Fórum para troca de experiências sobre mecânica e elétrica de motos.
          Tire dúvidas, compartilhe soluções e converse com a comunidade.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#comunidade"
            className="bg-accent px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-bg transition hover:bg-accent-dark"
          >
            Participar
          </a>
          <a
            href="#forum"
            className="border border-line bg-panel px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-fg transition hover:border-accent"
          >
            Ver fórum
          </a>
        </div>
      </section>
    </main>
  )
}
