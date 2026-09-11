import type { Page, Locator } from "@playwright/test";

export class ItmDetailsPage {
  readonly page: Page;
  readonly filterPARENTID: Locator;
  readonly filterREGION: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterPARENTID = this.filterInput("PARENT_ID");
    this.filterREGION = this.filterInput("REGION");
  }

  filterInput(key: string): Locator {
    return this.page.getByPlaceholder(new RegExp(`Filter by\\s+${key}$`, "i"));
  }

}
