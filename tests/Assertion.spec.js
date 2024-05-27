const {test,expect}= require('@playwright/test')


test('Assertion test', async ({page})=>{ 

    await page.goto('https://alcsaws.teamlease.com/GUI/Login/Home.aspx')

    await expect(page).toHaveURL('https://alcsaws.teamlease.com/GUI/Login/Home.aspx')

    await expect(page).toHaveTitle('Teamlease')

    const logoElement = await page.locator('')
    
    




})