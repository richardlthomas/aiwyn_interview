const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/login');

test('can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('qa+interviewer2usera@aiwyn.ai', 'Aiwyn123!');
  await expect(page.toHaveURL('https://qademotest.aiwyn-dev.app/client-portal/main/invoices'));
});
