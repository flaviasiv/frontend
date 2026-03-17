# Eco Terapia – Guia para Agentes

## Características do Projeto
- Site institucional que replica fielmente o layout aprovado no Figma para a Eco Terapia.
- Foco em comunicação visual: hero com imagem, depoimentos, seções de benefícios e call-to-action.
- Interface desktop-first (largura base de 1280px com padding de 40px); responsividade ainda não implementada.
- Fontes DM Sans, Oswald e Roboto Mono carregadas via Google Fonts; cores centrais `#CFEE0C`, `#00160A`, `#485C11`, `#E9E9E9`.
- Imagens exportadas do Figma ficam em `src/assets/images/` e utilizam um border-radius característico de 112.23px nas peças hero.

## Stack Tecnológico
- React 18 com componentes funcionais escritos exclusivamente em TypeScript.
- Vite como bundler e servidor de desenvolvimento.
- Tailwind CSS para estilização; estilos globais em `src/index.css`.
- Estrutura de fontes web via Google Fonts definida no HTML base.

## Estrutura de Pastas
- `src/main.tsx` e `src/App.tsx` compõem o ponto de entrada.
- Componentes reutilizáveis ficam em `src/components/`, cada um em arquivo próprio (`Navigation.tsx`, `Hero2.tsx`, `CTASection.tsx` etc.).
- Recursos estáticos e imagens exportadas residem em `src/assets/`.
- Arquivos públicos e metadados HTML vivem em `public/`.
- Builds de produção são emitidas em `dist/` (mantido fora do controle de versão).

## Seções Já Implementadas
- Navegação fixa com blur, hero principal com texto e imagem, grade de parceiros, seção de benefícios com ícones.
- Seções Hero2/Hero3 com alternância de imagem e conteúdo; seção de citação em destaque.
- Depoimentos em duas colunas, CTA com destaque visual, ícones sociais (Instagram e Google My Business) e rodapé com contato.

## Backlog Imediato (ver `PROXIMOS_PASSOS.md`)
- Substituir placeholders por conteúdo real e logos definitivos.
- Implementar responsividade mobile/tablet e otimização de imagens.
- Integrar formulários com backend, adicionar animações e cobertura de testes.
- Incluir SEO/meta tags e documentar scripts adicionais (`npm run test`, se criado).

## Diretrizes do Repositório

### Organização de Módulos
O app é um projeto Vite + React TypeScript concentrado em `src/`. Os entry points estão em `src/main.tsx` e `src/App.tsx`, componentes compartilhados em `src/components/`, e imagens em `src/assets/`. Estilos Tailwind centralizados em `src/index.css`; HTML estático em `public/`. Materiais de agentes/documentação vivem em `.context/`. A pasta `dist/` é gerada após o build e permanece não versionada.

### Comandos de Desenvolvimento
Execute `npm install` para hidratar `node_modules/`. Inicie o ambiente local com `npm run dev`. Gere o pacote de produção com `npm run build` e valide usando `npm run preview`. Garanta que `npm run lint` esteja limpo antes de abrir PRs.

### Estilo de Código
Escreva apenas TypeScript; evite `.jsx`. Componentes React em PascalCase (por exemplo, `HeroBanner.tsx`) e hooks/utilitários específicos podem ser colocados ao lado do componente. Prefira utilitários Tailwind; classes customizadas ficam em `src/index.css` ou arquivos locais. Indente com duas espaços, utilize aspas simples em props JSX e siga as regras do ESLint em vez de desativá-las; ajuste a configuração apenas quando indispensável.

### Testes
A configuração de testes ainda não existe. Ao introduzir testes, utilize React Testing Library e salve-os ao lado do componente (`src/components/__tests__/`) ou em `src/__tests__/`. Documente scripts novos no `package.json` e rode-os em conjunto com `npm run lint` antes de subir código.

### Commits e PRs
Adote Conventional Commits (`feat(ui): add booking hero`). Cada commit deve ser focado e lintado. PRs precisam resumir mudanças visíveis, listar arquivos impactados ou screenshots e referenciar tarefas em `PROXIMOS_PASSOS.md` ou issues. Antes de solicitar revisão, rode `npm run build` e agregue evidências (`npm run preview`, imagens). Atualize documentação relevante (`README.md`, `.context/`) sempre que APIs ou comportamentos mudarem para manter outros agentes alinhados.
