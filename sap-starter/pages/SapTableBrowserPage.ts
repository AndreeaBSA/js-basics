import type { Page } from "@playwright/test";

export class SapTableBrowserPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
