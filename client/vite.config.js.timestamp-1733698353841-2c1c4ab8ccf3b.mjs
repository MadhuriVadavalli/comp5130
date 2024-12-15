// vite.config.js
import { defineConfig } from "file:///C:/IWS/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/IWS/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "C:\\IWS\\client";
var keyPath = path.resolve(__vite_injected_original_dirname, "cert", "key.pem");
var certPath = path.resolve(__vite_injected_original_dirname, "cert", "cert.pem");
if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error("SSL certificate files not found. Please check the paths:", {
    keyPath,
    certPath
  });
  process.exit(1);
}
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath)
    },
    // Optional: Specify the host and port
    host: "localhost",
    port: 5e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxJV1NcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxJV1NcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9JV1MvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBEZWZpbmUgcGF0aHMgZm9yIHRoZSBTU0wga2V5IGFuZCBjZXJ0aWZpY2F0ZVxuY29uc3Qga2V5UGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjZXJ0JywgJ2tleS5wZW0nKTsgLy8gQWRqdXN0IHBhdGggaWYgbmVlZGVkXG5jb25zdCBjZXJ0UGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjZXJ0JywgJ2NlcnQucGVtJyk7IC8vIEFkanVzdCBwYXRoIGlmIG5lZWRlZFxuXG4vLyBWZXJpZnkgdGhlIGNlcnRpZmljYXRlIGZpbGVzIGV4aXN0XG5pZiAoIWZzLmV4aXN0c1N5bmMoa2V5UGF0aCkgfHwgIWZzLmV4aXN0c1N5bmMoY2VydFBhdGgpKSB7XG4gIGNvbnNvbGUuZXJyb3IoXCJTU0wgY2VydGlmaWNhdGUgZmlsZXMgbm90IGZvdW5kLiBQbGVhc2UgY2hlY2sgdGhlIHBhdGhzOlwiLCB7XG4gICAga2V5UGF0aCxcbiAgICBjZXJ0UGF0aCxcbiAgfSk7XG4gIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCB0aGUgcHJvY2VzcyBpZiBmaWxlcyBhcmUgbWlzc2luZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIGh0dHBzOiB7XG4gICAgICBrZXk6IGZzLnJlYWRGaWxlU3luYyhrZXlQYXRoKSxcbiAgICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhjZXJ0UGF0aCksXG4gICAgfSxcbiAgICAvLyBPcHRpb25hbDogU3BlY2lmeSB0aGUgaG9zdCBhbmQgcG9ydFxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IDUwMDAsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK04sU0FBUyxvQkFBb0I7QUFDNVAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFNLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFFBQVEsU0FBUztBQUN6RCxJQUFNLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFFBQVEsVUFBVTtBQUczRCxJQUFJLENBQUMsR0FBRyxXQUFXLE9BQU8sS0FBSyxDQUFDLEdBQUcsV0FBVyxRQUFRLEdBQUc7QUFDdkQsVUFBUSxNQUFNLDREQUE0RDtBQUFBLElBQ3hFO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNELFVBQVEsS0FBSyxDQUFDO0FBQ2hCO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUssR0FBRyxhQUFhLE9BQU87QUFBQSxNQUM1QixNQUFNLEdBQUcsYUFBYSxRQUFRO0FBQUEsSUFDaEM7QUFBQTtBQUFBLElBRUEsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
