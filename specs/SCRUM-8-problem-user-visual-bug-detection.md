# SCRUM-8: Problem User Visual Bug Detection

## Feature
Problem user image defect detection for the SauceDemo catalog.

## User Story Summary
As a QA engineer, I want to validate that the problem_user account purposely displays the same broken product image across the catalog so I can confirm the seeded visual bug is being surfaced intentionally.

## Objective
Verify that all product images for the problem_user account are the same broken-image asset and that the defect is consistent across the product grid.

## Scope
- Login to SauceDemo as problem_user
- Open the inventory page
- Inspect all product images in the catalog
- Confirm each image points to the same broken asset

## Out of Scope
- Performance tuning or image optimization
- Non-bug related login behavior

## Environment
- Application: https://www.saucedemo.com/
- Credentials: problem_user / secret_sauce
- Browser: Chromium (Playwright)

## Test Data
- Username: problem_user
- Password: secret_sauce
- Expected broken image asset: /assets/sl-404-Cq1a9k9X.jpg

## Test Scenarios
### 1. Problem-user visual bug appears consistently
- Given the user logs in as problem_user
- When the product catalog loads
- Then every product image uses the same broken-image source

## Expected Results
- The product grid displays the broken image asset for every product
- The repeated asset is consistent and matches the known seeded defect
