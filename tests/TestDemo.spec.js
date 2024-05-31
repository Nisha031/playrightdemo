import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alcsaws.teamlease.com/GUI/Login/Login.aspx');
  await page.getByPlaceholder('Login ID').fill('T4297');
  await page.getByPlaceholder('Password').fill('18@december');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
});