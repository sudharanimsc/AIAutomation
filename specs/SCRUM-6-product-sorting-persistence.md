# SCRUM-6: Product Sorting Persistence

## Feature
Product sorting persistence on the SauceDemo inventory page.

## User Story Summary
As a shopper, I want my selected sort order to remain applied when I navigate to a product detail page and return to the catalog so I do not have to re-sort the list repeatedly.

## Objective
Verify that the chosen sort order remains active after viewing a product and using browser back navigation.

## Scope
- Login to SauceDemo as a valid user
- Select "Price (high to low)"
- Navigate to a product detail page
- Return to the products list
- Assert the sort option remains selected and product ordering is unchanged

## Out of Scope
- Payment or checkout validation
- Cart persistence across sessions
- End-to-end backend validation

## Environment
- Application: https://www.saucedemo.com/
- Credentials: standard_user / secret_sauce
- Browser: Chromium (Playwright)

## Test Data
- Username: standard_user
- Password: secret_sauce
- Product selection order when sorted by price (high to low):
  1. Sauce Labs Fleece Jacket ($49.99)
  2. Sauce Labs Backpack ($29.99)
  3. Sauce Labs Bolt T-Shirt ($15.99)
  4. Test.allTheThings() T-Shirt (Red) ($15.99)
  5. Sauce Labs Bike Light ($9.99)
  6. Sauce Labs Onesie ($7.99)

## Test Scenarios
### 1. Sort persists after navigation
- Given the user is logged into the inventory page
- When the user selects "Price (high to low)"
- And clicks a product to open its details
- And then uses the browser back button
- Then the sort dropdown still shows "Price (high to low)"
- And the products remain in the same high-to-low price order

## Expected Results
- The inventory page loads successfully after login
- The sort dropdown is visible and accepts a change to "Price (high to low)"
- The product list reorders to descending price
- Browser back navigation returns to the catalog without resetting the sort state
- The selected option persists across view changes
