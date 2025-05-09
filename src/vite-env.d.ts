declare module 'vite-plugin-eslint'

declare module '*.png' {
  const content: string
  export default content
}

// vite-env.d.ts
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

// Uso:
import { ReactComponent as Logo } from './logo.svg'
