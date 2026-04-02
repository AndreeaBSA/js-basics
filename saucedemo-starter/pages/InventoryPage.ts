import { Page, Locator } from '@playwright/test';
import { Product } from '../models/Product';

export class InventoryPage {
  readonly page: Page;
  readonly productImages: Locator;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productImages = page.locator('.inventory_list img');
    this.products = page.locator('[data-test="inventory-item"]');

  }

  async getSrcImages() {
    let srcs: string[] = [];
    let count = await this.productImages.count();

    for (let i = 0; i < count; i++) {
      const src = await this.productImages.nth(i).getAttribute('src');
      srcs.push(src ?? '');
    }
    return srcs;
  }


  async getProductDetails(card: Locator): Promise<Product> {
    const productName = await card.locator('[data-test="inventory-item-name"]').textContent();
    const productPrice = await card.locator('[data-test="inventory-item-price"]').textContent();
    const productDescription = await card.locator('[data-test="inventory-item-desc"]').textContent();
    return {
      name: productName ?? '',
      price: Number((productPrice ?? '').replace('$', '').trim()),
      description: productDescription ?? ''
    };
  }




}
