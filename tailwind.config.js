/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",
        sidebar: "oklch(var(--sidebar))",
        "sidebar-foreground": "oklch(var(--sidebar-foreground))",
        "sidebar-primary": "oklch(var(--sidebar-primary))",
        "sidebar-primary-foreground": "oklch(var(--sidebar-primary-foreground))",
        "sidebar-border": "oklch(var(--sidebar-border))",
        "sidebar-ring": "oklch(var(--sidebar-ring))",
        "sidebar-input": "oklch(var(--sidebar-input))",
        
      },
      
    },
  },
  plugins: [],
}

