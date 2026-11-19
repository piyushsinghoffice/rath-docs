---
title: "Welcome to Rath"
description: "Start a conversation about your work and find the help you need."
lastVerifiedVersion: "1.139.0"
---

Rath is a place to work with the contents of a folder by talking to an AI assistant. You can ask it to explain unfamiliar material, find information, or help edit a document. It is for anyone who wants help with work in a folder, including people who do not write code. You choose how much access to give it, and you should check its answers and edits against your own material.

## Before you start

You need a Rath build, a folder to work with, and access to a model provider: the service that supplies the AI model that answers you. Depending on the provider, you may use a subscription or an API key. Provider charges and limits depend on your account. Have your account details ready, and keep any API key private. [Getting started](/rath-docs/getting-started/) walks through the first connection.

## Five things to try first

1. **Ask for an overview.** Open your folder in Rath and select **New chat**. If you need a provider, open the Command Palette, choose **Rath: Connect a Model Provider**, and follow the prompts. Under the message box, open **Permission** and choose **Read-only**. Select an available model, type “Explain what is in this folder and suggest where I should start,” and select **Send**. You should see your message followed by Rath's response. Read-only lets Rath inspect and search without editing your files.
2. **Ask a follow-up.** In the same chat, type “Explain that in simpler language and point me to the relevant documents.” Select **Send**. Use the answer to decide what to read next, and check important claims against the original documents.
3. **Share a specific item.** Select the plus button, **Attach, context, and session actions**, then **Attach a file (image or text)**. Choose a picture or plain-text file and ask, “Summarize this in five points.” Check the attachment by the message box before sending; see [Chatting](/rath-docs/chatting/) for other ways to provide context.
4. **Try a small edit with your approval.** When Rath is idle, open **Permission** and choose **Ask before changes**. Ask, “Fix the spelling in my meeting notes.” Reads can proceed; edits and commands wait for your decision. When **Allow Rath to use …?** appears, read the proposed action and select **Allow** or **Deny**. A command is an instruction run on your computer. See [Permission modes](/rath-docs/permissions/) before granting more access.
5. **Review the result.** If Rath records an edit, find the **Edited** card in its response and select **Review**. A comparison shows the earlier and current content. Check that the change is right; if you want to reverse the response's recorded edits, select **Undo** and read the confirmation. See [Reviewing and undoing changes](/rath-docs/reviewing-changes/) for limits and other options.

## If it doesn't work

- **Open a folder to start the Rath agent.** means you need to open a folder and try again. If you see **Sign in to continue**, connect the provider for your selected model.
- **No models are available yet — configure a provider first.** calls for a provider connection. See [Connect a model provider](/rath-docs/provider-connections/).
- If **The message was not sent: Rath is not connected. Use Retry, then send it again.** appears, select **Retry** and resend. If a control says **Available again when the agent finishes**, wait for the current work or select **Stop**, then change it.

## Find your way around

- [Getting started](/rath-docs/getting-started/) covers the first chat and provider connection.
- **Everyday use** covers [chatting](/rath-docs/chatting/), [sessions](/rath-docs/sessions/), [context](/rath-docs/context/) and [reviewing changes](/rath-docs/reviewing-changes/).
- **Safety and control** explains [permissions](/rath-docs/permissions/) and [provider connections](/rath-docs/provider-connections/).
- **Extending Rath** includes [customizing](/rath-docs/customizing/) and [inline completions](/rath-docs/inline-completions/).
- **Reference** includes [models](/rath-docs/models/), settings and [troubleshooting](/rath-docs/troubleshooting/). Use the sidebar or search when you know what you need.
