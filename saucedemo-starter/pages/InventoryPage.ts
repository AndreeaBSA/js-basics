import { Page,Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productImages: Locator;
  constructor(page: Page) {
    this.page = page;
    this.productImages=page.locator('.inventory_list img');
  }

  async getSrcImages(){
          let srcs:string[]=[];
          let count= await this.productImages.count();
        
          for(let i=0;i<count;i++){
            const src= await this.productImages.nth(i).getAttribute('src');
            srcs.push(src??'');
        }
         return srcs;
      }

}
