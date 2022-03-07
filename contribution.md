# Writing an issue guidance

## Issue title format

```
[project name in lowercase] Short title
```

Task title formats:

- <verb/action> [activity] (e.g. “Perform backup”)
- <verb/action> [thing] (e.g. “Research new javascript framework”)

New features:

- Implement <endpoint> (e.g. Implement POST /api/v1/users)
- Create endpoint <endpoint> (e.g. Create endpoint POST /api/v1/users)

Updates:

- Make [feature] run faster
- Improve the performance of [feature/screen/endpoint]
- Update [feature] with/to [update]
- Rename [feature/text] to [new name]

In example:

`[component] Fix - Dokz not displaying`

`[web] Setup Lighthouse in CI/CD workflow`

## Issue description format

- **Context**: explain the conditions which led you to write this issue.

  For example: _“Since we’ve configured typescipt in project nest-component, our code quality is improved.”_

- **Problem or idea**: the context should lead to something, an idea or a problem that you’re facing.

  For example: _“But our code quality is not good enough. We need to configure eslint in our project.”_

- **Solution or next step**: this where you move forward. You can engage others (request feedback), assign somebody else to the issue, or simply leave it for further investigation, but you absolutely need to propose a next step towards solving the issue.

  For example: _“@user please take look at eslint configuration of our previous project. [Here] is repo link. We need to install eslint, eslint-config-next, typescript-eslint“_

- **Other requirements**:
  - Please Keep titles short and descriptive.
  - Include/tag the right people in your discussion.
  - Format your messages. Use markdown syntax. Steps of work can be described with checkboxes.
  - Add useful links to you references.

# Branch naming convention

Branch name consists of 3 parts with following format:

- ID of the issue (number)
- Short description
- Hyphens must be seperators

For example: `12-api-endpont-add-content`

**Branch type based names**

Type based names might be useful.

For example:

`feature/12-api-endpont-add-content`
`hotfix/23-fixed-runtime-timeout-error`
`refactor/7-refactored-jwt-authentication`
`docs/added-installation-guide-in-readme`

# Commit messages

In monorepo, short name in commit messages can be helpful. Subject of notification emails will become more descriptive.

Please keep commit message short but explicit. Prepend your action before commit message.

For example:

`Fix - [dental-front] Fixed app crash during login`

`Feature - [dental-backend] Implemented jwt for authentication`

`Merge - [landing-page] Merged latest main branch`

`Refactor - Replaced database model name`

# Pull request format

**Naming convention**:

- Project short slug
- Title - Short informative summary of the pull request

  For example: `[web] Footer`, `[component]`

**Description**:

- IssueID must be provided with `#`. For example: `#12`
- Description: More detailed explanatory text describing the PR for the reviewer. What did you solve/fixed.
- Additional: PR checklist template is useful. `PULL_REQUEST_TEMPLATE.md`
