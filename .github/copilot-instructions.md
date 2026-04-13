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

## Design Guide
- Start with a clear visual direction for each UI change (theme, typography, color mood, interaction tone) before writing markup.
- Keep visual tokens centralized in `SocOps/wwwroot/css/app.css` using CSS variables; avoid hard-coded one-off colors in components.
- Prefer reusable semantic classes for component-level styling (`hero`, `banner`, `button`, `card`) and use utility classes for layout/spacing composition.
- Add purposeful motion for major moments (screen load, button press, success states) and avoid constant decorative animation that competes with gameplay.
- Preserve readability first: maintain strong text contrast and clear hierarchy for headers, game instructions, and action buttons.
- Design for mobile and desktop from the start: verify small viewports, tap targets, and overflow behavior.
- Respect reduced-motion users by providing `prefers-reduced-motion` fallbacks for non-essential animations.
- Keep celebratory visuals (confetti, party cues) non-blocking and performant; effects must not interfere with tapping squares.

## Pitfalls
- Check for port 5166 conflicts before running the app.
- Do not edit `.solutions/**` unless explicitly requested.
