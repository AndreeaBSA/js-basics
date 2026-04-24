import type { Page } from "@playwright/test";

export class FrParentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
