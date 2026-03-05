import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { MenuNavigationPage } from '../pages/MenuNavigationPage';
import { FooterLinksPage } from '../pages/FooterLinksPage';
import { SpecialAccountsPage } from '../pages/SpecialAccountsPage';
import { AccessibilityPage } from '../pages/AccessibilityPage';

export type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
  menuNavigationPage: MenuNavigationPage;
  footerLinksPage: FooterLinksPage;
  specialAccountsPage: SpecialAccountsPage;
  accessibilityPage: AccessibilityPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepOnePage: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutStepTwoPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  menuNavigationPage: async ({ page }, use) => {
    await use(new MenuNavigationPage(page));
  },
  footerLinksPage: async ({ page }, use) => {
    await use(new FooterLinksPage(page));
  },
  specialAccountsPage: async ({ page }, use) => {
    await use(new SpecialAccountsPage(page));
  },
  accessibilityPage: async ({ page }, use) => {
    await use(new AccessibilityPage(page));
  },
});

export { expect };
