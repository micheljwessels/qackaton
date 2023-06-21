import { test, expect } from '@playwright/test';

let rows = 0;

test('Happy path - Login & CRUD', async ({ page }) => {
  await test.step('#TC - 2 - login to the account', async () => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await expect(page).toHaveTitle('Contact List App');
    await page.locator('#email').fill('michel.wessels@wearetriple.com');
    await page.locator('#password').fill('TestTeam');
    await page.locator('#submit').click();
    await expect(page.locator('#add-contact')).toBeVisible();
  });
  await test.step('#TC - 3 - add new contact to the Contact list', async () => {
    await page.locator('//button[@id="add-contact"]').click();
    await expect(page.locator('//h1[text()="Add Contact"]')).toBeVisible(); 
    await page.locator('#firstName').fill('Test');
    await page.locator('#lastName').fill('Person');
    await page.locator('#birthdate').fill('1990-01-01');
    await page.locator('#email').fill('test@test.com');
    await page.locator('#phone').fill('0612345678');
    await page.locator('#street1').fill('Teststreet 1');
    await page.locator('#street2').fill('Testappartment A');
    await page.locator('#city').fill('Testcity');
    await page.locator('#stateProvince').fill('Testate');
    await page.locator('#postalCode').fill('0123AB');
    await page.locator('#country').fill('Poland');
    await page.waitForTimeout(3000);
    await page.locator('#submit').click();
    await expect(page.locator('#add-contact')).toBeVisible();
  });
  await test.step('#TC - 6 - read contact from the contact list', async () => {
    await page.locator('//tr[@class="contactTableBodyRow"]').nth(0).waitFor();
    console.log(await page.locator('//tr[@class="contactTableBodyRow"]').count());
    rows = await page.locator('//tr[@class="contactTableBodyRow"]').count();
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[2]`).innerText()).toEqual('Test Person');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[3]`).innerText()).toEqual('1990-01-01');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[4]`).innerText()).toEqual('test@test.com');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[5]`).innerText()).toEqual('0612345678');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[6]`).innerText()).toEqual('Teststreet 1 Testappartment A');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[7]`).innerText()).toEqual('Testcity Testate 0123AB');
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]//td[8]`).innerText()).toEqual('Poland');
  });
  await test.step('#TC - 5 - update contact from the Contact list', async () => {
    await page.locator(`(//tr[@class="contactTableBodyRow"])[${rows}]`).click()
    await page.locator('#edit-contact').click();
    await page.waitForTimeout(3000);
    await page.locator('#firstName').fill('Edited');
    await page.waitForTimeout(3000);
    await page.locator('#submit').click();
    await page.locator('#return').click();
    expect(await page.locator(`(//tr[@class="contactTableBodyRow"])[1]//td[2]`).innerText()).toEqual('Edited Person');
  });
  await test.step('#TC - 4 - delete contact from the Contact list', async () => {
    await page.locator('//td[text()="Edited Person"]').first().click();
    await page.waitForTimeout(3000);
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#delete').click();
    await expect(page.locator('#add-contact')).toBeVisible();
    await expect(page.locator('//td[text()="Edited Person"]')).not.toBeVisible();
  });
});