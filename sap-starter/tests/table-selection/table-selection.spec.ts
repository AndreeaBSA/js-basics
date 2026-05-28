import { getActiveResourcesInfo } from "node:process";
import { test, expect } from "../../fixtures/test-fixtures.js";
import { tables, transactions } from "../../utils/test-data.js";
import { SapTableBrowserPage } from "../../pages/SapTableBrowserPage.js";
import { TableSelectionPage } from "../../pages/TableSelectionPage.js";

// ## BEGINNER

// 1) Execute via buton -> un tabel cunoscut incarca rezultate.  
//    PRECONDITIE: tranzactia este activa.  
//    ACTIUNE: selectez `/CFF/FR_PARENT` si apas Execute.  
//    REZULTAT: grid-ul afiseaza rezultatele tabelului.  


test.describe('Table execution via button', () => {

  test("Table execution via button", async ({ sapPage }) => {
    //Arrange
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    //act
    await sapPage.tableNameInput.fill(tables.frParent);
    await sapPage.btnExecute.click();
    //expect
    //await expect(sapPage.statusPanel).toHaveText('/CFF/FR_PARENT returned \d+ matched row(s) with \d+ displayed.');
    await expect(sapPage.statusPanel).toContainText('/CFF/FR_PARENT returned');
  })
});


// 2) Enter pe input-ul de tabel -> executia se face direct.  
//    PRECONDITIE: tranzactia este activa.  
//    ACTIUNE: introduc `/CFF/ENTITLEMENT` si apas Enter.  
//    REZULTAT: tabelul se incarca fara click suplimentar.  


test.describe('Table execution via enter pe input', () => {

  test("Table execution via enter pe input", async ({ sapPage }) => {
    //Arrange
    const entitlementTable = tables.entitlement;
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    //act
    await sapPage.tableNameInput.fill(tables.entitlement);
    await sapPage.tableNameInput.press('Enter');
    //expect
    await expect(sapPage.currentResults).toHaveText(entitlementTable);
  })
});


// 3) Clear filters -> valorile introduse sunt resetate.  
//    PRECONDITIE: am completat un filtru.  
//    ACTIUNE: apas `Clear Filters`.  
//    REZULTAT: campurile de filtrare revin la gol.  

test.describe('clear filter', () => {

  test("clear filter", async ({ sapPage }) => {
    //Arrange
    const entitlementTable = tables.entitlement;
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    //act
    await sapPage.tableNameInput.fill(tables.entitlement);
    await sapPage.btnExecute.click();
    //expect
    await expect(sapPage.currentResults).toHaveText(entitlementTable);
    await sapPage.btnClearFilters.click();
    await expect(sapPage.statusPanel).toContainText('Filters cleared for');
  })
});


// 4) Headerele se schimba cu tabelul.  
//    PRECONDITIE: un tabel este deja executat.  
//    ACTIUNE: execut alt tabel.  
//    REZULTAT: headerele in grid corespund noului tabel.  

test.describe('Header change', () => {

  test("Header change", async ({ sapPage }) => {
    //Arrange
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(tables.entitlement);
    await sapPage.btnExecute.click();
    await expect(sapPage.currentResults).toHaveText('/CFF/ENTITLEMENT');
    //act
    await sapPage.tableNameInput.fill(tables.frParent);
    await sapPage.btnExecute.click();
    //expect
    await expect(sapPage.currentResults).toHaveText('/CFF/FR_PARENT');
  })
});


// ## MIDDLE

// 5) FR_PARENT expune filtrul ESID.  
//    PRECONDITIE: tranzactia este activa.  
//    ACTIUNE: selectez FR_PARENT.  
//    REZULTAT: campul de filtru ESID apare.  

test.describe("Expune filtru", () => {

  test("Navigare circulara", async ({ sapPage, tableSelectionPage }) => {

    //const frParent = transactions.se16
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(tables.frParent);
    await expect(tableSelectionPage.filterInput('ESID')).toBeVisible();
  })
});


test.describe("", () => {


  const tableFilters: Array<{ table: string, filtres: string[] }> = [
    { table: tables.frParent, filtres: ['ESID', 'FR_GUID', 'STATUS'] }
  ]
  //  for(const andreea of tableFilters){
  //     for(const fil of andreea.filtres){
  //         test(`tabel ${andreea.table} expune filtrul ${fil}`,async ({sapPage,tableSelectionPage})=>{
  //               // Arrange
  //               await sapPage.goTo();
  //               await sapPage.commandInput.fill(transactions.se16);
  //               await sapPage.btnOpen.click();
  //               // Act
  //               await sapPage.tableNameInput.fill(andreea.table);
  //               //Assert
  //               await expect(tableSelectionPage.filterInput(fil)).toBeVisible();


  //         })
  //     }
  //  }

  for (const { table, filtres } of tableFilters) {
    for (const fil of filtres) {

      test(`tabel ${table} expune filtrul ${fil}`, async ({ sapPage, tableSelectionPage }) => {
        // Arrange
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.btnOpen.click();
        // Act
        await sapPage.tableNameInput.fill(table);
        //Assert
        await expect(tableSelectionPage.filterInput(fil)).toBeVisible();
      })
    }
  }

  // interface Masina{
  //     marca:string,
  //     model:string
  // }

  // let mas:Masina={marca:"aaa",model:"bbb"};

  // console.log(mas.marca)

  // let {marca,model}=mas;

  // console.log(marca)
});



// 6) MAILCOUNT schimba filtrele -> OWNER apare, ESID dispare.  
//    PRECONDITIE: tranzactia este activa.  
//    ACTIUNE: selectez MAILCOUNT.  
//    REZULTAT: filtrul OWNER este vizibil, filtrul ESID nu mai exista.  

test.describe('MAILCOUNT schimba filtrele', () => {

  test("MAILCOUNT schimba filtrele", async ({ sapPage, tableSelectionPage }) => {

    const tableFilters: Array<{ table: string, filters: string[] }> = [
      { table: tables.mailCount, filters: ['PARENT_ID', 'OWNER', 'STATUS', ] }
    ]
    
    //Arrange
    for (const { table, filters } of tableFilters){
      for (const owner of filters) {
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    //act
    await sapPage.tableNameInput.fill(tables.mailCount);
    //expect
    await expect(tableSelectionPage.filterInput(owner)).toBeVisible;
    await expect(tableSelectionPage.filterInput(ESID)).not.toBeVisible;
    }
  }
  })
   
});

// 7) ITM_DETAILS expune PARENT_ID si REGION.  
//    PRECONDITIE: tranzactia este activa.  
//    ACTIUNE: selectez ITM_DETAILS.  
//    REZULTAT: filtrele PARENT_ID si REGION sunt vizibile.  

test.describe('Header change', () => {

  test("Header change", async ({ sapPage }) => {
    //Arrange
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(tables.entitlement);
    await sapPage.btnExecute.click();
    await expect(sapPage.currentResults).toHaveText('/CFF/ENTITLEMENT');
    //act
    await sapPage.tableNameInput.fill(tables.frParent);
    await sapPage.btnExecute.click();
    //expect
    await expect(sapPage.currentResults).toHaveText('/CFF/FR_PARENT');
  })
});

// 8) Schimbare tabel reseteaza filtrele.
//    PRECONDITIE: am completat filtrul ESID pe FR_PARENT.
//    ACTIUNE: schimb la MAILCOUNT.
//    REZULTAT: filtrele vechi dispar, filtrele noi sunt goale.  


