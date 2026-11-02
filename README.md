# DevLinks

Desafio da Formação React da Rocketseat. É uma página de links no estilo "link na bio", com foto, nome de usuário, lista de links e redes sociais.

<!-- ![Preview](./public/preview.png) -->

O desafio pedia três coisas: seguir o layout do Figma, puxar o conteúdo de um CMS (para dar pra trocar foto, links e redes sem mexer no código) e, como extra, ter tema claro e escuro. Fiz as três.

Para o CMS usei o Hygraph. Os dados vêm por GraphQL, usando o `fetch` do próprio Next.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS, Hygraph, next-themes, react-icons e lucide-react.

## Rodando localmente

Clone e instale as dependências:

```bash
git clone https://github.com/Nanu317/devlinks.git
cd devlinks
npm install
```

Crie um arquivo `.env.local` na raiz com a URL da Content API do seu projeto no Hygraph:

```env
HYGRAPH_ENDPOINT=https://...
```

E rode:

```bash
npm run dev
```

O projeto abre em `http://localhost:3000`.

## Schema no Hygraph

Para rodar com o seu próprio Hygraph, o projeto espera esta estrutura:

- Enumeration `SocialPlatform`: `GITHUB`, `INSTAGRAM`, `YOUTUBE`, `LINKEDIN`
- Component `LinkItem`: `title` e `url` (texto)
- Component `SocialItem`: `platform` (dropdown com a enumeration acima) e `url` (texto)
- Model `Profile`:
  - `username` (texto)
  - `avatarLight` e `avatarDark` (asset)
  - `links` (component `LinkItem`, múltiplos valores)
  - `socials` (component `SocialItem`, múltiplos valores)

Depois é só cadastrar um `Profile`, publicar e liberar a leitura na Public Content API (Project settings > Access > API Access).

## Organização

- `src/app`: layout, página principal e CSS global (onde ficam as cores dos dois temas)
- `src/components`: avatar, lista de links, redes sociais, rodapé e o switch de tema
- `src/lib/hygraph.ts`: a função que busca os dados no CMS
- `src/types/profile.ts`: os tipos dos dados
- `src/data/mocks.ts`: dados falsos que usei para montar a tela antes de integrar o CMS
