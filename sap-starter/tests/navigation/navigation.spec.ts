import { test, expect } from "../../fixtures/test-fixtures.js";
import { tables, transactions } from "../../utils/test-data.js";


//************** BEGINNER ******************

// 1) SE16 via Enter -> tabelul selectat se incarca corect.  
//  PRECONDITIE: aplicatia este deschisa.  
// ACTIUNE: introduc `SE16`, selectez un tabel si execut.  
//   REZULTAT: grid-ul se incarca, helper panel reflecta tranzactia. 


test.describe("Navigation_1", () => {

  test("SE16 via Enter", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable = tables.frParent;
    //Arrange
    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    //await sapPage.commandInput.press("Enter");
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(selectedTable);
    const value = await sapPage.tableNameInput.inputValue();
    await sapPage.btnExecute.click({ timeout: 2000 });
    await expect(sapPage.currentResults).toHaveText(selectedTable);
    await expect(sapPage.helperTransaction).toHaveText(selectedTransaction);
  })
});


// 2) SE16N via Enter pe input-ul de tabel -> execut direct din input.  
//    PRECONDITIE: browser-ul este activ.  
//    ACTIUNE: introduc `SE16N`, completez table name si apas Enter.  
//    REZULTAT: tabelul ruleaza fara click pe Execute.  

test.describe("Navigation_2", () => {
  test("SE16N via Enter pe input", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16n;
    const selectedTable = tables.frParent;
    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(selectedTable).press('Enter');  //(1)
    await sapPage.keyboard.press('Enter'); //(2)
    await expect(sapPage.currentResults).toHaveText(selectedTable);
    await expect(sapPage.helperTransaction).toHaveText(selectedTransaction);
  })
});



// 3) Tranzactie nesuportata -> browser-ul ramane inactiv.
//    PRECONDITIE: aplicatia este deschisa.
//    ACTIUNE: introduc un cod nesuportat (`MM03`).
//    REZULTAT: controalele de executie raman disabled.

test.describe("Navigation_3", () => {
  test("MM03 - Not supported", async ({ sapPage }) => {
    const selectedTransaction = transactions.mm03;

    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await expect(sapPage.tableNameInput).toBeDisabled();
    await expect(sapPage.statusPanel).toContainText('Transaction MM03 not supported. Use SE16 or SE16N.')
  })
});


// 4) Activare prin butonul Open -> browser-ul se activeaza si prin click.
//    PRECONDITIE: aplicatia este deschisa.
//    ACTIUNE: introduc tranzactia si apas `Open`.
//    REZULTAT: starea browser-ului devine ready.  

test.describe("Navigation_4", () => {
  test("Browser activ", async ({ sapPage }) => {
    const selectedTransaction = transactions.mm03;

    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await expect(sapPage.tableNameInput).toBeDisabled();
    await expect(sapPage.statusPanel).toContainText('Transaction MM03 not supported. Use SE16 or SE16N.')
  })
});




//************** MIDDLE ******************

// 5) Schimbare intre tabele -> headere si date se schimba.  
//    PRECONDITIE: un tabel este deja incarcat.  
//    ACTIUNE: selectez alt tabel si execut.  
//    REZULTAT: headerele si continutul grid-ului se schimba.  

test.describe("Navigation_5", () => {

  test("Schimbare intre tabele", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.caseNotes;
    

    await test.step('Open table /CFF/FR_PARENT', async () => {
      await sapPage.goTo();
      await sapPage.commandInput.fill(selectedTransaction);
      await sapPage.btnOpen.click();
      await sapPage.tableNameInput.fill(selectedTable1);
      //const value = await sapPage.tableNameInput.inputValue();
      await sapPage.btnExecute.click({ timeout: 2000 });
      await expect(sapPage.currentResults).toHaveText(selectedTable1);
    });

    await test.step('Switch to table CFF/ITM_DETAILS', async () => {
      await sapPage.commandInput.fill(selectedTransaction);
      await sapPage.btnOpen.click();
      await sapPage.tableNameInput.fill(selectedTable2);
      //const value = await sapPage.tableNameInput.inputValue();
      await sapPage.btnExecute.click({ timeout: 2000 });
      await expect(sapPage.currentResults).toHaveText(selectedTable2);
    });

// sau - loop  ???


  })
});






// 6) Helper panel inainte de executie -> reflecta selectia curenta.
//    PRECONDITIE: tranzactia este activa.
//    ACTIUNE: schimb tabelul fara a executa.
//    REZULTAT: helper panel afiseaza tabelul nou selectat.

// 7) Helper panel dupa executie -> reflecta tabelul incarcat.
//    PRECONDITIE: am selectat si executat un tabel.
//    ACTIUNE: inspectez helper panel.
//    REZULTAT: helper panel arata tabelul executat si tranzactia activa.

// 8) Tranzactia din helper -> SE16 sau SE16N apare corect.
//    PRECONDITIE: am deschis SE16N.
//    ACTIUNE: inspectez helper panel.
//    REZULTAT: campul Transaction arata `SE16N`.  