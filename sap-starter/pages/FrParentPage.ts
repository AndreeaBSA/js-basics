import type { Locator, Page } from "@playwright/test";

export class FrParentPage {
  readonly page: Page;
  readonly filterESID: Locator;
  readonly filterFRGUID: Locator;
  readonly filterSTATUS: Locator;



  constructor(page: Page) {
    this.page = page;
    this.filterESID = this.filterInput('ESID');
    this.filterFRGUID = this.filterInput('FR_GUID');
    this.filterSTATUS = this.filterInput('STATUS');
  }
  //todo
  filterInput(key:string):Locator{
    return this.page.getByPlaceholder(new RegExp(`Filter by\\s+${key}`,"i"));
  }
  tableCell(key:number, columnName: string ): Locator{
  return this.page.locator(`tbody tr[data-row-index="${key}"]`).locator(`[data-column-name="${columnName}"]`);
  }
  getRowCount(){
    return this.page.locator(`tbody tr[data-row-index]`).count();
  }
}
