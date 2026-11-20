---
title: "Cards and interfaces in chat"
description: "Early: Show and use cards and interfaces in a Rath conversation."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

Ask Rath for a card when a compact table, progress display, or set of choices would make an answer easier to use. Ask for an interface when you want a form to fill in and answer by clicking. Both appear in chat, and both can include controls.

## Before you start

You need a working AI connection and a chat. **Cards in chat** and **Interfaces in chat** are separate switches, both off by default. Each adds extra text that Rath reads with every message when enabled. Both require **Full access**, which also allows other configured tools, including tools that can change your work. Read [Permission modes](/rath-docs/permissions/) before choosing it.

## Turn on and use a card or interface

1. Open Settings and choose **AI** > **Rath Features**. Under **Show things to you**, turn on **Cards in chat**, **Interfaces in chat**, or both. The features overlap: try a card for a compact display or an interface for a form.
2. Start a **New Chat**. Beneath the message box, open **Permission** and select **Full access**. The switches take effect for newly started chats.
3. Describe the result and the information it should use. For example, send: “Show a card comparing these tasks: research 3 hours, writing 5 hours, review 2 hours. Include a table.”
4. Look for the card or interface in the conversation. Its title, contents and control labels depend on what Rath creates. If it has fields or choices, fill them in and use a button to respond. Check the values first.
5. Continue in chat if the display needs changing: “Add a progress indicator for the review, currently halfway done.”

<!-- SCREENSHOT: Card and interface controls in a Rath chat -->

A card button sends its visible label and any control values as your next message when the message box is empty and Rath is idle. If Rath is busy or you have a draft, the response is placed in the message box instead. If the button has a different message behind its label, that message and the control values are placed in the message box for you to review and send. Interface button actions also send information back to the conversation. Check your choices before clicking, especially when an action could change your work.

## Try these requests

- For a quick status display: “Show a card with three tasks: outline complete, draft halfway, review not started. Include progress bars.”
- For a form: “Show an interface where I can enter a meeting topic and choose a duration, then send my choices back to you.”
- For a decision: “Show a card comparing train, bus and car using these example costs: 30, 15 and 25. Include buttons so I can choose one.”

Provide your own numbers and check the result. The labels and controls depend on what Rath creates.

## Turn them off

1. Return to **AI** > **Rath Features** in Settings.
2. Under **Show things to you**, turn off **Cards in chat**, **Interfaces in chat**, or both.
3. Start a **New Chat** for the change to apply. Existing conversations can still contain cards made earlier. **Apps in chat** is a separate switch; see [Apps and notes in chat](/rath-docs/apps-and-notes/) if you want to control those too.

## What to know

The switches make these abilities available; they do not require Rath to use them for every answer. Cards can show text, progress, tables, buttons and input controls. Interfaces can show forms, tables, buttons and progress.

## If it doesn't work

- If Rath answers in text, check the relevant switch, start a new chat in **Full access**, and ask specifically for a card or interface. You can also describe the controls you need.
- If you see **This interface could not be drawn.**, tell Rath what happened and ask it to try again with a simpler interface.
- If a card does not appear, ask Rath to create it again with the desired text or table.
- If a button or result is confusing, describe what you clicked and what appeared. Ask Rath to correct it, or send your answer as an ordinary chat message.

## Related pages

- [Chatting with Rath](/rath-docs/chatting/) for sending messages and follow-ups.
- [Permission modes](/rath-docs/permissions/) for the effects of **Full access**.
- [Apps and notes in chat](/rath-docs/apps-and-notes/) for interactive apps and their separate setting.
- [Rath Features settings](/rath-docs/settings-features/) for the other display switches.
