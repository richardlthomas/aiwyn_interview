export class InvoicesPage {
  constructor(page) {
    this.page = page;
    this.selectAllInvoicesCheck = page.getByTestId('select-all-invoices');
    this.invoiceTable = page.locator('//tbody');
    this.invoiceTableRows = this.invoiceTable.locator('tr');
    this.payButton = page.getByTestId('pay-now');
    this.thanksModal = page.getByTestId('thanks-modal');
  }

  async goto() {
    await this.page.goto('client-portal/main/invoices');
  }

  async toggleAllInvoices() {
    await this.selectAllInvoicesCheck.check();
  }

  async selectNthInvoice(n) {
    let invoiceRow = this.invoiceTableRows.nth(n);
    let invoiceCheckbox = invoiceRow.getByTestId('select-invoice');
    if (await invoiceCheckbox.isChecked() === false) {
      await invoiceCheckbox.check();
    }
  }

  async paySelectedInvoices() {
    await this.payButton.click();
  }
}
