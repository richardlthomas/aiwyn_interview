import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';
import {InvoicesPage} from '../pages/invoices';

test('can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('qa+interviewer2userb@aiwyn.ai', 'Aiwyn123!');
  await expect(page).toHaveURL('https://qademotest.aiwyn-dev.app/client-portal/main/invoices');
});

test('select first invoice and make payment using saved payment method', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('qa+interviewer2userb@aiwyn.ai', 'Aiwyn123!');

  const invoicesPage = new InvoicesPage(page);
  await page.waitForURL('**/client-portal/main/invoices');
  if (await invoicesPage.selectAllInvoicesCheck.isChecked() === true) {
    await invoicesPage.toggleAllInvoices();
  }
  await invoicesPage.selectNthInvoice(0);
  await invoicesPage.paySelectedInvoices();

  await expect(invoicesPage.thanksModal).toBeVisible();
});

test('add new card payment method and pay invoice using new card', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('qa+interviewer2userb@aiwyn.ai', 'Aiwyn123!');

  const invoicesPage = new InvoicesPage(page);
  await page.waitForURL('**/client-portal/main/invoices');
  await invoicesPage.addNewCard('5555555555554444', '12', '26', '555', 'Test User', 'United States','555 Main St', '', 'New York', 'New York', '10044');
  await expect(invoicesPage.newCardModal).toBeHidden();
  await invoicesPage.paySelectedInvoices();
})
