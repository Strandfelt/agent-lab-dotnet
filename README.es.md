<!-- l10n-sync: source-file="README.md" -->
# Soc Ops — VS Code GitHub Copilot Agent Lab

> **Construye un juego de Social Bingo. Aprende a trabajar con agentes de IA.**  
> Un taller práctico donde entregas funcionalidades reales usando el Modo Agente de VS Code.

[![.NET 10](https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet)](https://dotnet.microsoft.com/download/dotnet/10.0)
[![Blazor WASM](https://img.shields.io/badge/Blazor-WebAssembly-6f42c1?logo=blazor)](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
[![GitHub Pages](https://img.shields.io/badge/Demo-Live-brightgreen?logo=github)](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)

🎮 **[Jugar](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)** • 📚 **[Ver Guía del Lab](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/)**

---

## ¿Qué es esto?

**Soc Ops** es a la vez un juego de bingo social jugable *y* el lienzo para un laboratorio práctico de ~1 hora. Usarás el Modo Agente de VS Code para rediseñar la interfaz, agregar nuevas funciones al juego y crear herramientas de IA personalizadas — del prompt a producción en cada paso.

La aplicación es un proyecto Blazor WebAssembly. No necesitas saber Blazor; los agentes se encargan de la implementación mientras tú guías la visión.

---

## 🎯 Qué Aprenderás

| # | Habilidad | Descripción |
|---|-----------|-------------|
| 1 | **Ingeniería de Contexto** | Enseña a la IA sobre tu código con instrucciones |
| 2 | **Primitivas Agénticas** | Agentes en segundo plano, en la nube y flujos personalizados |
| 3 | **Desarrollo Design-First** | Deja que la IA itere en la UI mientras tú guías la visión |
| 4 | **Desarrollo Guiado por Tests** | Usa agentes TDD para un desarrollo de funcionalidades confiable |

---

## 📚 Guía del Lab

| Parte | Título | Tiempo |
|-------|--------|--------|
| [**00**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=00-overview) | Descripción General & Lista Rápida | — |
| [**01**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=01-setup) | Configuración & Ingeniería de Contexto | 15 min |
| [**02**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=02-design) | Frontend Design-First | 15 min |
| [**03**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=03-quiz-master) | Quiz Master Personalizado | 10 min |
| [**04**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=04-multi-agent) | Desarrollo Multi-Agent | 20 min |

> 📝 Las guías del lab también están disponibles en la carpeta [`workshop/es/`](workshop/es/) para lectura offline.

---

## 🚀 Comenzar

### Requisitos Previos

- [VS Code](https://code.visualstudio.com/) v1.107+
- [GitHub Copilot](https://github.com/features/copilot) (Pro, Business o Enterprise)
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) o superior

### Opción A: GitHub Codespaces _(más rápido)_

1. Haz clic en **Use this template** → **Create a new repository**
2. Abre tu nuevo repositorio → **Code** → **Codespaces** → **Create codespace on main**
3. Espera a que el devcontainer termine la configuración y ejecuta `/setup` en el panel de Chat

### Opción B: VS Code Local

```bash
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd <tu-repo>/SocOps
dotnet run
```

La app corre en `http://localhost:5166`. Se despliega automáticamente en GitHub Pages al hacer push a `main`.

---

## 🛠️ Comandos

```bash
# Ejecutar
cd SocOps && dotnet run

# Compilar
cd SocOps && dotnet build

# Tests
dotnet test

# Lint
dotnet format --verify-no-changes SocOps/SocOps.csproj
```
