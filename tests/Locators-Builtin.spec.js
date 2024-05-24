const{test,expect}=require('@playwright/test')

test('Builtin-locators',async({page}) =>{


    await page.goto("https://alcsaws.teamlease.com/GUI/Login/Home.aspx")

    const logo=await page.getByAltText("Teamlease")
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Login ID').fill('T4297')
    await page.getByPlaceholder('Password').fill('18@december')

    await page.getByRole('button', { type: 'Submit' }).click();

    await expect(await page.getByText('page-header')).toBeVisible();


})