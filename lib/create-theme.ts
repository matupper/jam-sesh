export interface ThemeColors {
  primary: {
    DEFAULT: string
    foreground: string
  }
  secondary: {
    DEFAULT: string
    foreground: string
  }
  muted: {
    DEFAULT: string
    foreground: string
  }
  accent: {
    DEFAULT: string
    foreground: string
  }
  background: {
    DEFAULT: string
    foreground: string
  }
  card: {
    DEFAULT: string
    foreground: string
  }
  border: string
}

export function createTheme(colors: ThemeColors): ThemeColors {
  return colors
} 