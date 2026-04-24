import { Page, Locator } from '@playwright/test';
import { Product } from '../models/Product';

export class InventoryPage {
  readonly page: Page;
  readonly productImages: Locator;
  readonly products: Locator;
  readonly sortSelect:Locator
  readonly itemsNames: Locator;
  readonly itemsPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productImages = page.locator('.inventory_list img');
    this.products = page.locator('[data-test="inventory-item"]');
    this.sortSelect=page.locator('[data-test="product-sort-container"]');
    this.itemsNames=page.locator('[data-test="inventory-item-name"]');
    this.itemsPrices=page.locator('[data-test="inventory-item-price"]');

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

  async selectSort(option:'az'|'za'|'lohi'|'hilo'){
    await this.sortSelect.waitFor({state:'visible',timeout:15000})
    await this.sortSelect.selectOption(option);
  }

  async getProductNames():Promise<string[]>{
    return this.itemsNames.allTextContents();
  }

  async getProductPrice():Promise<number[]>{
    let data= await this.itemsPrices.allTextContents();
    let prices= data.map((price)=>Number(price.replace('$','')));
    return prices;
  }

 getCardByName(name:string):Locator{
  return this.products.filter({has:this.page.getByText(name,{exact:true})})
}


async openDetails(name:string){
  const card= this.getCardByName(name);
  
  await card.getByRole('link',{name}).first().click();
  // await card.click();   //A
  // await card.locator('[data-test$="-test-link"]').click();
}










}
