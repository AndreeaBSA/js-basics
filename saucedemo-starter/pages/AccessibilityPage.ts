import { Page } from '@playwright/test';

export class AccessibilityPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
