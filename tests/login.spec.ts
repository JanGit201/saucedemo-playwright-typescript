import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("Should login and successfully add an item to the shopping cart", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login("standard_user", "secret_sauce");

  await expect(inventoryPage.pageTitle).toHaveText("Products");

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
});
