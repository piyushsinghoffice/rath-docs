---
title: "General settings"
description: "Choose starting models and suggestions."
lastVerifiedVersion: "1.139.0"
---

Use **AI > General** in Settings to choose the model that starts new chats and to turn on suggestions while you type. You can also choose the model and instructions used to draft commit messages.

Before you start, connect a provider, the service supplying your model. Suggestions and commit messages use an API key for their selected provider and can incur charges. See [Provider connections](/rath-docs/provider-connections/). Both chat prompt suggestions and editor inline completions are off by default.

## Choose a starting chat model

1. Open a Rath chat. Open the Command Palette with `Command+Shift+P` on Mac or `Ctrl+Shift+P` on Windows or Linux.
2. Select **Rath: Choose Default Model…**, then pick an available model. This sets **Default Model: Provider** and **Default Model: Id** together for new chats.
3. Start a new chat and check the model selector beneath the message box before sending your request.

If both settings are blank, Rath selects an available model automatically, so the choice depends on your available models. To change the model for the current chat, use its model selector instead. See [Models and thinking level](/rath-docs/models/).

## Turn on suggestions

1. Open **Settings**, select **AI**, then **General**. Find **Prompt Suggestions: Provider** and select the provider you want to use.
2. Open the Command Palette and run **Rath: Set Provider API Key…** for that provider. Run **Rath: Choose Prompt Suggestion Model** and choose a model.
3. Turn on **Prompt Suggestions: Enabled**. Start typing in the chat message box; suggested continuation text appears when the provider returns a suggestion. **Prompt Suggestions: Debounce Ms** controls the wait after typing stops; the default is 400 milliseconds.

Requests send your current message text, active-file context and recent conversation context to the selected provider. Review what you are sharing and the provider's pricing before enabling this feature.

For suggestions in the editor instead, set **Inline Completions: Provider**, add its API key, run **Rath: Choose Inline Completion Model**, and turn on **Inline Completions: Enabled**. **Inline Completions: Trigger Mode** lets you choose automatic suggestions or manual requests using **Rath: Trigger Inline Completion**. Editor requests send surrounding text to the provider: by default up to 100 lines before and 40 lines after the cursor. See [Inline completions](/rath-docs/inline-completions/) for language exclusions and other controls.

## Set a commit-message style

In **Settings**, search for `commit messages`. Under **Rath › Agent › Commit Messages**, choose **Provider** and enter a **Model**, or leave each blank to use the corresponding prompt-suggestion setting. Enter optional **Instructions** to shape the draft. The prompt-suggestion provider starts as DeepSeek and its model is blank; check both values if you rely on them. Generating a message sends changes and repository context to the selected provider; see [Write a commit message with Rath](/rath-docs/commit-message/) for details and review steps.

## Try it

- Choose a starting model, open a new chat, and type: “Summarize these meeting notes in five bullets.”
- With prompt suggestions enabled, start a message with “Help me plan a team meeting about” and look for a continuation.
- For commit messages, enter “Begin the subject with docs:” in **Instructions**, then generate and review a draft in **Source Control**.

## If it doesn't work

- **Rath chat prompt suggestions are enabled, but no model is set — pick one to start seeing suggestions.** Select **Choose Model** and choose a model for the selected provider.
- **No API key configured for [provider].** Run **Rath: Set Provider API Key…** for that provider. If **The API key configured for [provider] was rejected.** appears, check the key and provider.
- If editor suggestions do not appear, check that inline completions are enabled, a model is selected, and the current language is not excluded. In manual mode, run **Rath: Trigger Inline Completion**.

See also [Settings reference](/rath-docs/settings-reference/) and [Troubleshooting](/rath-docs/troubleshooting/).
