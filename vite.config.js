// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   base: '/current-project/react-project/cirqle/',
//   plugins: [
//     react(),tailwindcss()
//   ],
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Remove this if you are not deploying under a subfolder
  base: '/current-project/react-project/cirqle/',
  
    plugins: [
    react(),tailwindcss()
  ],
  
  server: {
    proxy: {
      '/api': {
        target: 'http://cirqle.eu-west-2.elasticbeanstalk.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});



