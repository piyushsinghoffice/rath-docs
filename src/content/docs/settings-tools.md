---
title: "Tools settings"
description: "Choose connected tools and a web search provider."
lastVerifiedVersion: "1.139.0"
---

Use **AI > Tools** to control additional abilities. A tool is an action Rath can use while working, such as searching the web. Check [Permissions](/rath-docs/permissions/) before giving a chat access to tools.

| Setting | What it changes and when to use it | Default and allowed values |
| --- | --- | --- |
| MCP: Enabled | Connects configured project services and their tools. Turn it on only when you want to use those services; they can run programs on your computer. Full tools permission is required. | Off; on or off |
| Web Search: Provider | Chooses the search service. The default needs no key but can break or be rate-limited. Tavily and Brave require their respective API keys. | `duckduckgo`; `duckduckgo`, `tavily`, `brave` |
| Tool Search: Enabled | Lets Rath find seldom-used tools when needed instead of listing them on each turn. Turn it off if you want those tools listed from the start. Applies to new full-access chats; read-only and no-tools chats are unaffected. | On; on or off |

For example, choose `brave` after setting up a Brave Search key, or leave the default if you want to try a search without one. To use a configured service, enable **Connect services** under **Rath Features** and use full access. If a search fails, check the provider and key; the default service can also rate-limit requests. See [Troubleshooting](/rath-docs/troubleshooting/).
