import { expect, test } from "@playwright/test";

test("drop zone and example link visible on load", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Service worker ready.")).toBeVisible();
  await page.locator('input[type="file"]').setInputFiles("docs/assets/vitest-html-reporter.zip");
  await expect(page.locator("iframe")).toBeVisible();
  await expect(page.getByText(/Cached \d+ files/)).toBeVisible();
});
