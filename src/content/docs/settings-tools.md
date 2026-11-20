---
title: "Tools settings"
description: "Choose connected tools and a web search provider."
lastVerifiedVersion: "1.139.0"
---

Choose a web search service, connect a trusted service, or limit what shell commands can do. A tool is an action Rath uses while working, such as searching the web. These settings work alongside the chat's [permission mode](/rath-docs/permissions/).

## Before you start

Open your project in Rath. Decide whether the task needs **Full access**: connected service tools require **Full access**. Web search is unavailable in **Read-only**, **Plan**, and **No tools**. Full access also allows tools that change your work. Connected services can run programs on your computer, so enable them only when you trust the project's configured services.

Web searches send the search terms to the selected search provider. Avoid including private information in a request that requires a web search.

## Set up tools

1. Open the Command Palette with **Ctrl+Shift+P** (Windows or Linux) or **Cmd+Shift+P** (Mac). Choose **Preferences: Open Settings (UI)**, then select **AI > Tools**.
2. Under **Web Search: Provider**, choose `duckduckgo`, `tavily`, or `brave`. The default, `duckduckgo`, needs no key and uses an unofficial results page. The other choices require their respective API keys.
3. For Tavily or Brave, open the Command Palette and choose **Rath: Set Provider API Key…**. Select **Use an API key**, then **Tavily** or **Brave Search**, and enter the key from that provider.
4. To use a configured project service, open **AI > Rath Features** in Settings and switch on **Connect services**. It is off by default. For setup instructions, see [MCP servers](/rath-docs/mcp-servers/).
5. Start a **New Chat** and select **Full access** under **Permission**. Start another new chat after changing connected services or their settings. Ask for a task and check Rath's answer and sources.

With a search provider selected, Rath can return search results in response to a request. With a connected service, the available actions depend on the service. More than 40 service tools start unloaded; Rath can load the ones it needs.

## Other controls

**Tool Search: Enabled** is on by default. It lets Rath find rarely needed tools when needed. Turn it off to list those tools from the start. The change applies to new Full access chats.

For extra limits on shell commands, search Settings for **Run the agent's shell commands in a sandbox**. The default is `off`. On macOS, `files` limits where commands write, and `files-and-network` also blocks their network access. Neither stops commands reading files you can read or limits ordinary file edits. Windows and Linux have no shell sandbox. Start a new chat after changing this setting. See [Limit shell commands](/rath-docs/shell-safety/) for details.

## Try it

- “Search the web for the latest public guidance on composting and summarize the sources.” Check the linked sources for yourself.
- With a document service connected: “Find the project brief in my connected service and summarize its decisions.” This requires a service that offers that search.
- With the sandbox configured: “Run the project's tests and explain the failures.” A test needing network access can fail with `files-and-network`.

## If it doesn't work

If Rath reports **Web search request failed**, check your internet connection. A provider failure can appear as **DuckDuckGo search failed**, **Tavily search failed**, or **Brave search failed**, followed by details. DuckDuckGo's unofficial results page can change or rate-limit requests; try another provider with its key. If Rath reports that a key is missing, use **Rath: Set Provider API Key…**, check the selected provider, and start a new chat.

If a service is missing, check **Connect services**, **Full access**, and the service configuration, then start a new chat. Ask “Which MCP servers connected, and why did any fail?” See [MCP servers](/rath-docs/mcp-servers/) for more help, or [Troubleshooting](/rath-docs/troubleshooting/) for other problems.
