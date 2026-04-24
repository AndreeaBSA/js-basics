import { defineConfig, devices } from "@playwright/test";
import { fileURLToPath } from "node:url";
import path from "node:path";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
const appRoot = path.resolve(currentDir, "..", "sap-ui");

const baseURL = process.env.BASE_URL ?? "http://127.0.0.1:4173";
const useDocker = !!process.env.BASE_URL;
const webServerEnv =
  process.platform === "win32"
    ? {
        ...process.env,
        ComSpec: process.env.ComSpec || "powershell.exe",
      }
    : process.env;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: 0,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  ...(!useDocker && {
    webServer: {
      command: "npm run dev -- --host 127.0.0.1 --port 4173",
      cwd: appRoot,
      env: webServerEnv,
      url: "http://127.0.0.1:4173",
      reuseExistingServer: true,
    },
  }),
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
