import type { Page, Locator} from "@playwright/test";

export class MailCountPage {
  readonly page: Page;
  readonly filterPARENTID: Locator;
  readonly filterOWNER: Locator;
  readonly filterSTATUS: Locator;


  constructor(page: Page) {
    this.page = page;
    this.filterPARENTID = this.filterInput("PARENT_ID");
    this.filterOWNER = this.filterInput("OWNER");
    this.filterSTATUS = this.filterInput("STATUS");
  }

  filterInput(key: string): Locator {
    return this.page.getByPlaceholder(new RegExp(`Filter by\\s+${key}$`, "i"));
  }


}
