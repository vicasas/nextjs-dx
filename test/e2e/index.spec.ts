import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')

  // Find an element with the text 'Next.js!' and click on it
  await page.click('text=Next.js!')

  // The new url should be "https://nextjs.org" (baseURL is used there)
  await expect(page).toHaveURL('https://nextjs.org')

  // The new page should contain an h1 with "The React Framework for Production"
  await expect(page.locator('h1:first-child')).toContainText(
    'The React Framework for Production'
  )
})
