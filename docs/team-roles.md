Team Roles & Responsibilities
Frontend Leader

Responsible for enforcing technical standards and training the team.

Oversees Clean Architecture implementation and code reviews.

Defines naming conventions and folder structure.

Approves PRs only after checklist.md review.

Ensures proper use of atomic components, hooks, and services across the project.

Coordinates with UI/UX Designers to ensure compliance with Figma design tokens.

Frontend Developer

Follows the folder-structure.md and code architecture guidelines.

Does not write Axios calls inside components; all API requests go through the services layer.

Reviews their own PRs first according to checklist.md before submission.

Writes reusable components first before any duplication.

Ensures theme awareness (dark/light mode) and i18n readiness for all components.

Maintains responsive layouts across mobile, tablet, and desktop.

UI/UX Designer

Responsible for organizing Figma tokens and components.

Follows naming conventions:

F\* → Figma components

T\* → Design tokens

Exports assets following the strategy in ui-guidelines.md.

Annotates interactions, animations, and responsive layouts for each component.

Collaborates with Frontend before handoff to prevent missing design details.

Tester / QA

Reviews features according to the final checklist.

Uses Postman to test all API endpoints before approving a feature.

Logs bugs in ClickUp/Scrum board and tracks priorities.

Verifies:

UI consistency with design

Proper i18n support

Responsive layouts

Error, empty, loading, and network states

Backend Developer

Adheres to API contracts defined in api-guidelines.md.

Does not change response shapes without updating the contract.

Ensures error handling and validation match frontend expectations.

Provides clear API documentation for all endpoints.

Collaborates with Frontend to ensure caching, tokens, and authentication work correctly.

Collaboration Notes

All team members use ClickUp for task and bug management.

Sync meetings are held daily or weekly between Frontend and UI/UX to prevent mismatches.

PR approval workflow:

Self-review by the developer

Review by Frontend Leader

Verification against checklist.md and design compliance

Any API or design changes must be documented and shared with both teams.
