import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Verificar se estamos em uma rota React
const reactRoutes = ['/login', '/register', '/forgot-password', '/app'];
const currentPath = window.location.pathname;
const isReactRoute = reactRoutes.some(route => currentPath.startsWith(route));

// Criar o elemento root dinamicamente se não existir
function ensureRootElement() {
  let root = document.getElementById('root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    root.style.display = 'none';
    document.body.appendChild(root);
  }
  return root;
}

// Função para carregar CSS dinamicamente apenas quando necessário
async function loadReactCSS() {
  if (!document.getElementById('react-css-loaded')) {
    // Marcar como carregado para evitar duplicação
    const marker = document.createElement('meta');
    marker.id = 'react-css-loaded';
    document.head.appendChild(marker);
    
    // Carregar CSS dinamicamente
    await Promise.all([
      import('./styles/react-scoped.css'),
      import('./styles/bootstrap.min.css'),
      import('./styles/splide.min.css'),
      import('./styles/plyr.css'),
      import('./styles/main.css')
    ]);
  }
}

// Função para inicializar React quando em rota React
async function initReact() {
  // Esconder conteúdo estático do WordPress ANTES de carregar CSS
  const staticPage = document.getElementById('page');
  if (staticPage) {
    staticPage.style.display = 'none';
  }
  
  // Carregar CSS primeiro e AGUARDAR carregar completamente
  await loadReactCSS();
  
  // Aguardar frames para garantir que os estilos foram aplicados
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  
  // Garantir que root existe e está visível
  const rootElement = ensureRootElement();
  rootElement.style.display = 'block';
  
  // Renderizar React apenas DEPOIS que CSS estiver carregado
  if (!rootElement._reactRoot) {
    rootElement._reactRoot = ReactDOM.createRoot(rootElement);
    rootElement._reactRoot.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
}

// Função para limpar React quando voltar para página estática
function cleanupReact() {
  const staticPage = document.getElementById('page');
  if (staticPage) {
    staticPage.style.display = 'block';
  }
  
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.style.display = 'none';
    // Não fazer unmount se não foi montado ainda
    if (rootElement._reactRoot) {
      rootElement._reactRoot.unmount();
      rootElement._reactRoot = null;
    }
  }
}

// Verificar rota inicial
if (isReactRoute) {
  initReact();
} else {
  // Na página inicial, garantir que React está limpo
  cleanupReact();
}

// Escutar mudanças de rota (voltar/avançar)
window.addEventListener('popstate', () => {
  const currentPath = window.location.pathname;
  const isReactRouteNow = reactRoutes.some(route => currentPath.startsWith(route));
  
  if (isReactRouteNow) {
    initReact();
  } else {
    cleanupReact();
  }
});

