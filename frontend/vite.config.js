import { defineConfig } from 'vite'


export default defineConfig ({
  plugins: [
    
    ],    
  // ...
  test: {
    // enable jest-like global test APIs
    globals: true
    // simulate DOM with happy-dom    
  }
})
