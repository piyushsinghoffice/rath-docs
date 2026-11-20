---
title: "Rath Features settings"
description: "Choose what Rath can display, remember and change."
lastVerifiedVersion: "1.139.0"
---

Use Rath Features to choose what appears in chat, whether Rath saves useful notes, and whether it can connect project services. You can also adjust command safety and notifications in Settings.

## Before you start

Open your project and decide which [permission mode](/rath-docs/permissions/) the chat needs. A feature switch does not change the chat's permissions. Connected services can run programs on your computer; enable them only when you intend to use them.

## Choose features

1. Open the Command Palette with **Ctrl+Shift+P** (Windows or Linux) or **Cmd+Shift+P** (Mac).
2. Choose **Preferences: Open Settings (UI)**, then select **AI > Rath Features**.
3. Change a switch or choose an appearance level. The page shows the current choice and explains its effect.
4. For features requiring a new chat, start one with **Rath: New Chat** and choose **Full access**. Then send your request.

| Feature | What to expect | Default |
| --- | --- | --- |
| **Apps in chat** | Interactive displays such as charts and calculators. Their code runs in an isolated area. | On |
| **Cards in chat** | Cards with text, progress, tables and buttons. | Off |
| **Interfaces in chat** | Forms and controls you can answer by clicking. | Off |
| **Notifications** | Notifications from plugins and packages. | On |
| **Task checklist** | A checklist above the chat box when Rath works through a plan. | On |
| **Agent changes to appearance** | **Off** prevents changes. **Lean** lets Rath create your own appearance additions. **Full** also lets it change appearance settings and manage extensions, asking first. | Lean |
| **Your styles and additions** | Loads your own appearance additions. | On |
| **Scripted components** | Lets custom chat components run scripts in an isolated area without network access. | Off |
| **Find abilities when needed** | Lets Rath find rarely used abilities when needed. | On |
| **Save useful notes** | Saves lasting project notes after a long chat turn; each run uses an extra AI request. | Off |
| **Connect services** | Enables tools from configured project services. | Off |

**Apps in chat**, **Cards in chat**, **Interfaces in chat**, **Find abilities when needed** and **Save useful notes** need **Full access** and a new chat. Finding abilities on demand applies only to new Full access chats, and does not apply in other modes. **Connect services** also needs Full access and a new chat after configuration changes. Appearance changes need Full access; the extra abilities in **Full** apply to new chats.

Apps, cards and interfaces add text to every request. Appearance's **Lean** adds about 200 tokens and **Full** about 400 tokens to each message Rath reads; tokens are small pieces of text.

Try these requests in a new Full access chat:

- With **Apps in chat** on: “Make an interactive chart of these monthly sales.” Provide the sales figures in your message.
- With **Task checklist** on: “Plan the steps to organize this project and show me the checklist.”
- With **Save useful notes** on: “Help me work through this project's recurring decisions.” After a long turn, Rath can save lasting notes for later chats.

## More controls in Settings

Use the Settings search box to find these controls by their descriptive text:

- Search **run shell commands that only look**. This is on by default: in **Ask before changes**, look-only commands run without asking. Turn it off to ask for those commands too.
- Search **Run the agent's shell commands in a sandbox**. The default is `off`. On macOS, `files` limits where commands can write; `files-and-network` also blocks their network access. Neither limits reads or other file edits. On other systems, commands are refused while it is on. Start a new chat after changing it.
- Search **check the files it changed for errors** to control the on-by-default instruction to check and fix introduced errors in new chats.
- Search **rail of dots beside a chat**, **short status labels**, or **a few lines of text** to control the prompt timeline, status labels and widgets. All are on by default.
- Search **chat you are not looking at finishes** to control the separate background-chat notification, on by default.

## If it doesn't work

If a display or connected service is missing, check its switch, select **Full access**, and start a new chat. For a connected service, ask Rath to check the connection; it can report which services connected and why one failed. See [Apps and notes](/rath-docs/apps-and-notes/) and [Permissions](/rath-docs/permissions/) for more help.

If a command fails and Rath reports that the shell sandbox needs macOS, use a Mac for sandboxed commands or turn the sandbox off to run them without that protection.
