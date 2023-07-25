import 'styled-components'

import { defaultTheme } from '@/styles/themes/DefaultTheme'

type TypeTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}
