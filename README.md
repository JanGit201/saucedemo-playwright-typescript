# Saucedemo Playwright TypeScript Framework

An enterprise-ready, end-to-end (E2E) UI automation framework designed for the [SauceDemo](https://www.saucedemo.com/) e-commerce platform. This project leverages **Playwright** and **TypeScript** while strictly adhering to the **Page Object Model (POM)** design pattern to deliver scalable, highly maintainable, and robust test execution.

---

## 🚀 Key Features

- **Page Object Model (POM):** Complete separation of UI elements/interactions from the test scripts for maximum reusability.
- **Web-First Assertions:** Utilizes Playwright's native auto-waiting `expect` mechanisms to eliminate brittle, hardcoded sleep/wait intervals.
- **Resilient Locators:** Implements industry-standard `data-test` locator strategies to ensure scripts remain resilient against frontend UI changes.
- **Artifact Collection:** Configured to automatically capture detailed screenshots on execution states.
- **Robust Reporting:** Generates rich, interactive HTML reports mapping out granular execution metrics for every test step.
- **Throttled Execution Capability:** Integrated global `slowMo` parameters within the central configuration to facilitate live execution reviews and debugging sessions.

---

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Test Runner & Automation:** Playwright Test
- **Reporting Engine:** Playwright Built-in HTML Reporter

---

## 📁 Directory Structure

```text
saucedemo-playwright-typescript/
│
├── pages/                  # Page Object Classes (UI Locators & Actions)
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│
├── tests/                  # Test Scripts (Abstract business assertions)
│   └── login.spec.ts
│
├── playwright.config.ts    # Centralized Automation Framework Engine Configuration
├── .gitignore              # Safely excludes node_modules and execution reports
└── README.md               # Framework documentation
```
