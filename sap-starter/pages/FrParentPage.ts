import type { Locator, Page } from "@playwright/test";

export class FrParentPage {
  readonly page: Page;
  readonly filterESID: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterESID = this.filterInput('ESID');
    this.filterFRGUID= this.filterInput('FR_GUID');
    this.filterESID = this.filterInput('ESID');
  }


  //todo
  filterInput(key:string):Locator{
    return this.page.getByPlaceholder(new RegExp(`Filter by \\s+${key}`,"i"));
  }
}
