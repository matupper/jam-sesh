import { createTheme } from "@/lib/create-theme"

// Color palette from https://colorswall.com/palette/146377
export const lightTheme = createTheme({
  primary: {
    DEFAULT: "#0F172A",
    foreground: "#FFFFFF",
  },
  secondary: {
    DEFAULT: "#64748B",
    foreground: "#FFFFFF",
  },
  muted: {
    DEFAULT: "#F1F5F9",
    foreground: "#64748B",
  },
  accent: {
    DEFAULT: "#0EA5E9",
    foreground: "#FFFFFF",
  },
  background: {
    DEFAULT: "#FFFFFF",
    foreground: "#0F172A",
  },
  card: {
    DEFAULT: "#FFFFFF",
    foreground: "#0F172A",
  },
  border: "#E2E8F0",
})

export const darkTheme = createTheme({
  primary: {
    DEFAULT: "#F8FAFC",
    foreground: "#0F172A",
  },
  secondary: {
    DEFAULT: "#94A3B8",
    foreground: "#0F172A",
  },
  muted: {
    DEFAULT: "#1E293B",
    foreground: "#94A3B8",
  },
  accent: {
    DEFAULT: "#0EA5E9",
    foreground: "#0F172A",
  },
  background: {
    DEFAULT: "#0F172A",
    foreground: "#F8FAFC",
  },
  card: {
    DEFAULT: "#1E293B",
    foreground: "#F8FAFC",
  },
  border: "#334155",
}) 