# Project Guidelines

## Architecture
- This repository is a Blazor WebAssembly app in SocOps/ targeting .NET 10.
- App startup and DI are configured in SocOps/Program.cs.
- Routing is configured in SocOps/App.razor; the main game flow is driven from SocOps/Pages/Home.razor.
- Keep UI composition in SocOps/Components and game/business logic in services:
  - SocOps/Services/BingoGameService.cs: stateful orchestration, UI notifications, localStorage persistence.
  - SocOps/Services/BingoLogicService.cs: stateless board generation, toggle/check logic.
- Shared models live in SocOps/Models; static prompt data lives in SocOps/Data/Questions.cs.

## Build and Run
- Build: dotnet build SocOps/SocOps.csproj
- Run: dotnet run --project SocOps/SocOps.csproj
- Dev URL: http://localhost:5166 (from SocOps/Properties/launchSettings.json)
- Tests: no dedicated test project exists yet. If tests are added, use dotnet test from repo root.

## Conventions
- Respect nullable reference types and implicit usings enabled by SocOps/SocOps.csproj.
- Prefer small, composable Razor components with EventCallback parameters for actions.
- Keep state transitions in BingoGameService rather than in component markup code.
- Preserve the existing immutable-update style in BingoLogicService methods (return updated collections).
- Keep the center free-space behavior and line-check assumptions consistent with the 5x5 board model.

## Styling
- Use the utility-class approach defined in SocOps/wwwroot/css/app.css.
- Add missing utility classes to app.css instead of introducing ad-hoc inline styles.
- Follow the project guidance in .github/instructions/css-utilities.instructions.md.
- For redesign tasks, follow .github/instructions/frontend-design.instructions.md.

## Common Pitfalls
- Port conflicts are common if a prior dotnet run is still active on 5166; verify before starting another server.
- Avoid editing .solutions/** unless explicitly asked; those folders are reference outcomes for workshop steps.

## Reference Docs
- Project overview and commands: README.md
- Workshop flow and step-by-step context: workshop/GUIDE.md
- Offline workshop modules: workshop/*.md
- Contribution policy: CONTRIBUTING.md
