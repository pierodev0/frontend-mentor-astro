import { defineConfig } from 'vite'
import tailwind from "@astrojs/tailwind";
// https://vitejs.dev/config/
export default defineConfig({
    integrations: [
        tailwind({
          applyBaseStyles: false,
        }),
      ],
  
})