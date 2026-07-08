import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    screenshot: 'on',
    launchOptions: {
      slowMo: 3000, // Forces a full 3-second pause before every single action
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});