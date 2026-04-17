import { Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly itemTitle: Locator;
  readonly itemImage: Locator; // A
  readonly backButton: Locator; //A
  
  
  
  constructor(page: Page) {
    this.page = page;
    this.itemTitle = page.locator('[data-test="inventory-item-name"]');
    this.itemImage = page.locator('[data-test="inventory-item-img"]');  // A
    this.backButton = page.locator('[data-test="back-to-products"]');      // A
  }





}
