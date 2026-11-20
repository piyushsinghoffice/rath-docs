---
title: "Welcome to Rath"
description: "Start a conversation about your work and find the help you need."
lastVerifiedVersion: "1.139.0"
---

Rath lets you talk to an AI assistant about the contents of a folder. Ask it to explain unfamiliar material, find information, or help edit a document. Start with a question, check the answer against your own material, and choose how much access to give Rath.

## Before you start

You need Rath, a folder to work with, and an account with a model provider: the service that supplies the AI model. Depending on the provider, you may use a subscription or an API key. Charges and limits depend on your provider and account; keep your key private. [Getting started](/rath-docs/getting-started/) explains the first connection.

Your messages and material Rath uses to answer them can be sent to the selected model provider. Check the provider's terms before sharing sensitive information.

## Start a chat

1. Open your folder in Rath and select **New chat**. If you need to connect a provider, follow [Connect a model provider](/rath-docs/provider-connections/).
2. Under the message box, open **Permission** and choose **Read-only**. Rath can inspect and search your material without editing files in this mode.
3. Next to **Permission**, select a model from the model picker. If it says **No models available**, connect a provider first.
4. Type “Explain what is in this folder and suggest where I should start” and select **Send**. Your message appears in the chat, followed by Rath's response.
5. Ask a follow-up in the same chat: “Explain that in simpler language and point me to the relevant documents.” Check important claims against those documents.

To give Rath a specific picture or plain-text file, select the plus button under the message box, then **Attach a file (image or text)**. Choose the file, type “Summarize this in five points,” and select **Send**. See [Chatting](/rath-docs/chatting/) for more ways to provide context.

## Try an edit

When Rath is idle, open **Permission** and choose **Ask before changes**. Type “Fix the spelling in my meeting notes” and select **Send**. Reads run without asking. By default, commands that only look at information also run without asking; other commands and edits ask for your decision.

When **Allow Rath to use …?** appears, read the proposed action. Select **Allow** for that action, **Always Allow … in This Chat** to allow that tool for the rest of this chat, or **Deny** to refuse it. See [Permission modes](/rath-docs/permissions/) for more detail.

If Rath records an edit, select **Review** on the **Edited** card to compare the earlier and current content. Check the result. To reverse the response's recorded edits, select **Undo** and read the confirmation. [Reviewing and undoing changes](/rath-docs/reviewing-changes/) explains the limits.

## If it doesn't work

- **Open a folder to start the Rath agent.** Open a folder and try again.
- **Sign in to continue** or **No models available**: connect a provider for your model. See [Connect a model provider](/rath-docs/provider-connections/).
- **The message was not sent: Rath is not connected. Use Retry, then send it again.** Select **Retry** and resend.
- **Available again when the agent finishes**: wait for the current work or select **Stop**, then change the control.

For more help, see [Chatting](/rath-docs/chatting/), [Troubleshooting](/rath-docs/troubleshooting/), and [Models](/rath-docs/models/).
