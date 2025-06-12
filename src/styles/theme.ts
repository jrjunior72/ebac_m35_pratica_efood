export const theme = {
  colors: {
    primary: '#E66767',
    primaryDark: '#D15454',
    secondary: '#FFEBD9',
    background: '#FFF9EB',
    white: '#FFFFFF',
    text: '#4B4B4B',
    lightGray: '#F5F5F5',
    gray: '#E0E0E0',
    yellow: '#FFB930',
    textLight: '#666666',
    accent: '#FF6B00',
    accentDark: '#E05D00',
    highlight: '#E66767',  // Cor de destaque (ação)
    error: '#DE2E2E',      // Erros
    modalOverlay: 'rgba(0, 0, 0, 0.7)',
  },
  fonts: {
    primary: 'Roboto, sans-serif'
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1023px'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    extra: '40px'
  },
  shadows: {
    large: '0 5px 15px rgba(0, 0, 0, 0.1)',
  }
} as const // <-- Adicione 'as const' para tipos literais

// Exporte o tipo do tema
export type ThemeType = typeof theme
