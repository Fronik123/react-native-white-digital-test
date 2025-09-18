declare module 'twrnc' {
  import { Config } from 'tailwindcss'

  export type TwConfig = Config

  export function create(config?: TwConfig): {
    (strings: TemplateStringsArray): object
    style: (classNames: string) => object
    color: (colorName: string) => string
  }

  const tw: {
    (strings: TemplateStringsArray): object
    style: (classNames: string) => object
    color: (colorName: string) => string
  }

  export default tw
}
