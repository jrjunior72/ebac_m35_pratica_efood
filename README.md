# 🍽️ eFood - Delivery Gastronômico

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0-green)

## 📌 Visão Geral
Plataforma de delivery desenvolvida em React com TypeScript, oferecendo:

- Catálogo de restaurantes com destaques
- Carrinho de compras interativo
- Design responsivo e acessível

## 🛠 Tecnologias
| Ferramenta | Descrição |
|------------|-----------|
| React | Biblioteca front-end |
| TypeScript | Tipagem estática |
| Styled Components | Estilização |
| Context API | Estado global |

## ✨ Funcionalidades
- **Destaques:**
  ✅ Etiquetas visíveis
  ✅ Filtro por categoria

- **Carrinho:**
  🛒 Adição/remoção de itens
  🔢 Ajuste de quantidades
  💰 Cálculo automático

## 🚀 Execução
```bash
git clone https://github.com/seu-user/efood.git
npm install
npm run dev //ou
npx vite --force --clearScreen=false

## 🔍 Layout de Referência

[![Figma](https://img.shields.io/badge/Visualizar%20Layout-Figma-FF6B6B?logo=figma)](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood)

## 🛠️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/jrjunior72/ebac_m35_pratica_eplay.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

📂 Estrutura do Projeto (Atual)

```bash
efood/
├── public/                   # Assets públicos
│   ├── images/               # Imagens globais
│   └── index.html            # Template HTML
│
├── src/
│   ├── assets/               # Assets da aplicação
│   │   ├── icons/            # Ícones SVG
│   │   └── images/           # Imagens específicas
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Banner/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   │
│   │   ├── Cart/
│   │   │   ├── CartItem/
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── CartModal/
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── RestaurantCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   │
│   │   └── ... (outros componentes)
│   │
│   ├── contexts/             # Contextos globais
│   │   └── CartContext.tsx
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Restaurant/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ... (outras páginas)
│   │
│   ├── styles/               # Estilos globais
│   │   ├── themes.ts         # Tema principal
│   │   └── global.ts         # Estilos globais
│   │
│   ├── types/                # Tipagens TypeScript
│   │   └── index.ts
│   │
│   ├── utils/                # Utilitários
│   │   └── formatCurrency.ts
│   │
│   ├── App.tsx               # Componente raiz
│   ├── main.tsx              # Ponto de entrada
│   └── routes.tsx            # Configuração de rotas
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md                 # Este arquivo
```
