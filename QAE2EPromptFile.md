# QA End-to-End Prompt File

## Objective
Use the configured MCP servers to connect to Playwright and GitHub, read the user stories, create a test plan in the specs folder, generate Playwright automation scripts, heal failing tests, add Extent reporting, validate the results, and prepare the repository for a GitHub commit once everything passes.

## MCP Tools / Servers to Use
- Playwright MCP server for browser automation, page inspection, interaction, and test generation.
- GitHub MCP server for repository inspection, file changes, pull requests, and commit/push operations when available.
- Atlassian MCP server (if configured) to read Jira stories and related metadata.

## Inputs
- Read all story files from the `user-stories/` folder.
- If multiple stories exist, evaluate each story file in sequence and select the active or highest-priority story for implementation.
- Use the MCP Playwright server to inspect the application and validate flows.
- Use the GitHub MCP server to review repo status, files, and remote updates as needed.
- Project root: `.`
- Specs directory: `specs/`
- Test files directory: `tests/`
- Playwright configuration and test runner already available in the project

## Workflow

### 1. Read all user stories in the folder via MCP context
- List every `.md` file in `user-stories/`.
- Read each story file in the folder to capture its title, business goal, acceptance criteria, and expected behavior.
- Identify the active or priority story to work on, when multiple stories are present.
- If a Jira story is available through the Atlassian MCP server, use that as the source of truth and align it with the local markdown story.
- Capture the application URL, environment details, and user interactions needed for validation.
- Summarize the scope before creating the plan and tests.

### 2. Create the test plan in the specs folder
- Use the MCP Playwright server to inspect the application and understand the user flow before writing the plan.
- Create or update a markdown file in `specs/` for each relevant story, or at minimum for the selected active story.
- Include:
  - feature name
  - user story summary
  - test objectives
  - scope and out of scope
  - environments
  - test data
  - test scenarios
  - expected results
- Name the file clearly using the feature or story name, for example:
  - `specs/SCRUM-5-login-saucedemo.md`
- If multiple stories are present, group them logically or create one plan per story.

### 3. Create test cases using Playwright Test Planner
- Read all available story files first, then use the selected active story as the basis for test design.
- Use the Playwright MCP server and Playwright Test Planner workflow to convert the user story and test plan into structured test cases.
- Define the main happy-path scenarios and negative-path scenarios.
- Include expected outcomes for each step.
- Save the generated plan in a structured format aligned with the project conventions.

### 4. Generate automation scripts using Playwright Test Generator
- Use the Playwright MCP server and Playwright Test Generator to create the actual Playwright test files for the selected story, or for all stories if the scope is broad enough.
- Save test files under the appropriate folder such as:
  - `tests/`
  - or a feature-based subfolder, for example `tests/login/`
- Ensure the scripts cover:
  - user login
  - validation of successful outcomes
  - validation of errors and edge cases
  - page navigation and assertions

### 5. Run all relevant tests using Playwright MCP
- Execute the generated Playwright tests through the Playwright MCP server and local Playwright runner.
- Review failures and identify flaky or broken selectors or test logic.
- Fix obvious issues in the generated scripts where necessary.
- Capture screenshots and page-state evidence when failures happen.

### 6. Heal failing tests using Playwright Test Healer
- Use the Playwright Test Healer workflow to fix broken or stale Playwright tests.
- Update selectors, assertions, and flow logic to match the current app behavior.
- Re-run the focused tests until they pass reliably.
- Do not move to completion until failing tests are resolved.

### 7. Add Extent Report integration
- Configure or update Extent reporting in the Playwright project.
- Ensure each test run generates a report with:
  - test name
  - status
  - screenshot on failure
  - browser details
  - pass/fail summary
- Keep the report output in a readable location such as `reports/` or the existing project reporting folder.

### 8. Validate the end-to-end flow
- Run the full relevant suite again after healing and report configuration.
- Confirm that:
  - all required tests pass
  - Extent report is generated successfully
  - no broken scripts remain
  - the application under test behaves as defined by the story

### 9. Review the final output
Before committing, confirm the following:
- user story reviewed
- test plan created under `specs/`
- tests created under `tests/`
- failing tests healed
- Extent report configured and generated
- Playwright MCP validation passed
- GitHub MCP status reviewed for repo readiness
- local validation passes

### 10. Commit and push to GitHub using GitHub MCP
Once everything is validated and looks good:
1. Use the GitHub MCP server to check repository status and branch state.
2. Confirm changed files and review the diff.
3. Add the changed files.
4. Commit with a clear message.
5. Push to the configured GitHub remote.

Example commit command:

```bash
git status
git add .
git commit -m "Add login story test plan and Playwright E2E coverage"
git push origin main
```

## Guardrails
- Do not commit incomplete or failing work.
- If the project is not a Git repository or the GitHub remote is not configured, stop after local validation and report the missing setup clearly.
- Prefer targeted validation over broad suite runs.
- Keep the solution aligned with the actual user story requirements.

## Expected Deliverables
- Updated or new user story markdown file in `user-stories/`
- Test plan markdown in `specs/`
- Playwright automation scripts in `tests/`
- Healed/fixed automation tests
- Extent report configuration and generated results
- Clean working tree with a successful git commit and push when repository access is available
