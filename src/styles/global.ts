import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    list-style: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 0;
    padding: 0 171px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
