import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  workers: 1,
  webServer: {
    command: "pnpm dev --port 5174",
    url: "http://localhost:5174",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:5174",
    ...devices["Desktop Chrome"],
  },
  reporter: [["list"]],
});
