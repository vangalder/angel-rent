// Design system utilities and constants

export const colors = {
  primary: {
    base: '#C89B5D',
    dark: '#A67C42',
    light: '#E6D5B8',
  },
  secondary: {
    base: '#2D2D2D',
    dark: '#1A1A1A',
    light: '#4A4A4A',
  },
  accent: {
    base: '#C77A5A',
    dark: '#A65C3F',
    light: '#E89C8B',
  },
} as const

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
  '7xl': '72px',
  '8xl': '96px',
} as const

export const durations = {
  instant: '0ms',
  fast: '150ms',
  base: '250ms',
  slow: '350ms',
  slower: '500ms',
} as const

