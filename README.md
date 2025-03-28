# Aiwyn Test Automation

## Summary

This is a small suite of basic tests for a demo instance of the Aiwyn Client Portal. These tests are built in Playwright for Javascript, and assume that a deployed instance of the Aiwyn Client Portal is available.

## How to Run

- Ensure ```baseUrl``` in playwright.config.js is set to the desired instance of Client Portal
- Run ```npm install``` while in the root directory
- Run ```npx playwright test```

## Tests

- User can login
  - Test I added as a basic sanity check to ensure everything was working
  - Completed
- User selects the first invoice to be paid using the Unpaid table.
  - Completed
- Make the payment by creating a new credit card payment method using the sidebar.
  - Test has been written, but unable to confirm passing (new card modal does not display all fields when running test)
- Make a payment for a partial amount for the selected invoice as User A, then make a payment for the rest of the invoice as User B.
  - Not currently implemented

## Design Choices

The organization of the files fits a pretty standard Page Object Model pattern, with page modules in the ```pages``` directory, and the tests in a single ```test.spec.js``` file in the ```tests``` directory. When choosing locators, my aim was to make them as unambiguous, resilient, and easy to read as possible. Changing the ```testIdAttribute``` in the Playwright config made it easy to leverage the ```data-cy``` properties for a lot of the elements. For things like tables or modals, where there could be multiple of the same kind of element, I would declare a locator for a higher level element, then find the child elements within the context of that parent locator. In the tests themselves, I made sure to wait for new elements to appear upon events/navigation to avoid race conditions as much as possible. If I were to write these tests for real to be run on a regular basis, I would change some things that were done in the interest of time/simplicity, like hardcoding data such as credentials, and would better leverage fixtures to streamline things like login without having to copy/paste those steps into each test. 
