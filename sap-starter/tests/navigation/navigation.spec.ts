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
    await sapPage.tableNameInput.fill(selectedTable);
    await sapPage.tableNameInput.press("Enter");//(1)
    // await sapPage..keyboard.press('Enter'); //(2)
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



// ## EXPERIENCED

// 9) Navigare FR_PARENT -> MAILCOUNT -> tranzactia se pastreaza.  
//    PRECONDITIE: am executat FR_PARENT cu SE16.  
//    ACTIUNE: schimb la MAILCOUNT si execut.  
//    REZULTAT: tranzactia ramane SE16, tabelul se schimba la MAILCOUNT.  


test.describe("Navigation_9", () => {

  test("Schimbare intre tabele", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.caseNotes;

  })
});


// 10) Navigare circulara -> FR_PARENT -> ITM_DETAILS -> FR_PARENT.  
//     PRECONDITIE: am executat FR_PARENT.  
//     ACTIUNE: execut ITM_DETAILS, apoi revin la FR_PARENT.  
//     REZULTAT: FR_PARENT se reincarca corect cu toate randurile.  

test.describe("Navigation_10", () => {

  test("Navigare circulara", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.itmDetails;

    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(selectedTable1);
    await sapPage.btnExecute.click({ timeout: 2000 });
    let initialRowCount = await sapPage.getRowCount();
    await sapPage.tableNameInput.fill(selectedTable2);
    await sapPage.btnExecute.click({ timeout: 2000 });
    //let secondRowCount =  await sapPage.getRowCount();
    await sapPage.tableNameInput.fill(selectedTable1);
    await sapPage.btnExecute.click({ timeout: 2000 });
    let secondRowCount = await sapPage.getRowCount();
    await expect(initialRowCount).toEqual(secondRowCount);
  })
});

// 11) Toate cele 6 tabele sunt navigabile.  
//     PRECONDITIE: tranzactia este activa.  
//     ACTIUNE: execut pe rand FR_PARENT, ITM_DETAILS, ENTITLEMENT, MAILCOUNT, FR_AUDIT, CASE_NOTES.  
//     REZULTAT: fiecare tabel afiseaza rezultate si headere corecte.  



test.describe("Navigation_11", () => {

  test("Schimbare intre tbele", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.caseNotes;

  })
});


// 12) Tabel inexistent -> mesaj de eroare.  
//     PRECONDITIE: tranzactia este activa.  
//     ACTIUNE: introduc `/CFF/INEXISTENT` si execut.  
//     REZULTAT: mesaj de eroare, grid-ul ramane gol.  


test.describe("Navigation_5", () => {

  test("Tabel inexistent", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = '/CFF/INEXISTENT';

    await sapPage.goTo();
    await sapPage.commandInput.fill(selectedTransaction);
    await sapPage.btnOpen.click();
    await sapPage.tableNameInput.fill(selectedTable1);
    await sapPage.btnExecute.click({ timeout: 2000 });

    //await sapPage.statusPanel.textContent('No data found');
    await expect(sapPage.emptyState).toBeVisible();
  })
});

// 13) Numele tabelului case-insensitive -> `/cff/fr_parent` functioneaza.  
//     PRECONDITIE: tranzactia este activa.  
//     ACTIUNE: introduc `/cff/fr_parent` (lowercase).  
//     REZULTAT: tabelul FR_PARENT se incarca corect.  


test.describe("Navigation_6", () => {

  test("Schimbare intre tabele", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.caseNotes;

  })
});

// 14) Headere se schimba la navigare -> ESID dispare, MAIL_ID apare.  
//     PRECONDITIE: am executat FR_PARENT (are coloana ESID).  
//     ACTIUNE: execut MAILCOUNT.  
//     REZULTAT: ESID nu mai exista in headere, MAIL_ID apare.  
test.describe("Navigation_5", () => {

  test("Schbare intre tabele", async ({ sapPage }) => {
    const selectedTransaction = transactions.se16;
    const selectedTable1 = tables.frParent;
    const selectedTable2 = tables.caseNotes;

  })
});