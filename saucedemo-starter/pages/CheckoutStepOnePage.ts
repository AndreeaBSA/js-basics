import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
