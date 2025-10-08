// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ⚠️ назва репозиторію має збігатися з тим, що на GitHub
export default defineConfig({
  plugins: [react()],
  base: '/04-react-query/', // <-- дуже важливо!
})
