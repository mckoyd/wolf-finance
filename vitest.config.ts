import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    resolveSnapshotPath: (testPath, snapExt) =>
      testPath.replace(/\.([cm]?ts|tsx|jsx|js|mjs|cjs)$/i, `.snap${snapExt}`),
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage/unit",
      reporter: ["text", "lcov", "html"],
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.stories.{ts,tsx}",
        "src/**/__tests__/**",
        "src/test/**",
        "**/*.d.ts",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
