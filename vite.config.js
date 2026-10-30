import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use base: './' if you deploy to a sub-path such as GitHub Pages.
export default defineConfig({
  plugins: [react()],
});
