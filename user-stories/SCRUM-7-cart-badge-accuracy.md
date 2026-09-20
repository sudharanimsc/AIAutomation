# SCRUM-7: Cart badge accuracy across sessions

## Story Title
Cart badge accuracy across sessions

## Story ID / Link
- ID: SCRUM-7
- Jira URL: https://sudharanimsc.atlassian.net/browse/SCRUM-7
- Application URL: https://saucedemo.com

## User Story
As a shopper,
I want the cart icon to always show the correct number of items,
so that I can trust the cart count without opening it.

## Acceptance Criteria
- Given I add 3 different items to my cart
- When I navigate between Products, Product Detail, and Cart pages
- Then the cart badge consistently shows "3"
- And removing an item from any page updates the badge immediately

## Notes
- Priority: Medium
- Work type: Story
- Status: To Do
- Project: AIDemo

## Summary
This story verifies that cart state remains consistent as the shopper moves through the app, and that the badge reflects the real item count immediately.
