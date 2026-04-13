<!-- l10n-sync: source-file="README.md" -->
# Soc Ops — VS Code GitHub Copilot Agent Lab

> **Construa um jogo de Social Bingo. Aprenda a trabalhar com agentes de IA.**  
> Um workshop prático onde você entrega funcionalidades reais usando o Modo Agente do VS Code.

[![.NET 10](https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet)](https://dotnet.microsoft.com/download/dotnet/10.0)
[![Blazor WASM](https://img.shields.io/badge/Blazor-WebAssembly-6f42c1?logo=blazor)](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
[![GitHub Pages](https://img.shields.io/badge/Demo-Live-brightgreen?logo=github)](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)

🎮 **[Jogar](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/)** • 📚 **[Ver Guia do Lab](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/)**

---

## O que é isso?

**Soc Ops** é tanto um jogo de bingo social jogável *quanto* a base para um lab prático de ~1 hora. Você usará o Modo Agente do VS Code para redesenhar a interface, adicionar novas funcionalidades ao jogo e criar ferramentas de IA personalizadas — do prompt à produção em cada etapa.

O app é um projeto Blazor WebAssembly. Você não precisa saber Blazor; os agentes cuidam da implementação enquanto você guia a visão.

---

## 🎯 O que Você Vai Aprender

| # | Habilidade | Descrição |
|---|------------|-----------|
| 1 | **Engenharia de Contexto** | Ensine a IA sobre seu código com instruções |
| 2 | **Primitivas Agênticas** | Agentes em segundo plano, na nuvem e fluxos personalizados |
| 3 | **Desenvolvimento Design-First** | Deixe a IA iterar na UI enquanto você guia a visão |
| 4 | **Desenvolvimento Orientado a Testes** | Use agentes TDD para desenvolvimento confiável de funcionalidades |

---

## 📚 Guia do Lab

| Parte | Título | Tempo |
|-------|--------|-------|
| [**00**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=00-overview) | Visão Geral & Lista Rápida | — |
| [**01**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=01-setup) | Configuração & Engenharia de Contexto | 15 min |
| [**02**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=02-design) | Frontend Design-First | 15 min |
| [**03**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=03-quiz-master) | Quiz Master Personalizado | 10 min |
| [**04**](https://dotnet-presentations.github.io/vscode-github-copilot-agent-lab/docs/step.html?step=04-multi-agent) | Desenvolvimento Multi-Agent | 20 min |

> 📝 Os guias do lab também estão disponíveis na pasta [`workshop/pt_BR/`](workshop/pt_BR/) para leitura offline.

---

## 🚀 Começando

### Pré-requisitos

- [VS Code](https://code.visualstudio.com/) v1.107+
- [GitHub Copilot](https://github.com/features/copilot) (Pro, Business ou Enterprise)
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) ou superior

### Opção A: GitHub Codespaces _(mais rápido)_

1. Clique em **Use this template** → **Create a new repository**
2. Abra seu novo repositório → **Code** → **Codespaces** → **Create codespace on main**
3. Aguarde o devcontainer terminar a configuração e execute `/setup` no painel de Chat

### Opção B: VS Code Local

```bash
git clone https://github.com/<seu-usuario>/<seu-repo>.git
cd <seu-repo>/SocOps
dotnet run
```

O app roda em `http://localhost:5166`. O deploy é feito automaticamente no GitHub Pages ao fazer push para `main`.

---

## 🛠️ Comandos

```bash
# Executar
cd SocOps && dotnet run

# Compilar
cd SocOps && dotnet build

# Testes
dotnet test

# Lint
dotnet format --verify-no-changes SocOps/SocOps.csproj
```
