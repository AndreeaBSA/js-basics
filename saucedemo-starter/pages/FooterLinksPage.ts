import { Page } from '@playwright/test';

export class FooterLinksPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
