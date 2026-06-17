import { test, expect } from '@playwright/test';

test('Mouse hover', async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.hover("//button[text()='Point Me']")

    await page.waitForTimeout(2000)

    await page.close()


});