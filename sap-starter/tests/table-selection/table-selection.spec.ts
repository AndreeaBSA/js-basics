
import { test, expect } from "../../fixtures/test-fixtures.js";
import { tables, transactions } from "../../utils/test-data.js";

// ********  BEGINNER  **********

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

    test('4) Headerele se schimba cu tabelul.', async ({ sapPage, mailCountPage,frAuditPage}) => {
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
});