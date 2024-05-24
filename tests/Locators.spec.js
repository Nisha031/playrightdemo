//const{test,expect} = require('@playwright/test')
import{test,expect} from '@playwright/test'

test('locators', async ({ page })=> {

    await page.goto("https://alcsaws.teamlease.com/GUI/Login/Login.aspx")

    //await page.locator('id=txtLoginId').click()

    await page.click('id=txtLoginId')

    //await page.locator('id=txtLoginId').fill("T4297")

    await page.fill('#txtLoginId','T4297')

    await page.fill("//input[@id='txtPassword']",'18@december')

    await page.click("//input[@id='btnsignin']")

    const logoutlink =await page.locator("//i[@class='material-icons powerOff']")

    await expect(logoutlink).toBeVisible();

    await page.click("(//i[@class='material-icons'])[8]");

    

    //await page.close()
    












});