import { getActiveResourcesInfo } from "node:process";
import { test, expect } from "../../fixtures/test-fixtures.js";
import { automationAnchor, columnsFrParent, secondaryAnchor, tables, transactions } from "../../utils/test-data.js";
import { SapTableBrowserPage } from "../../pages/SapTableBrowserPage.js";
import { TableSelectionPage } from "../../pages/TableSelectionPage.js";
import { FrParentPage } from "../../pages/FrParentPage.js";


// ## BEGINNER

// 1) ESID filter -> extrag FR_GUID si ENT_GUID din randul principal.  
//    PRECONDITIE: SE16 este activ si `/CFF/FR_PARENT` este disponibil.  
//    ACTIUNE: filtrez dupa `ESID-777` si execut.  
//    REZULTAT: obtin exact 1 rand, FR_GUID = `...A555`, ENT_GUID = `...B777`.  

// 2) Multiple results -> un ESID comun returneaza mai multe randuri.  
//    PRECONDITIE: tabelul este disponibil.  
//    ACTIUNE: filtrez dupa un ESID comun (`ESID-100`).  
//    REZULTAT: row count = 4 randuri.  

// 3) Filter submit by Enter -> filtrul dinamic poate executa direct.  
//    PRECONDITIE: tabelul este selectat.  
//    ACTIUNE: completez filtrul ESID si apas Enter.  
//    REZULTAT: interogarea ruleaza fara click pe Execute.  

// 4) FR_GUID lookup -> caut direct dupa FR_GUID.  
//    PRECONDITIE: cunosc FR_GUID-ul ancorei secundare.  
//    ACTIUNE: filtrez dupa FR_GUID.  
//    REZULTAT: randul returnat are ESID-778 si STATUS = Pending.  




test.describe('BEGINER - Table FR_Parent', () => {

  test("ESID filter", async ({ sapPage, frParentPage }) => {
    //Arrange
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.btnOpen.click();
    //act
    await sapPage.tableNameInput.fill(tables.frParent);
    await sapPage.btnExecute.click();
    
    const expectedfrGuid = 'FR0000000000000000000000001389';
    await frParentPage.filterESID.fill(automationAnchor.esid)
    //expect
    await expect(frParentPage.tableCell(0,columnsFrParent.FR_GUID)).toHaveText(expectedfrGuid);
  })

      test("Multiple Filter", async ({ sapPage, frParentPage}) =>{
      //Arrange
      await sapPage.goTo();
      await sapPage.commandInput.fill(transactions.se16);
      await sapPage.btnOpen.click();
      //act
      await sapPage.tableNameInput.fill(tables.frParent);
      await sapPage.btnExecute.click();

      await frParentPage.filterESID.fill(`ESID-100`);
       expect(frParentPage.getRowCount()).toEqual('4');


      //expect(frParentPage.getRowCount());

});

test("2) Multiple Filter", async ({ sapPage, frParentPage}) =>{
//Arrange
await sapPage.goTo();
await sapPage.commandInput.fill(transactions.se16);
await sapPage.btnOpen.click();
//act
await sapPage.tableNameInput.fill(tables.frParent);
await sapPage.btnExecute.click();

await frParentPage.filterESID.fill(`ESID-100`);

const rows = 
await expect(frParentPage.getRowCount()).toEqual('4');


//expect(frParentPage.getRowCount());

});

test("3) Filter submit by Enter", async ({ sapPage, frParentPage}) =>{
//Arrange
await sapPage.goTo();
await sapPage.commandInput.fill(transactions.se16);
await sapPage.btnOpen.click();
//act
await sapPage.tableNameInput.fill(tables.frParent);
await sapPage.btnExecute.click();

await frParentPage.filterESID.fill(`ESID`);
await sapPage.tableNameInput.press('Enter');
const selectedTable1 = tables.frParent;
await expect(sapPage.currentResults).toHaveText(selectedTable1);
});


      test("4) FR_GUID lookup", async ({ sapPage, frParentPage}) =>{
          //Arrange
          await sapPage.goTo();
          await sapPage.commandInput.fill(transactions.se16);
          await sapPage.btnOpen.click();
          //act
          await sapPage.tableNameInput.fill(tables.frParent);
          await sapPage.btnExecute.click();

          await frParentPage.filterFRGUID.fill(secondaryAnchor.esid);
      
          //expect
          const expectedfrGuid = 'FR00000000000000000000000000A556';
          await expect(frParentPage.tableCell(1,columnsFrParent.FR_GUID)).toHaveText(expectedfrGuid);
      });

});
