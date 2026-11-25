# Chakra UI Test

Teste técnico de front-end: recriação de duas telas de um marketplace de
design (categorias e checkout) com **React** e **Chakra UI**.

> Projeto de estudo, sem fins comerciais e sem afiliação com a empresa cujo
> layout serviu de referência. Marcas e imagens pertencem aos seus donos.

## Stack

- React 19 + React Router 7
- Chakra UI 3 + react-icons
- Vite 8 (build e dev server)
- Vitest + Testing Library
- ESLint 9 (flat config) + Prettier + Husky + lint-staged

## Rodando

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script            | O que faz                    |
| ----------------- | ---------------------------- |
| `npm run dev`     | Servidor de desenvolvimento  |
| `npm run build`   | Build de produção em `dist/` |
| `npm run preview` | Serve o build localmente     |
| `npm test`        | Testes (Vitest)              |
| `npm run lint`    | ESLint                       |
| `npm run format`  | Prettier                     |

Rotas: `/` (categorias) e `/checkout`.

## Hooks de git

- **pre-commit:** `lint-staged` (ESLint + Prettier nos arquivos alterados)
- **pre-push:** lint e testes

## Fim de linha (LF)

O projeto usa LF. No Windows:

```bash
git config --global core.autocrlf input
```
