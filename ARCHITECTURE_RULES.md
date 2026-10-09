## Component Naming

- atoms → PascalCase
- hooks → useSomething.ts
- api → verb + Api.ts (loginApi.ts)

## Feature Rules

- Feature لا يستورد Feature
- Feature لا يلمس config global مباشرة
- كل Feature له:
  api / hooks / components / types
