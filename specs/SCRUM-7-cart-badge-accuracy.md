# SCRUM-7: Cart Badge Accuracy

## Feature
Cart badge accuracy across product, detail, and cart views.

## User Story Summary
As a shopper, I want the cart badge to always reflect the real number of items in my cart so I can trust the cart total at a glance.

## Objective
Verify that the cart count updates immediately after adding and removing items from the catalog and cart flow.

## Scope
- Login to SauceDemo as a valid user
- Add three different items to the cart
- Confirm the cart badge shows 3 on the inventory page
- Navigate to the cart page and confirm the badge stays at 3
- Remove an item and verify the badge updates to 2

## Out of Scope
- Checkout completion and payment validation
- Multi-user session synchronization

## Environment
- Application: https://www.saucedemo.com/
- Credentials: standard_user / secret_sauce
- Browser: Chromium (Playwright)

## Test Data
- Inventory items used for the cart count flow
  - Sauce Labs Backpack
  - Sauce Labs Bike Light
  - Sauce Labs Bolt T-Shirt

## Test Scenarios
### 1. Badge reflects added items
- Given the user is logged in and on the products page
- When three different products are added to the cart
- Then the shopping cart badge shows "3"

### 2. Badge remains accurate on cart page
- Given the cart contains three items
- When the user opens the cart page
- Then the badge still shows "3"

### 3. Badge updates after item removal
- Given the user is on the cart page
- When the user removes one item
- Then the cart badge updates to "2"

## Expected Results
- Add-to-cart buttons increment the badge immediately
- Badge value remains consistent across inventory and cart navigation
- Removing an item updates the badge without reloading the page
