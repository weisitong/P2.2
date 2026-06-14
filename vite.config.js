import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        solutions: 'solutions.html',
        support: 'support.html',
        about: 'about.html',
        contact: 'contact.html',
        zh_main: 'zh/index.html',
        zh_products: 'zh/products.html',
        zh_solutions: 'zh/solutions.html',
        zh_support: 'zh/support.html',
        zh_about: 'zh/about.html',
        zh_contact: 'zh/contact.html'
      }
    }
  }
})
