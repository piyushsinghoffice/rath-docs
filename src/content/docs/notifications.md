---
title: "Notifications"
description: "Choose when Rath alerts you about background chats and messages needing attention."
lastVerifiedVersion: "1.139.0"
---

Notifications help you work in another chat while Rath finishes a request or waits for an answer. Rath can also show a short pop-up when it has something that needs your attention. Use these notices as a cue to return to the conversation and check the result.

Before you start, open a Rath chat and connect a provider. For background notices, start a request and then switch to another chat. See [Getting started](/rath-docs/getting-started/) and [Sessions](/rath-docs/sessions/) for help.

## Know when a chat finishes

1. Open Settings and search for `rath.agent.notifications.sessionFinished`. Find the setting described as “Show a notification when a chat you are not looking at finishes its turn.”
2. Turn the matching setting on to receive completion notices, or off to stop them. It is on by default.
3. Ask Rath to work, then switch to another chat while it is working. For example: “Read these notes and summarize the decisions and open questions.”
4. When the background chat finishes, a notice says **“{chat name}” has finished.** Select **Go to Session** to open it and read the answer.

The notice tells you the turn ended; read the answer to find out what Rath actually accomplished. If the chat has no name, the notice uses **Untitled session**. Automation runs and reviews without a chat tab do not produce this completion notice.

<!-- SCREENSHOT: Background chat completion notification with Go to Session -->

## Return when Rath needs an answer

1. Start a request that may need a decision, such as: “Help me organize these notes. Ask me which topic to start with if you need a choice.”
2. Switch to another chat. If the first chat presents a question while in the background, a notice says **“{chat name}” is waiting for your input.**
3. Select **Go to Session**, read the question in the chat, and answer it there. Rath can then continue with your response.

This notice is separate from the completion setting: turning completion notices off does not turn off background input notices. Automation runs and reviews without a chat tab do not show this notice. For help answering questions, see [Questions](/rath-docs/questions/).

## Control short pop-up messages

Rath can also use a notification tool to show a brief message, for example when a long task needs your attention. Plugins and packages are additions that can give Rath extra abilities; they can show notifications too.

1. Open Settings and go to **AI > Rath Features**.
2. Under **Show things to you**, turn **Notifications** on to allow these pop-ups, or off to suppress them. It is on by default. This switch is separate from background completion and input notices.
3. In a chat set to **Full access**, try: “When you finish reviewing these notes, show me a short notification that the review is ready.” Rath may use its notification tool; check the conversation for the actual result as well.

To control the tool itself, open **Rath: Manage Tools…**, search for **notify**, and change its **Enable** checkbox. The tool requires **Full access**; it is unavailable in **Read-only**, **Plan**, and **No tools** modes. See [Tools screen](/rath-docs/tools-screen/) for tool availability and [Permission modes](/rath-docs/permissions/) for access choices. A notification request is not a guarantee that you saw a pop-up.

## If it doesn't work

- No completion notice? Check the completion setting is on, and switch away from the chat before the turn ends. Open the chat to inspect its answer. The chat list can also show unseen activity.
- No short pop-up? Check **Notifications** under **AI > Rath Features**, the **notify** tool's **Enable** checkbox, and your permission mode. Rath may choose whether to use a tool. Only a few package or tool notifications per chat are shown every ten seconds, so rapid notices can be dropped.
- If Rath tells you **There is no screen to show a pop-up on right now.**, return to the chat to read its response. If it tells you **Say what the message should be.**, ask again with a short message to display.
- If a chat seems stalled, open it and check for a question. A background input notice can direct you there, but the answer still needs to be provided in the chat.

See [Chatting](/rath-docs/chatting/), [Sessions](/rath-docs/sessions/) and [Rath Features settings](/rath-docs/settings-features/) for more ways to manage your work.
