export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptopS: '860px',
  laptopM: '1024px',
  laptopL: '1440px',
  desktopS: '1360px',
  desktopM: '2560px',
} as const

export const defaultTheme = {
  colors: {
    white: '#FFF',
    black: '#000',

    primary: '#2C68F4',
    secondary: 'rgba(23, 29, 53, 0.12)',

    placeholder: 'rgba(23, 29, 53, 0.48)',
    title: '#171D35',
    base: 'rgba(23, 29, 53, 0.64)',

    body: '#ECEEF0',
    spotlight: '#F5F7F8',

    // status
    successDark: '#498D12',
    successLight: '#C2ED79',
    privateDark: '#8D3012',
    privateLight: '#ED9C79',

    destructive: '#FF4E3A',
  },

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktopS: `(max-width: ${size.desktopS})`,
    desktopM: `(max-width: ${size.desktopM})`,
  },

  fontSize: {
    sm: '0.75rem',
    md: '0.875rem',
    base: '1rem',
    lg: '1.5rem',
    '2xl': '2rem',
  },

  fontFamily: {
    roboto: 'Roboto',
  },
} as const
