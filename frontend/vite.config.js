import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
    proxy : { // Proxy is used to whitelisting ... i.e .. whenever we connect backend with front end .. there is an error which is known as cors error.. it prevent the enter the frontend logic to backend url.
      '/api' : "http://localhost:3000",
    },
  },
  plugins: [react()],
})
