# Aiwyn Test Automation

## Summary

This is a small suite of basic tests for a demo instance of the Aiwyn Client Portal. These tests are built in Playwright for Javascript, and assume that a deployed instance of the Aiwyn Client Portal is available.

## How to Run

- Ensure ```baseUrl``` in playwright.config.js is set to the desired instance of Client Portal
- Run ```npm install``` while in the root directory
- Run ```npx playwright test```
