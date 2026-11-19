---
title: "Apps and notes in chat"
description: "Early: Use interactive apps and revisit earlier versions in a chat."
lastVerifiedVersion: "1.139.0"
---

**Early:** Apps in chat have known rough edges, and recent changes have not been checked with a real model.

Ask Rath for an app when a picture or a control would explain something better than a written answer. For example, a calculator can let you change an input, or a chart can help you compare numbers. The app appears inside the conversation, so you can try it and then ask Rath to change it.

## Before you start

You need a chat with a working AI connection. In Settings, open **AI** > **Rath Features** and check **Apps in chat**. It is on by default. The feature adds extra text for the agent to read with every message. Its apps run in an isolated area of the window.

Start a new chat in **Full access** mode after changing the setting. Apps in chat require that mode; see [Permissions](/rath-docs/permissions/) before choosing it. Full access gives Rath more abilities than just displaying an app.

## Make and use an app

1. In the new chat, describe what you want to see and supply any numbers or assumptions it should use. For example: “Make an interactive monthly budget calculator using income of 3,000 and expenses of 2,200. Let me change both amounts.”
2. Wait for Rath's response. You may see **Building an app…** while it writes, followed by **Loading the app…**. A preview may appear while the app is being built.
3. When the app appears in the chat, try its controls. Their labels depend on what Rath creates. Check the inputs and results before relying on them.
4. If it needs more room, use **Expand** in the app's header; use **Collapse** to return it to its smaller size. You can also ask for a change in the chat, such as “Add a savings percentage to this calculator.”

<!-- SCREENSHOT: Interactive app in a Rath chat -->

For another example, try: “Make a bar chart comparing 12, 18, and 25 visits for Monday, Tuesday, and Wednesday.” Or ask: “Show a simple simulation of a ball moving at different speeds, with a control for speed.” Rath may choose a different form for its answer, so describe the controls or picture you need if its first response is not useful.

Apps do not have access to live network data. Tell Rath which data to use, and check whether any numbers are examples. An app can send text back to the chat when you click a control designed for that purpose; the control's label is chosen by Rath.

## Revisit a version or save an app

When Rath makes several versions of an app in one response, earlier versions can appear as short notes in the **Worked** group. Open the group and choose **Show this version** beside a note to see that version. Choose **Hide this version** to turn it back into a note. The latest version remains visible separately.

To save an app, use **Save as HTML** in its header, choose a location in **Save App as HTML**, and confirm the save. Rath displays an **App saved to** message when it succeeds. HTML is a format that can display a page and its controls. Test the saved result before relying on it outside the chat.

## If it doesn't work

- If there is no app, check **Apps in chat**, start a new chat in **Full access**, and ask explicitly for an interactive chart or calculator. Rath may still answer in text.
- If **Loading the app…** stays visible or an app appears blank, tell Rath what you see and ask it to try again. A stuck loading card in a long reopened chat is a known issue.
- If a control or result looks wrong, describe the input and the result in chat and ask Rath to correct it. Apps far away in a long conversation can lose their interactive state, so re-enter inputs when you return.

## Related pages

- [Chatting with Rath](/rath-docs/chatting/) for sending a request and following up.
- [Permissions](/rath-docs/permissions/) for choosing how much Rath may do.
- [Chats and sessions](/rath-docs/sessions/) for returning to a conversation.
