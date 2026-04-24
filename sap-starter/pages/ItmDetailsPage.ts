import type { Page } from "@playwright/test";

export class ItmDetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
