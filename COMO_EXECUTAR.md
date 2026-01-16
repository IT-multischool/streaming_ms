# 🚀 Como Executar a Aplicação React

## Passo 1: Instalar Dependências (Já feito ✅)
```bash
npm install --legacy-peer-deps
```

## Passo 2: Executar a Aplicação

### Modo Desenvolvimento (Recomendado)
```bash
npm run dev
```

A aplicação será aberta automaticamente em: **http://localhost:3000**

### Outros Comandos Disponíveis

**Build para Produção:**
```bash
npm run build
```

**Preview do Build:**
```bash
npm run preview
```

## 📋 Checklist Antes de Executar

- ✅ Dependências instaladas
- ✅ Estrutura de pastas criada
- ✅ CSS copiado
- ⚠️ Verificar se as imagens estão em `public/stream/img/`

## 🔧 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Erro: "Port already in use"
```bash
# O Vite tentará usar outra porta automaticamente
# Ou edite vite.config.js para mudar a porta
```

### Imagens não aparecem
```bash
# Certifique-se de que as imagens estão em:
# public/stream/img/
```

## 📝 Notas

- A aplicação usa **Vite** como bundler (muito rápido!)
- Hot Module Replacement (HMR) está ativo - mudanças aparecem instantaneamente
- O servidor de desenvolvimento abre automaticamente no navegador





