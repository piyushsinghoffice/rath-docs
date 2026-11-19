---
title: "Getting started"
description: "Connect a provider and ask Rath about your work."
lastVerifiedVersion: "1.139.0"
---

Rath helps you understand and work with the contents of a folder through conversation. Start by asking it to explain what is there. Once you are comfortable with the answer and the permission controls, you can ask it to help make changes.

Before you start, you need a Rath build supplied to you, a folder to work with, and access to a model provider through a subscription or an API key. A model provider is the service that supplies the AI model. The available sign-in choices depend on the provider.

## Start your first chat

1. Open Rath and open the folder you want to explore. If asked whether you trust the folder, read the prompt and decide whether you trust its contents.
2. In the Rath chat list, select **New chat**. A new conversation opens.
3. If you need to connect a provider, open the Command Palette and choose **Rath: Connect a Model Provider**. Choose **Use a subscription** or **Use an API key**, then follow the prompts for the provider. An API key is a secret credential supplied by the provider; keep it private.
4. Beneath the message box, open **Permission** and choose **Read-only**. This lets Rath inspect and search without changing files.
5. Choose an available model, type “Explain what is in this folder and suggest where I should start,” and select **Send**.
6. Watch the conversation for Rath's activity and answer. Ask a follow-up if you need a simpler explanation or want it to focus on one item.

<!-- SCREENSHOT: A new chat with the provider and message controls visible -->

You should see your message followed by Rath's response. The response is a starting point: check important details against the original material. If you later want edits, choose an appropriate mode in [Permission modes](/rath-docs/permissions/) before asking for them.

## Try another first request

- Ask “Summarize the main decisions in these meeting notes” to get a short overview. Compare the summary with the notes before sharing it.
- Ask “Find documents that mention the launch date and tell me what each says” to investigate a specific question. Ask Rath to identify its sources so you can check them.
- Ask “Explain this folder as if I am new to the project” when the contents are unfamiliar. Follow up with “What should I read first?”

## If it doesn't work

**Open a folder to start the Rath agent.** means you need to open a folder and try again. If you see **Sign in to continue**, connect the provider for the selected model. If the sign-in command says **No active Rath chat to sign in through — open a chat first.**, open a chat and repeat the command. For a waiting or failed answer, see [Troubleshooting](/rath-docs/troubleshooting/).

Next, learn about [Chatting](/rath-docs/chatting/), [Models and thinking level](/rath-docs/models/), and [Sessions and history](/rath-docs/sessions/).
