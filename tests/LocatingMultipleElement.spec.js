const { test, expect } = require('@playwright/test');


test('LocatingMultipleElement', async ({page})=>{

    await page.goto('https://alcsaws.teamlease.com/GUI/Login/Home.aspx')

    const links = await page.$$('a');

    for(const link of links){

        const linktext = await link.textContent();
        console.log('linktext');
    }
    









})