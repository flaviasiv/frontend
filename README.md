# Eco Terapia Website

Website institucional da Eco Terapia, implementado com base no design aprovado do Figma.

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Tipografia (DM Sans, Roboto Mono, Oswald)

## Estrutura do Projeto

```
frontEcoTerapia/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── Partners.tsx
│   │   ├── HeadlineWithIcons.tsx
│   │   ├── HeroImageSection.tsx
│   │   ├── Hero3.tsx
│   │   ├── Hero2.tsx
│   │   ├── Quote.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   ├── assets/
│   │   └── images/        # Imagens exportadas do Figma
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── public/                # Assets públicos
└── dist/                  # Build de produção

```

## Design System

### Cores
- **Background**: #FFFFFF
- **Accent**: #CFEE0C (Verde limão)
- **Headline**: #00160A (Preto esverdeado)
- **Caption**: #485C11 (Verde escuro)
- **Divider**: #E9E9E9 (Cinza claro)

### Tipografia
- **Heading**: Oswald 700 (similar a BentonSans Cond Bold)
- **Body**: DM Sans 400/700
- **Mono**: Roboto Mono 400

### Border Radius
- **eco**: 112.23px (para imagens hero)

## Comandos

### Instalar dependências
```bash
npm install
```

### Rodar em desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview do build
```bash
npm run preview
```

## Seções Implementadas

1. **Navigation** - Menu de navegação flutuante com backdrop blur
2. **Header** - Hero principal com imagem e texto
3. **Parceiros** - Grid de logos dos parceiros (6 logos)
4. **Headline com Ícones** - Seção explicativa com 3 benefícios
5. **Hero Image Section** - Imagem hero fullwidth
6. **Hero 3** - Conteúdo + imagem (Reconexão com a natureza)
7. **Hero 2** - Imagem + conteúdo (Emagrecimento consciente)
8. **Quote** - Depoimento em destaque
9. **Testimonials** - Grade de depoimentos em 2 colunas
10. **CTA Section** - Call-to-action com background
11. **Social Icons** - Instagram e Google My Business
12. **Footer** - Rodapé com informações de contato

## Fidelidade ao Figma

Todas as seções foram implementadas seguindo fielmente:
- Layout (1280px container com 40px padding)
- Espaçamentos exatos
- Cores do design system
- Tipografia
- Border radius
- Estrutura de componentes
- Ordenação das seções

## Próximos Passos

- [ ] Adicionar conteúdo real para substituir placeholders
- [ ] Adicionar logos reais dos parceiros
- [ ] Implementar responsividade para mobile/tablet
- [ ] Adicionar animações e transições
- [ ] Integrar com backend (formulários, etc)
- [ ] Otimizar imagens
- [ ] Adicionar testes
- [ ] SEO e meta tags

## Autor

Desenvolvido seguindo o design aprovado do Figma para Eco Terapia.
