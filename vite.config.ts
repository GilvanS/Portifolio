import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Configuração para GitHub Pages
    // Se o repositório não estiver na raiz (ex: username.github.io/repo), 
    // descomente a linha abaixo e ajuste o nome do repositório
    // const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portifolio';
    // const base = `/${repoName}/`;
    const base = '/'; // Para repositório na raiz (username.github.io)
    
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
