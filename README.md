🌐 [Português (BR)](README.pt_BR.md) | [Español](README.es.md)

# Soc Ops — VS Code GitHub Copilot Agent Lab

> **Build a social bingo game. Learn to work with AI agents.**  
> A hands-on workshop where you ship real features using VS Code's Agent Mode.

[![.NET 10](https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet)](https://dotnet.microsoft.com/download/dotnet/10.0)
[![Blazor WASM](https://img.shields.io/badge/Blazor-WebAssembly-6f42c1?logo=blazor)](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
[![GitHub Pages](https://img.shields.io/badge/Demo-Live-brightgreen?logo=github)](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)

🎮 **[Play the Game](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)** • 📚 **[View Lab Guide](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/)**

---

## What is this?

**Soc Ops** is both a playable social bingo game *and* the canvas for a ~1 hour hands-on lab. You'll use VS Code Agent Mode to redesign the UI, add new game features, and create custom AI tooling — going from prompt to production with each step.

The app is a Blazor WebAssembly project. You don't need to know Blazor; the agents handle the implementation while you guide the vision.

---

## 🎯 What You'll Learn

| # | Skill | Description |
|---|-------|-------------|
| 1 | **Context Engineering** | Teach AI about your codebase with instructions |
| 2 | **Agentic Primitives** | Background agents, cloud agents, and custom workflows |
| 3 | **Design-First Development** | Let AI iterate on UI while you guide the vision |
| 4 | **Test-Driven Development** | Use TDD agents for reliable feature development |

---

## 📚 Lab Guide

| Part | Title | Time |
|------|-------|------|
| [**00**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=00-overview) | Overview & Checklist | — |
| [**01**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=01-setup) | Setup & Context Engineering | 15 min |
| [**02**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=02-design) | Design-First Frontend | 15 min |
| [**03**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=03-quiz-master) | Custom Quiz Master | 10 min |
| [**04**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=04-multi-agent) | Multi-Agent Development | 20 min |

> 📝 Lab guides are also available in the [`workshop/`](workshop/) folder for offline reading.

---

## 🚀 Getting Started

### Prerequisites

- [VS Code](https://code.visualstudio.com/) v1.107+
- [GitHub Copilot](https://github.com/features/copilot) (Pro, Business, or Enterprise)
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) or higher

### Option A: GitHub Codespaces _(fastest)_

1. Click **Use this template** → **Create a new repository**
2. Open your new repo → **Code** → **Codespaces** → **Create codespace on main**
3. Wait for the devcontainer to finish setup, then run `/setup` in the Chat panel

### Option B: Local VS Code

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>/SocOps
dotnet run
```

The app runs at `http://localhost:5166`. Deploys automatically to GitHub Pages on push to `main`.

---

## 🛠️ Commands

```bash
# Run
cd SocOps && dotnet run

# Build
cd SocOps && dotnet build

# Test
dotnet test

# Lint
dotnet format --verify-no-changes SocOps/SocOps.csproj
```
