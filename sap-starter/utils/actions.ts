import { expect } from "@playwright/test";
import type { SapTableBrowserPage } from "../pages/SapTableBrowserPage.js";
import { transactions } from "./test-data.js";

export async function openBrowserTransaction(sapPage: SapTableBrowserPage, transaction = transactions.se16) {
  await sapPage.goto();
  await sapPage.openTransaction(transaction);
  await expect(sapPage.browserActivationState).toContainText("Browser Ready");
}
