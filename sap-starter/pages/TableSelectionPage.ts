import type { Page } from "@playwright/test";

export class TableSelectionPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  filterInput(key:string){
    return this.page.getByPlaceholder(new RegExp(`Filter by\\s+${key}$`,"i"));
  }
}
