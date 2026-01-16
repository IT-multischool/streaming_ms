# Multischool Angola - Streaming Platform (React)

Aplicação React convertida a partir da aplicação HTML estática original, mantendo todos os estilos e funcionalidades.

## 🚀 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Copie os arquivos de assets (imagens, vídeos) para a pasta `public/stream`:
```bash
# Windows PowerShell
Copy-Item -Path "stream\img" -Destination "public\stream\img" -Recurse -Force
Copy-Item -Path "stream\videos" -Destination "public\stream\videos" -Recurse -Force
Copy-Item -Path "stream\icon" -Destination "public\stream\icon" -Recurse -Force
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
streaming-ms-react/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout/          # Sidebar, Header, Botbar
│   │   ├── Search/          # MultiSearch
│   │   ├── Video/           # VideoCard
│   │   └── Carousel/        # HeroCarousel, VideoCarousel
│   ├── pages/               # Páginas principais
│   ├── context/             # Context API (VideoContext)
│   ├── styles/              # CSS (main.css, bootstrap, splide, plyr)
│   └── App.jsx              # Componente principal
├── public/
│   └── stream/              # Assets (imagens, vídeos)
└── package.json
```

## ✨ Funcionalidades Implementadas

- ✅ Estrutura base React com Vite
- ✅ React Router configurado
- ✅ Componentes de Layout (Sidebar, Header, Botbar)
- ✅ Sistema de busca (MultiSearch)
- ✅ Carrosséis de vídeo (Hero e Video)
- ✅ Context API para estado global
- ✅ Navegação entre páginas
- ✅ Estilos CSS preservados

## 🔄 Próximos Passos

- [ ] Implementar página Stream completa com player de vídeo
- [ ] Adicionar mais seções na página Home
- [ ] Implementar páginas restantes (Cursos, Profile, Meet, Chatbot, etc.)
- [ ] Migrar funcionalidades JavaScript para hooks React
- [ ] Integrar com API backend
- [ ] Adicionar testes

## 📝 Notas

- Todos os estilos CSS foram preservados do projeto original
- Os componentes foram criados mantendo a mesma estrutura HTML e classes CSS
- A aplicação está pronta para receber dados de uma API backend





