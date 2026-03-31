import { expect, test } from "@playwright/test";

test("drop zone and example link visible on load", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#drop")).toBeVisible();
  await expect(page.getByText("example")).toBeVisible();
});

test("service worker registers", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Service worker ready.")).toBeVisible({ timeout: 10000 });
});

test("loads zip via file input", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Service worker ready.")).toBeVisible({ timeout: 10000 });
  await page.locator('input[type="file"]').setInputFiles("docs/assets/vitest-html-reporter.zip");
  await expect(page.locator("iframe")).toBeVisible({ timeout: 10000 });
  await expect(page.getByText(/Cached \d+ files/)).toBeVisible();
});
