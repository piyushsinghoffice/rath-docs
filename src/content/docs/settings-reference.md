---
title: "Settings reference"
description: "Find the controls for Rath's behavior and appearance."
lastVerifiedVersion: "1.139.0"
---

Use Settings to choose how Rath handles messages, remembers context and uses tools. This page helps you find the right controls; the linked guides explain their choices and defaults.

## Before you start

Open Rath and decide what you want to change. Some features need a connected model provider or a particular [permission mode](/rath-docs/permissions/). Settings show your current choices; the starting defaults in the linked guides can differ from choices you or your organization have made.

## Find and change a setting

1. Open the Command Palette with **Ctrl+Shift+P** on Windows or Linux, or **Cmd+Shift+P** on Mac.
2. Choose **Preferences: Open Settings (UI)**. Select **AI**, then a section below.
3. Find the control and change its switch, dropdown or value. Settings shows the selected value. You can also use the Settings search box to find a control by its name or description.
4. Return to chat and try the change. If the control says it applies to new chats, start a new chat first.

| Section | Use it to find |
| --- | --- |
| [General](/rath-docs/settings-general/) | Starting models, message suggestions and inline completions. |
| [Chat](/rath-docs/settings-chat/) | Message handling, question sounds and the loading animation. |
| **Providers** | Model providers, their configured status and controls for API keys. |
| **Speech to Text** | The on-device speech model for dictation. |
| [Rath Features](/rath-docs/settings-features/) | Controls for displays, appearance, notes and connecting services. |
| **Services** | Installed services and their status. |
| [Context](/rath-docs/settings-context/) | Controls for information kept during long conversations and for notes. |
| [Tools](/rath-docs/settings-tools/) | Connected services, web search and finding abilities. |

Other controls are searchable in Settings. For example, search **chat you are not looking at finishes** for the background completion notice, which is on by default. See [Notifications](/rath-docs/notifications/). Search **run shell commands that only look** to control whether those commands run without asking in **Ask before changes**; this is on by default. See [Permissions](/rath-docs/permissions/).

## Try it

- To queue a request while Rath is working, leave **AI > Chat > While Running: Default Action** at `followUp`, then send: “Then summarize your changes in three bullets.” It waits for the current work to finish.
- To use a different starting model, run **Rath: Choose Default Model…**, select a model, and start a new chat. Check the model selector below the message box, then ask: “Summarize these meeting notes in five bullets.”
- To reduce interruptions, turn off **Ask User: Sound** under **AI > Chat**. Try: “Help me plan a meeting, and ask what you need to know.” Check the chat for any question.

## If it doesn't work

- If a change has no effect, check whether it requires a new chat or a different permission mode. For connected services, **Connect services** must be on, the chat must use **Full access**, and a new chat is needed after a configuration change.
- If you see **No API key configured for [provider].**, run **Rath: Set Provider API Key…** and choose that provider. See [Provider connections](/rath-docs/provider-connections/).
- If you see **Still waiting for the model**, Rath is waiting for a reply. **Retry** and **Stop** appear after twice the configured notice delay; see [Chat settings](/rath-docs/settings-chat/).

For more help, see [Models and thinking level](/rath-docs/models/) and [Troubleshooting](/rath-docs/troubleshooting/).
