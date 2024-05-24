const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');  
  
  const pageTitle = await page.title();
  console.log('page title is:',pageTitle);

  await expect(page).toHaveTitle('ALCS');

  const pageUrl =page.Url();
  console.log('pageUrl is:', pageURL);

  await expect(page).toHaveURL('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');










})

