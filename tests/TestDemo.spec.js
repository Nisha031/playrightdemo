import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {slowmo : 800
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');
  await page.getByPlaceholder('Login ID').fill('T4297');
  await page.getByPlaceholder('Password').fill('18@december');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Home.aspx');
  await page.setTimeout(3000)
  await page.click("//i[@class='material-icons powerOff']");
  await page.pause();

  //const logoutlink =await page.locator("//i[@class='material-icons powerOff']")
  
});