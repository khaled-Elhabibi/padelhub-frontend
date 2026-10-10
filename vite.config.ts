import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // The router plugin must run before anything that transforms JSX.
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), tailwindcss()],
  oxc: {
    jsx: { runtime: 'automatic' },
  },
  build: {
    rolldownOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
})
