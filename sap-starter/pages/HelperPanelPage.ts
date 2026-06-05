import type { Page, Locator } from "@playwright/test";

export class HelperPanelPage {
  readonly page: Page;
  readonly helperPanel: Locator;
  readonly activeFilters: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helperPanel = this.page.locator('[data-testid="helper-panel"]');
    this.activeFilters = this.page.locator('.helper-filters > div');
  }
}
