import type { Page } from "@playwright/test";

export class EntitlementPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
