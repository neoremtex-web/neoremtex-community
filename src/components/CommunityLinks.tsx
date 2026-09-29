import { ArrowRightIcon } from '@/icons'

const LINKS = [
  {
    name: 'WhatsApp',
    note: 'Grupo de discussão',
    href: 'https://chat.whatsapp.com/Klp4ymZm69',
  },
  {
    name: 'Telegram',
    note: 'Grupo da comunidade',
    href: 'https://t.me/+taEbpjS_k_c5MmMx',
  },
  {
    name: 'E-mail',
    note: 'Fale com a comunidade',
    href: 'mailto:neoremtex@gmail.com',
  },
]

export function CommunityLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 border border-line bg-panel px-5 py-4 transition-all hover:border-accent hover:bg-panel/80"
        >
          <span>
            <span className="block font-display text-lg uppercase tracking-wide text-fg">
              {link.name}
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {link.note}
            </span>
          </span>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" />
        </a>
      ))}
    </div>
  )
}
