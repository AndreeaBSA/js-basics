
import { test, expect } from "../../fixtures/test-fixtures.js";
import { SapTableBrowserPage } from "../../pages/SapTableBrowserPage.js";
import { tables, transactions } from "../../utils/test-data.js";
import { openBrowserTransaction } from "../../utils/actions.js";

// ********  BEGINNER  **********

async function deschideTranzactia(sapPage: SapTableBrowserPage) {
    await sapPage.goTo();
    await sapPage.commandInput.fill(transactions.se16);
    await sapPage.commandInput.press('Enter');
    await expect(sapPage.browserActive).toHaveText('Browser Ready');
}


test.describe('Beginer - Table Selection', () => {
    test('1) Execute via buton', async ({ sapPage }) => {
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.keyboard.press('Enter');
        await sapPage.tableNameInput.fill(tables.frParent);
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).toContainText('34 rows');
    });

    test('2) Enter pe input-ul de tabel', async ({ sapPage }) => {
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.keyboard.press('Enter');
        await sapPage.tableNameInput.fill(tables.entitlement);
        await sapPage.keyboard.press('Enter');

    });

    test('3) Clear filters', async ({ sapPage, mailCountPage }) => {
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.keyboard.press('Enter');
        await sapPage.tableNameInput.fill(tables.mailCount);
        await mailCountPage.filterOWNER.fill('Marta');
        await sapPage.btnExecute.click();
        await expect(sapPage.resultCount).toContainText('19');
        await sapPage.btnClearFilters.click();
        await expect(sapPage.statusPanel).toContainText('Filters cleared');
    });

    test('4) Headerele se schimba cu tabelul.', async ({ sapPage, mailCountPage, frAuditPage }) => {
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.keyboard.press('Enter');
        await sapPage.tableNameInput.fill(tables.mailCount);
        await expect(mailCountPage.filterOWNER).toBeEnabled();
        await expect(mailCountPage.filterPARENTID).toBeEnabled();
        await expect(mailCountPage.filterSTATUS).toBeEnabled();
        await sapPage.tableNameInput.fill(tables.frAudit);
        await sapPage.btnExecute.click();
        await expect(frAuditPage.filterFRGUID).toBeEnabled();
        await expect(frAuditPage.filterCHANGEDBY).toBeEnabled();
        await expect(frAuditPage.filterEVENTTYPE).toBeEnabled();
    });

    test('4A) Negativ test - Headerele se schimba cu tabelul.', async ({ sapPage, mailCountPage, frAuditPage }) => {
        await sapPage.goTo();
        await sapPage.commandInput.fill(transactions.se16);
        await sapPage.keyboard.press('Enter');
        await sapPage.tableNameInput.fill(tables.mailCount);
        await expect(frAuditPage.filterFRGUID).not.toBeVisible();
        await expect(frAuditPage.filterCHANGEDBY).not.toBeVisible();
        await expect(frAuditPage.filterEVENTTYPE).not.toBeVisible();

        await sapPage.tableNameInput.fill(tables.frAudit);
        await expect(mailCountPage.filterOWNER).not.toBeVisible();
        await expect(mailCountPage.filterPARENTID).not.toBeVisible();
        await expect(mailCountPage.filterSTATUS).not.toBeVisible();

        await sapPage.tableNameInput.fill(tables.frAudit);

    });
    test('5) Tabel inexistent - eroare si niciun header', async ({ page, sapPage }) => {
        await deschideTranzactia(sapPage);
        await sapPage.tableNameInput.fill(tables.frParent);
        await sapPage.btnExecute.click();

        await expect(page.locator('th[data-column-name]')).toHaveCount(5);

        await sapPage.tableNameInput.fill('/CFF/NU_EXISTA');
        await sapPage.btnExecute.click();

        await expect(page.getByTestId('empty-state')).toHaveText('No data found');
        await expect(sapPage.resultsTable).toHaveCount(0);
        await expect(page.locator('th[data-column-name]')).toHaveCount(0);
    });



});

//*****optim */

type TableCase = {
    title: string;
    table: string;
    filters: string[];
    columns: string[];
}

const tableCases: TableCase[] = [
    {
        title: "FR_PARENT",
        table: tables.frParent,
        filters: ["ESID", "FR_GUID", "STATUS"],
        columns: ["ESID", "FR_GUID", "ENT_GUID", "STATUS", "DESCRIPTION"],
    },

    {
        title: "MAILCOUNT",
        table: tables.mailCount,
        filters: ["PARENT_ID", "OWNER", "STATUS"],
        columns: ["MAIL_ID", "PARENT_ID", "COUNT", "OWNER", "STATUS"],
    },
]




test.describe("Table seelction - optim",()=>{
     test.beforeEach(async ({ sapPage }) => {
        await openBrowserTransaction(sapPage);
      });

    for( const c of tableCases) {
        test(`filtre ${c.title} expune exact filtrele lui`,async ({sapPage})=>{

            await sapPage.selectTable(c.table);
            for(const f of c.filters) {
                await  expect(sapPage.filterInput(f)).toBeEnabled();
                await  expect(sapPage.filterInput(f)).toHaveValue(""); 
            }

        })

    }

    for(const tc of tableCases) {
        test(`Coloanele ${tc.columns} au denumirea exacta`, async ({ page,sapPage}) => {

            await sapPage.selectTable(tc.table);
            await expect(sapPage.currentTableNameResults).toHaveText(tc.table);
            for(const d of tc.columns) {
                await expect(page.locator(`th[data-column-name]=${d}`)).toBeVisible();
            }
        })

    }

    for(const tc of tableCases) {
        test(`Clear Filter ${tc.columns} nu schimba tabelul`, async ({ page,sapPage}) => {
            
            await sapPage.selectTable(tc.table);
            await sapPage.filterInput(tc.filters[0]).fill("abc");
            await sapPage.btnClearFilters.click();
            for (const f of tc.filters) { 
                await expect(sapPage.filterInput(f)).toHaveValue("");
        
            }
            

        });

    }







})