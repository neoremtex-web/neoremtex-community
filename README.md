# NeoRemtex Community

Plataforma de comunidade e fórum para discussão sobre mecânica e elétrica de motos.

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/neoremtex-web/neoremtex-community.git
cd neoremtex-community

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## 📦 Estrutura do Projeto

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Componentes reutilizáveis
│   ├── CommunityLinks.tsx  # Links para canais de comunidade
│   └── Container.tsx       # Container wrapper
├── lib/
│   └── forum.ts           # Forum logic e types
├── icons/
│   └── index.tsx          # Icon components
└── styles/
    └── globals.css        # Global styles
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz build da aplicação para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run type-check` - Verifica tipos TypeScript

## 🎨 Design

- **Cores personalizadas** via Tailwind CSS
- **Tipografia** com fontes display e mono
- **Dark mode** por padrão
- **Responsive** para todos os tamanhos de tela
- **Tema NeoRemtex** com laranja (#ff6b35) como cor de destaque

## 📝 Funcionalidades

- ✅ Hero section com call-to-action
- ✅ Seção de comunidade com links (WhatsApp, Telegram, E-mail)
- ✅ Features overview
- ✅ Estrutura para fórum com categorias
- 🔲 Implementação completa do fórum
- 🔲 Autenticação de usuários
- 🔲 Persistência de dados (banco de dados)
- 🔲 Notificações em tempo real

## 🌐 Cores

- **bg**: #0a0a0a (fundo principal)
- **panel**: #151515 (painéis)
- **line**: #2a2a2a (bordas)
- **fg**: #ffffff (texto principal)
- **muted**: #9a9a9a (texto secundário)
- **accent**: #ff6b35 (laranja, destaque)
- **accent-dark**: #e85d2c (laranja escuro, hover)

## 📄 Licença

MIT

## 👥 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.
