# Project Guidelines

## Mandatory Development Checklist
- [ ] Lint: `dotnet format --verify-no-changes SocOps/SocOps.csproj`
- [ ] Build: `dotnet build SocOps/SocOps.csproj`
- [ ] Test: `dotnet test`

## Architecture
- Blazor WebAssembly app in `SocOps/` targeting .NET 10.
- Startup/DI: `SocOps/Program.cs`; routing: `SocOps/App.razor`; main flow: `SocOps/Pages/Home.razor`.
- UI in `SocOps/Components`; game logic in services:
  - `SocOps/Services/BingoGameService.cs`: state orchestration, UI notifications, localStorage.
  - `SocOps/Services/BingoLogicService.cs`: board generation and bingo logic.

## Conventions
- Keep state transitions in `BingoGameService` and keep `BingoLogicService` immutable-update style.
- Use small composable Razor components with `EventCallback` actions.
- Preserve the 5x5 model assumptions, including center free-space behavior.

## Styling and Docs
- Use utility classes from `SocOps/wwwroot/css/app.css`; add utilities there instead of inline styles.
- Follow `.github/instructions/css-utilities.instructions.md` and `.github/instructions/frontend-design.instructions.md` for UI tasks.
- Reference docs: `README.md`, `workshop/GUIDE.md`, `workshop/*.md`, `CONTRIBUTING.md`.

## Pitfalls
- Check for port 5166 conflicts before running the app.
- Do not edit `.solutions/**` unless explicitly requested.
