import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    base: './',
    server: {
        open: '/'
    },
    plugins: [eslint()]
});