import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly backpackAddToCartButton: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.backpackAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }
}
