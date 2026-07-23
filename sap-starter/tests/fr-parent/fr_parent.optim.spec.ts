import { test, expect } from "../../fixtures/test-fixtures.js";
import { openBrowserTransaction } from "../../utils/actions.js";
import { automationAnchor, emptyGuid, secondaryAnchor, tables, tertiaryAnchor } from "../../utils/test-data.js";

type FilterMap = Record<string, string>;

const singleRowCases: { title: string; filters: FilterMap; expected: FilterMap }[] = [
  {
    title: "ESID-777 extrage FR_GUID si ENT_GUID",
    filters: { ESID: automationAnchor.esid },
    expected: {
      FR_GUID: automationAnchor.expectedValues.frGuid,
      ENT_GUID: automationAnchor.expectedValues.entGuid,
    },
  },
  {
    title: "ESID-778 extrage GUID-urile ancorei secundare",
    filters: { ESID: secondaryAnchor.esid },
    expected: {
      FR_GUID: secondaryAnchor.expectedValues.frGuid,
      ENT_GUID: secondaryAnchor.expectedValues.entGuid,
      STATUS: "Pending",
    },
  },
  {
    title: "ESID-779 ancora tertiara are ENT_GUID empty si STATUS Blocked",
    filters: { ESID: tertiaryAnchor.esid },
    expected: { ENT_GUID: emptyGuid, STATUS: "Blocked" },
  },
  {
    title: "FR_GUID secundar returneaza ESID-778 Pending",
    filters: { FR_GUID: secondaryAnchor.expectedValues.frGuid },
    expected: { ESID: secondaryAnchor.esid, STATUS: "Pending" },
  },
  {
    title: "FR_GUID principal returneaza ESID-777",
    filters: { FR_GUID: automationAnchor.expectedValues.frGuid },
    expected: { ESID: automationAnchor.esid },
  },
];

const rowCountCases: { title: string; filters: FilterMap; count: number }[] = [
  { title: "ESID comun ESID-100 -> 4 randuri", filters: { ESID: "ESID-100" }, count: 4 },
  { title: "fara filtre -> 34 randuri", filters: {}, count: 34 },
];

const statusCases = ["Active", "Archived"];

test.describe("FR Parent - optim", () => {
  test.beforeEach(async ({ sapPage }) => {
    await openBrowserTransaction(sapPage);
  });

  for (const c of singleRowCases) {
    test(`single row: ${c.title}`, async ({ sapPage }) => {
      await sapPage.executeTable(tables.frParent, c.filters);

      await expect(sapPage.resultCount).toContainText("1 rows");
      for (const [column, value] of Object.entries(c.expected)) {
        await expect(sapPage.cell(0, column)).toHaveText(value);
      }
    });
  }

  for (const c of rowCountCases) {
    test(`row count: ${c.title}`, async ({ sapPage }) => {
      await sapPage.executeTable(tables.frParent, c.filters);
      await expect(sapPage.currentResults).toHaveText(tables.frParent);
      await expect(sapPage.resultCount).toContainText(`${c.count} rows`);
      await expect(await sapPage.getRowCount()).toBe(c.count);
    });
  }

  for (const status of statusCases) {
    test(`status filter: ${status} returneaza doar randuri ${status}`, async ({ sapPage }) => {
      await sapPage.executeTable(tables.frParent, { STATUS: status });

      await expect(sapPage.currentResults).toHaveText(tables.frParent);
      const count = await sapPage.getRowCount();
      expect(count).toBeGreaterThanOrEqual(1);
      for (let index = 0; index < count; index += 1) {
        await expect(sapPage.cell(index, "STATUS")).toHaveText(status);
      }
    });
  }

  test("filtru trimis cu tasta Enter", async ({ sapPage }) => {
    await sapPage.selectTable(tables.frParent);
    await sapPage.submitFilterWithEnter("ESID", automationAnchor.esid);

    await expect(sapPage.currentResults).toHaveText(tables.frParent);
    await expect(sapPage.resultCount).toContainText("1 rows");
  });

  test("FR_GUID si ENT_GUID difera pentru ancora principala", async ({ sapPage }) => {
    await sapPage.executeTable(tables.frParent, { ESID: automationAnchor.esid });

    const frGuid = await sapPage.getCellText(0, "FR_GUID");
    const entGuid = await sapPage.getCellText(0, "ENT_GUID");

    expect(frGuid).not.toBe(entGuid);
  });

  test("row count corespunde cu textul result-count", async ({ sapPage }) => {
    await sapPage.executeTable(tables.frParent, { ESID: "ESID-100" });

    const rowCount = await sapPage.getRowCount();
    await expect(sapPage.resultCount).toContainText(`${rowCount} rows`);
  });

  test("randul blocat este gasit dupa ESID si are ENT_GUID empty-like", async ({ sapPage }) => {
    await sapPage.executeTable(tables.frParent, { STATUS: "Blocked" });

    const rowIndex = await sapPage.findFirstRowIndexByColumnValue("ESID", tertiaryAnchor.esid);
    expect(rowIndex).toBeGreaterThanOrEqual(0);
    await expect(sapPage.cell(rowIndex, "ENT_GUID")).toHaveText(emptyGuid);
  });

  test("DESCRIPTION pentru ESID-779 are doua linii", async ({ sapPage }) => {
    await sapPage.executeTable(tables.frParent, { ESID: tertiaryAnchor.esid });

    const descriptionLines = await sapPage.getCellLines(0, "DESCRIPTION");
    expect(descriptionLines.length).toBe(2);
  });

  test("DESCRIPTION pentru ancora principala contine textul relevant", async ({ sapPage }) => {
    await sapPage.executeTable(tables.frParent, { ESID: automationAnchor.esid });

    const descriptionLines = await sapPage.getCellLines(0, "DESCRIPTION");
    const hasRelevantText = descriptionLines.some((line) => line.includes("Automation anchor row"));
    expect(hasRelevantText).toBe(true);
  });
});
