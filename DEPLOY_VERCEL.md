# Deploy na Vercel - Eco Terapia

## Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar repositório no GitHub
```bash
# 1. Crie um repositório novo no GitHub (https://github.com/new)
# Nome sugerido: eco-terapia-website

# 2. Adicione o remote do GitHub ao seu projeto local
git remote add origin https://github.com/SEU_USUARIO/eco-terapia-website.git

# 3. Faça push do código
git branch -M main
git push -u origin main
```

### Passo 2: Conectar com Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `eco-terapia-website`
5. Configure o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (já detectado automaticamente)
   - **Output Directory**: `dist` (já detectado automaticamente)
   - **Install Command**: `npm install`

6. Clique em "Deploy"

### Passo 3: Aguardar deploy
- A Vercel vai automaticamente:
  - Instalar dependências
  - Rodar o build
  - Fazer deploy
  - Gerar uma URL pública (ex: `eco-terapia-website.vercel.app`)

---

## Opção 2: Deploy via Vercel CLI (Mais rápido)

### Passo 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
# No diretório do projeto
cd /home/mswell/Projects/frontEcoTerapia

# Deploy de produção
vercel --prod
```

### Durante o processo, responda:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → No
- **What's your project's name?** → eco-terapia-website
- **In which directory is your code located?** → ./
- **Want to modify these settings?** → No

A Vercel vai:
1. Detectar automaticamente que é um projeto Vite
2. Usar as configurações corretas de build
3. Fazer deploy e retornar a URL pública

---

## Opção 3: Deploy Manual via Vercel Dashboard

### Passo 1: Build local
```bash
npm run build
```

### Passo 2: Deploy via dashboard
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Selecione "Import Third-Party Git Repository" ou "Deploy from CLI"
4. Arraste a pasta `dist` para fazer upload
5. Clique em "Deploy"

---

## Configurações Importantes

### Build Settings (caso precise ajustar)
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x (ou superior)
```

### Variáveis de Ambiente
Não há variáveis de ambiente necessárias neste projeto por enquanto.

### Domínio Customizado (Opcional)
Após o deploy, você pode:
1. Ir em "Settings" > "Domains"
2. Adicionar seu domínio customizado
3. Seguir as instruções para configurar DNS

---

## Comandos Úteis

### Verificar status do deploy
```bash
vercel ls
```

### Ver logs do deploy
```bash
vercel logs
```

### Fazer redeploy
```bash
vercel --prod
```

### Preview deploy (antes de produção)
```bash
vercel
```

---

## Deploys Automáticos (GitHub Integration)

Após conectar com GitHub, a Vercel vai:
- ✅ Fazer deploy automático a cada push na branch `main`
- ✅ Criar preview deployments para cada Pull Request
- ✅ Rodar checks de build automaticamente

---

## Troubleshooting

### Build falha na Vercel
1. Verifique se o build passa localmente:
   ```bash
   npm run build
   ```

2. Verifique se todas as dependências estão no `package.json`

3. Limpe o cache da Vercel:
   - Settings > General > "Clear Cache and Redeploy"

### Imagens não aparecem
- Certifique-se que os caminhos das imagens estão corretos
- Use caminhos relativos ao invés de absolutos
- Verifique se as imagens estão na pasta `src/assets/images`

### Fontes não carregam
- As fontes do Google Fonts devem funcionar normalmente
- Verifique se os imports no `index.css` estão corretos

---

## Monitoramento

### Analytics
A Vercel oferece analytics gratuito:
- Pageviews
- Top pages
- Referrers
- Devices

Ative em: Settings > Analytics

### Performance
- Core Web Vitals automaticamente rastreados
- Real Experience Score disponível

---

## Próximas Atualizações

Para fazer updates após o primeiro deploy:

**Se usando GitHub:**
```bash
git add .
git commit -m "Suas mudanças"
git push
```
→ Deploy automático na Vercel

**Se usando CLI:**
```bash
vercel --prod
```

---

## URLs Úteis

- Dashboard Vercel: https://vercel.com/dashboard
- Documentação Vite + Vercel: https://vercel.com/docs/frameworks/vite
- Suporte: https://vercel.com/support

---

## Checklist Final

Antes de fazer deploy:
- [x] Build passa localmente (`npm run build`)
- [x] Sem erros no console
- [x] Todas as imagens carregam corretamente
- [ ] Testar em diferentes navegadores
- [ ] Verificar responsividade (mobile ainda não implementado)
- [ ] Revisar conteúdo e textos

---

**Recomendação:** Use a **Opção 1 (GitHub + Vercel)** para ter deploys automáticos e histórico de versões!
