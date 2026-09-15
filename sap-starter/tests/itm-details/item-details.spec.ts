import { test, expect } from "../../fixtures/test-fixtures.js";


import { automationAnchor, columnsFrParent, secondaryAnchor, tables, tertiaryAnchor, transactions, emptyGuid, columnsItmDetails } from "../../utils/test-data.js";

// ## BEGINNER

// 1) Parent by ENT_GUID -> randurile principale sunt incarcate.  
//    PRECONDITIE: cunosc ENT_GUID pentru ancora principala (B777).  
//    ACTIUNE: filtrez ITM_DETAILS dupa PARENT_ID = ENT_GUID.  
//    REZULTAT: tabela returneaza 3 randuri.  

// 2) Empty GUID -> no-results.  
//    PRECONDITIE: folosesc EMPTY_GUID drept PARENT_ID.  
//    ACTIUNE: execut interogarea.  
//    REZULTAT: apare empty state.  

// 3) Executie fara filtre -> toate randurile sunt afisate.  
//    PRECONDITIE: tabela este selectata, filtre goale.  
//    ACTIUNE: execut.  
//    REZULTAT: row count reflecta totalul din mock data.  

test.describe('BEGINER - Item Details', () => {
    test('1) Parent by ENT_GUID', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(automationAnchor.expectedValues.entGuid);
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).toBeVisible();
        await expect.poll(()=>itmDetailsPage.getRowCount()).toBe(3);
    });

    test('2) Empty GUID', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(emptyGuid);
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).not.toBeVisible();
        await expect.poll(()=>itmDetailsPage.getRowCount()).toBe(0);
    });

    test('3) Executie fara filtre', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).toBeVisible();
        await expect.poll(()=>itmDetailsPage.getRowCount()).toBe(50);
    });
} );



test.describe('MIDDLE - Item Details', () => {
    test('1) Empty-like CALLOFF row', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(automationAnchor.expectedValues.entGuid);
        await sapPage.btnExecute.click();
        await expect(itmDetailsPage.tableCell(0, columnsItmDetails.CALLOFF)).toHaveText(emptyGuid);
        // REZULTAT: randul este gasit (index >= 0). ??????
    });

    test('2) SETUP_FR contains FR_GUID', async ({ sapPage, itmDetailsPage }) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(automationAnchor.expectedValues.entGuid);
        await sapPage.btnExecute.click();
        await itmDetailsPage.tableCell(2, columnsItmDetails.SETUP_FR).getByText(automationAnchor.expectedValues.frGuid);
    });

    test('3) Secondary entitlement branch > AMER', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(secondaryAnchor.expectedValues.frGuid);
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).toBeVisible();
        await expect.poll(()=>itmDetailsPage.getRowCount()).toBe(1);
        await itmDetailsPage.tableCell(4, columnsItmDetails.REGION).getByText('AMER');

    });

    test('4) FR_GUID branch - APJ', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(secondaryAnchor.expectedValues.frGuid);
        await itmDetailsPage.filterREGION.fill('APJ');
        await sapPage.btnExecute.click();
        await itmDetailsPage.tableCell(0, columnsItmDetails.PARENT_ID).getByText(secondaryAnchor.expectedValues.frGuid);
        await itmDetailsPage.tableCell(1, columnsItmDetails.CALLOFF).getByText('secondaryAnchor.expectedValues.frGuid');

    });

    test('5) Diferenta intre ENT_GUID si FR_GUID branches -> AMER vs APJ', async ({ sapPage, itmDetailsPage}) =>{ 
        await sapPage.navigateToTable(transactions.se16, tables.itmDetails);
        await itmDetailsPage.filterPARENTID.fill(secondaryAnchor.expectedValues.entGuid);
        await sapPage.btnExecute.click();
        await itmDetailsPage.tableCell(4, columnsItmDetails.REGION).getByText('AMER');
        await sapPage.btnClearFilters.click();
        await itmDetailsPage.filterPARENTID.fill(secondaryAnchor.expectedValues.frGuid);
        await sapPage.btnExecute.click();
        await itmDetailsPage.tableCell(4, columnsItmDetails.REGION).getByText('APJ');
    });



} );