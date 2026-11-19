---
title: "The Rath command line"
description: "Early: Start Rath in a terminal, ask a question, and resume a chat."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

Use the Rath command line to chat while you are working in a terminal, ask one question and return to your prompt, or continue an earlier conversation. A terminal is a window where you type commands for your computer to run.

## Before you start

Install Rath and connect a model provider; see [Provider connections](/rath-docs/provider-connections/). Open a terminal in the folder you want Rath to work with. That folder also determines which previous chats appear first when you resume.

## Make the commands available

On macOS:

1. Open Rath's Command Palette with Command-Shift-P.
2. Choose **Shell Command: Install 'rath' and 'rath-agent' Commands in PATH**. If asked, authorize the installation.
3. Look for **Shell commands 'rath' and 'rath-agent' successfully installed in PATH. Run 'rath agent' or 'rath-agent' in a terminal to use the Rath agent.** Open a new terminal and enter `rath agent --help` to see the available options.

On Windows, the Rath installer adds the commands to your command search path. Open a new terminal and try `rath agent --help`. On Linux, command availability depends on how Rath was installed; try the same help command.

## Start a conversation

1. In your terminal, enter `rath agent` and press Enter. `rath-agent` starts the same terminal agent.
2. Type a request such as “Summarize the documents in this folder without changing them” and press Enter.
3. Read Rath's response in the terminal, then type a follow-up such as “Turn that summary into a short checklist.”
4. When finished, type `/quit` and press Enter.

For a single request, enter `rath agent -p "Give me three questions to ask about these documents"`. Rath prints its response and exits. Use `rath agent --help` to see more options. The plain command `rath` opens Rath rather than starting this terminal conversation.

## Resume a chat

1. Open a terminal in the same folder as the earlier chat and enter `rath agent --resume`.
2. In **Resume Session (Current Folder)**, find the conversation by its name or first message. Type to search, use the arrow keys to select it, and press Enter. Press Tab to switch to **Resume Session (All)** if you need to look beyond the current folder.
3. Once the conversation opens, ask, for example, “What were the next steps we agreed on?” You can continue the conversation from there.

For the most recent conversation, use `rath agent --continue`. Inside an interactive conversation, `/resume` opens the selector as well. Rath's window and terminal use shared chat storage, so chats for the same folder can be continued across them.

## What to know

The terminal launcher defaults to full access: Rath can use tools that read and change files or run commands. Be specific when you want it only to inspect something, and review its work. The terminal agent loads available bundled tools except those intended only for the Rath window, so the two experiences do not have identical features. The packaged command and the complete cross-surface resume experience have not been checked in a live Rath window for this guide.

## If it doesn't work

- If the terminal cannot find the command, check the installation step and open a new terminal. A particular Rath build may not include the terminal agent: the launcher can report **This build of Rath does not include the terminal agent.** Use a build that includes it.
- **No sessions in current folder. Press Tab to view all.** means the current-folder list is empty. Press Tab or start from the folder where you had the conversation. **No sessions found** means the displayed search and scope found none; clear your search and check the scope.
- **No models available** or **No API key found** indicates a connection is needed. In an interactive terminal chat, enter `/login` and follow the provider prompts, or check [Provider connections](/rath-docs/provider-connections/).
- **rath-agent: no bundled or system Node.js runtime found.** means the required runtime is unavailable. Reinstall a complete Rath build or ask your administrator for help.

## Related pages

- [Chats and sessions](/rath-docs/sessions/)
- [Permissions](/rath-docs/permissions/)
- [Troubleshooting](/rath-docs/troubleshooting/)
