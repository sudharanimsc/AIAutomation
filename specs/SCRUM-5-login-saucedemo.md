# SCRUM-5: Login SauceDemo Test Plan

## Feature
Login flow for the SauceDemo web application.

## Story Summary
As a registered SauceDemo user, I want to log in with a valid username and password, so that I can access the product catalog.

## Objective
Validate that a valid user can authenticate successfully and access the Products page, and that invalid credentials are rejected with clear feedback.

## Application URL
- https://saucedemo.com

## Test Environment
- Browser: Chromium
- Base URL: https://saucedemo.com
- Test data: standard_user / secret_sauce

## Scope
In scope:
- login page render
- valid login flow
- invalid credentials validation
- redirect to products page after success

Out of scope:
- advanced checkout flows
- shopping cart operations
- backend service testing

## Test Scenarios
### 1. Successful login
- Given the user is on the login page
- When they enter `standard_user` and `secret_sauce`
- Then they should be redirected to the inventory page
- And the page should display `Products`

### 2. Invalid login
- Given the user is on the login page
- When they enter an invalid username or password
- Then the page should show an error message
- And the user should remain on the login page

### 3. Page validation
- When the login page loads
- Then the username field, password field, and login button should be visible

## Expected Results
- The login form is available and accessible.
- User can log in with valid credentials.
- After successful login, the application lands on the Products page.
- Invalid credentials are blocked with an error message.

## Acceptance Criteria Mapping
- Given I am on the login page
- When I enter "standard_user" / "secret_sauce"
- Then I am redirected to the products page
- And I see the page title "Products"
