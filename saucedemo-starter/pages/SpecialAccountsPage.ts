import { Page } from '@playwright/test';

export class SpecialAccountsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
