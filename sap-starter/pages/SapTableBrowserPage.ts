import type { Keyboard, Locator, Page } from "@playwright/test";

export class SapTableBrowserPage {
  readonly page: Page;
  readonly commandInput: Locator;
  readonly btnOpen: Locator;
  readonly tableNameInput: Locator;
  readonly btnExecute: Locator;
  readonly currentResults: Locator
  readonly helperTransaction: Locator;
  readonly statusPanel: Locator;
  readonly browserActive: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commandInput = page.getByLabel("Transaction");
    this.btnOpen = this.page.getByRole("button", { name: "Open" });
    this.tableNameInput = page.getByLabel("Table Name");
    this.btnExecute = this.page.getByRole("button", { name: "Execute" });
    this.currentResults = this.page.locator(".results-panel .results-meta > span:first-child");
    this.statusPanel = this.page.locator('[data-testid="status-message-area"]');
    this.browserActive = this.page.locator('[data-testid="browser-activation-state"]');
    
    
    this.helperTransaction = this.page
      .locator(".helper-row")
      .filter(({ hasText: 'Transaction' }))
      .locator('span')
      .last();

  }
  async goTo() {
    this.page.goto("/");

  }
}
