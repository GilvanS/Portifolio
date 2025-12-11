<div align="center">
<h1>🚀 Portfólio - Gilvan Sousa QA</h1>
<p>Portfólio profissional com interface inspirada em VS Code</p>
</div>

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🛠️ Como executar localmente

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em modo de desenvolvimento
```bash
npm run dev
```
O site estará disponível em `http://localhost:3000`

### 3. Visualizar build de produção localmente

Para testar como ficará no GitHub Pages:

```bash
# Build + Preview
npm run preview:build

# Ou separadamente:
npm run build
npm run preview
```

O preview estará disponível em `http://localhost:4173` (porta padrão do Vite)

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy automático (recomendado)

O projeto já está configurado com GitHub Actions para deploy automático!

**Passos:**

1. **Habilitar GitHub Pages no repositório:**
   - Vá em `Settings` → `Pages`
   - Em `Source`, selecione `GitHub Actions`
   - Salve as configurações

2. **Fazer push para a branch `main` ou `master`:**
   ```bash
   git add .
   git commit -m "Configurar deploy para GitHub Pages"
   git push origin main
   ```

3. **Aguardar o workflow:**
   - Vá em `Actions` no seu repositório
   - O workflow `Deploy to GitHub Pages` será executado automaticamente
   - Após concluir, seu site estará disponível em:
     - `https://[seu-usuario].github.io/[nome-do-repo]` (se não for repositório raiz)
     - `https://[seu-usuario].github.io` (se for repositório username.github.io)

### Opção 2: Deploy manual

1. **Fazer build:**
   ```bash
   npm run build
   ```

2. **Configurar no GitHub:**
   - Vá em `Settings` → `Pages`
   - Em `Source`, selecione a branch `gh-pages` e pasta `/root`
   - Ou faça upload da pasta `dist` manualmente

3. **Criar branch gh-pages (se necessário):**
   ```bash
   git checkout -b gh-pages
   git add dist
   git commit -m "Deploy para GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

## ⚙️ Configuração do Base Path

Se o seu repositório **NÃO** estiver na raiz do GitHub Pages (ex: `username.github.io/repo`), você precisa ajustar o `base` no `vite.config.ts`:

```typescript
// Para repositório em subdiretório
const base = '/nome-do-seu-repositorio/';
```

Se for repositório na raiz (`username.github.io`), mantenha:
```typescript
const base = '/';
```

## 📁 Estrutura do Projeto

```
Portifolio/
├── components/       # Componentes React
├── .github/
│   └── workflows/    # GitHub Actions
├── index.html        # HTML principal
├── App.tsx          # Componente principal
├── vite.config.ts   # Configuração do Vite
└── package.json     # Dependências e scripts
```

## 🎨 Funcionalidades

- ✅ Interface inspirada em VS Code
- ✅ Sistema de abas navegáveis
- ✅ Preview de diferentes seções do portfólio
- ✅ Fechamento de abas
- ✅ Design responsivo e moderno

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run preview:build` - Build + Preview em um comando

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
