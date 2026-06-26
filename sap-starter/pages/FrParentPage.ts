import type {Locator, Page } from "@playwright/test";

export class FrParentPage {
  readonly page: Page;
  readonly tableName: string;
  readonly filterESID: Locator;
  readonly filterFRGUID: Locator;
  readonly filterSTATUS: Locator;
  readonly resultsTable: Locator;
  readonly rows : Locator
  //readonly frGuidRow: Locator;


  constructor(page: Page) {
    this.page = page;
    this.tableName = "/CFF/FR_PARENT";
    this.filterESID = page.getByPlaceholder(/Filter by\s+ESID$/i);
    this.filterFRGUID = page.getByPlaceholder(/Filter by\s+FR_GUID$/i);
    this.filterSTATUS = page.getByPlaceholder(/Filter by\s+STATUS$/i);
    this.resultsTable = this.page.locator('[data-testid="results-table"]');
    this.rows = this.page.locator('[data-testid="table-row-${index}"]');
    
  }

async getRowCount(){
  return this.page.locator('[data-testid="results-table"]').count;
}
  

//   esidCell(rowIndex:number){

//     return this.page.locator(`tbody tr[data-row-index="${rowIndex}"] [data-column-name="ESID"]`)
//   }

// frguidCell(rowIndex:number){

//     return this.page.locator(`tbody tr[data-row-index="${rowIndex}"] [data-column-name="FR_GUID"]`)
//   }

// entguidCell(rowIndex:number){

//     return this.page.locator(`tbody tr[data-row-index="${rowIndex}"] [data-column-name="ENT_GUID"]`)
//   }


tableCell(rowIndex:number,columnName:string){

    return this.page.locator(`tbody tr[data-row-index="${rowIndex}"] [data-column-name=${columnName}]`)
  }



}


