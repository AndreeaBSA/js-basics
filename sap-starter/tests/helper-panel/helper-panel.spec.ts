import { spawn } from "node:child_process";
import { test, expect } from "../../fixtures/test-fixtures.js";
import { tables, transactions } from "../../utils/test-data.js";




// ## BEGINNER

// 1) Transaction shown -> helper afiseaza tranzactia activa.  
//    PRECONDITIE: browserul SAP-like este activ cu SE16.  
//    ACTIUNE: inspectez helper panel.  
//    REZULTAT: tranzactia `SE16` este vizibila.  

// 2) Selected table shown -> helper arata tabelul ales.  
//    PRECONDITIE: un tabel este selectat.  
//    ACTIUNE: schimb table name fara execute.  
//    REZULTAT: helper panel afiseaza selectia curenta.  

// 3) Current table after execute -> helper urmareste tabelul incarcat.  
//    PRECONDITIE: am selectat un tabel.  
//    ACTIUNE: execut interogarea.  
//    REZULTAT: helper panel afiseaza tabelul executat.  

// 4) Clear filters -> helper revine la `-`.  
//    PRECONDITIE: helper panel afiseaza filtre active.  
//    ACTIUNE: apas `Clear Filters`.  
//    REZULTAT: helper panel revine la starea vida (`-`).  


test.describe("BEGINERS", () => {

  test("All - Beginers", async ({ sapPage, tableSelectionPage, helperPanelPage }) => {
    
    //1.Transaction shown
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.entitlement;
    const selectedTable2 = tables.frParent;
    
    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await expect(helperPanelPage.helperPanel).toContainText(selectedTransaction);

    //2.Selected table shown
    await sapPage.tableNameInput.fill(selectedTable1);
    await sapPage.btnExecute.click({ timeout: 2000 });
    await expect(helperPanelPage.helperPanel).toContainText(selectedTable1);
    await sapPage.tableNameInput.fill(selectedTable2, { timeout: 2000 });
    await expect(helperPanelPage.helperPanel).toContainText(selectedTable1);

    //3.Current table after execute
    await sapPage.tableNameInput.fill(selectedTable2);
    await sapPage.btnExecute.click({ timeout: 2000 });
    await expect(helperPanelPage.helperPanel).toContainText(selectedTable2);

    //4.Clear filters
    await sapPage.btnClearFilters.click({ timeout: 2000 });
    await expect(helperPanelPage.helperPanel).toContainText('-');

  })
});



test.describe("MIDDLE", () => {

  test("All - Middle", async ({ sapPage, tableSelectionPage, helperPanelPage }) => {
    
    //5.Single filter chip
    const selectedTransaction = transactions.se16;
    const selectedTable2 = tables.frParent;
    const esidValue = 'ESID-777';

    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(selectedTable2);
    await sapPage.btnExecute.click({ timeout: 2000 });
    await sapPage.filterESID.fill(esidValue);
    await expect(helperPanelPage.helperPanel).toContainText('ESID=ESID-777');

    //6.Selected table shown


    //7.Current table after execute


    //8.Clear filters


  })
});