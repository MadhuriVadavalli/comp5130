import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../cert/localhost+2-key.pem')), // Ensure this path is correct
      cert: fs.readFileSync(path.resolve(__dirname, '../cert/localhost+2.pem')), // Ensure this path is correct
    },
    // Optionally, you can specify the port here if needed
    port: 5173,
  },
});
