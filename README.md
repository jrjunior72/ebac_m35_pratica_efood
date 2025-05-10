# eFood - Plataforma de Delivery (Desenvolvimento em Andamento)

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0-green)

## 📌 Progresso Atual

### ✅ Etapas Concluídas

1. **Configuração Inicial do Projeto**
   - [x] Setup do projeto React + TypeScript
   - [x] Instalação e configuração do Styled Components
   - [x] Configuração básica do React Router

2. **Página Home**
   - [x] Criação do componente `RestaurantCard`
   - [x] Implementação do `RestaurantList`
   - [x] Integração com dados mockados
   - [x] Estilização básica conforme Figma

3. **Navegação**
   - [x] Configuração das rotas básicas
   - [x] Link "Saiba mais" funcionando

### 🚧 Em Desenvolvimento Atual

**Página Restaurant** (70% concluída)
- [x] Estrutura básica da página
- [x] Componente `MenuSection` criado
- [ ] Finalização da estilização do cabeçalho
- [ ] Ajustes de layout nos cards de menu
- [ ] Responsividade completa

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
src/
├── components/
│   ├── RestaurantCard/   # Card de restaurante (completo)
│   ├── RestaurantList/   # Listagem (completa)
│   ├── MenuSection/      # Em desenvolvimento
│   ├── MenuList/         # Parcialmente completo
│   └── MenuItem/         # Em ajustes
├── pages/
│   ├── Home/             # Página inicial (completa)
│   └── Restaurant/       # Página em desenvolvimento
├── mocks/
│   └── restaurant.ts     # Dados mockados
├── types.ts              # Tipagens
└── App.tsx               # Rotas
```

⏭️ Próximos Passos
1. Finalizar a página Restaurant:
    * Completar estilização

    * Ajustar componentes de menu

    * Garantir responsividade
2. Implementar novas funcionalidades:

    * Sistema de carrinho

    * Filtros por categoria

    * Página de checkout


📌 Pendências Atuais
* Finalizar componente MenuItem

* Ajustar espaçamentos no MenuSection

* Corrigir alinhamento dos cards

* Testes em diferentes breakpoints
