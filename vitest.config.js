import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: 'v8',
      extension: ['.js', '.jsx'], // ✅ correct extensions for JSX project
      include: ['src/**/*.{js,jsx}'], // ✅ include source files for coverage
      exclude: ['**/*.test.*', '**/__tests__/**'], // ✅ ignore test files
      reporter: ['text', 'json-summary', 'json'],
      reportsDirectory: './coverage',
    },
  },
});