export class InvoicesPage {
  constructor(page) {
    this.page = page;
    this.selectAllInvoicesCheck = page.getByTestId('select-all-invoices');
    this.invoiceTable = page.locator('//tbody');
    this.invoiceTableRows = this.invoiceTable.locator('tr');
    this.newCardButton = page.getByTestId('new-payment-method-type-option-card');
    this.newCardModal = page.locator('app-stripe-new-payment-method');
    this.newCardNumberField = this.newCardModal.getByLabel('Card number');
    this.newCardExpirationDateField = this.newCardModal.getByLabel('Expiration date');
    this.newCardSecurityCodeField = this.newCardModal.getByLabel('Security code');
    this.newCardNameField = this.newCardModal.getByLabel('Full name');
    this.newCardCountryDropdown = this.newCardModal.getByLabel('Country or region');
    this.newCardAddressLine1Field = this.newCardModal.getByLabel('Address line 1');
    this.newCardAddressLine2Field = this.newCardModal.getByLabel('Address line 2');
    this.newCardAddressCityField = this.newCardModal.getByLabel('City');
    this.newCardAddressStateField = this.newCardModal.getByLabel('State');
    this.newCardAddressZipField = this.newCardModal.getByLabel('ZIP code');
    this.newCardContinueButton = this.newCardModal.getByRole('button').and(this.newCardModal.getByText('Continue'));
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

  async addNewCard(number, expMonth, expYear, cvc, name, country, addressLine1, addressLine2, addressCity, addressState, addressZip) {
    await this.newCardButton.click();
    await this.newCardModal.waitFor();
    await this.newCardNumberField.fill(number);
    await this.newCardExpirationDateField.fill(`${expMonth}/${expYear}`);
    await this.newCardSecurityCodeField.fill(cvc);
    await this.newCardNameField.fill(name);
    await this.newCardCountryDropdown.selectOption(country);
    await this.newCardAddressLine1Field.fill(addressLine1);
    await this.newCardAddressLine2Field.fill(addressLine2);
    await this.newCardAddressCityField.fill(addressCity);
    await this.newCardAddressStateField.fill(addressState);
    await this.newCardAddressZipField.fill(addressZip);
    await this.newCardContinueButton.click();
  }
}
