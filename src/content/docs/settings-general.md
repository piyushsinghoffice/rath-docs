---
title: "General settings"
description: "Choose starting models and suggestions."
lastVerifiedVersion: "1.139.0"
---

Use **AI > General** in Settings to choose a starting model and control suggestions as you type. A provider is the service supplying a model. Suggestions require a provider key and can incur charges.

| Setting | What it changes and when to use it | Default and allowed values |
| --- | --- | --- |
| Default Model: Provider | Sets the provider for new chats. Choose it together with the model using **Rath: Choose Default Model…**. Blank uses Rath's own default. | Blank; provider name as text |
| Default Model: Id | Sets the model for new chats. Use the model picker to choose an available one. | Blank; model identifier as text |
| Prompt Suggestions: Enabled | Continues your message with suggested text as you type. Turn on for writing help; it calls a paid API. | Off; on or off |
| Prompt Suggestions: Provider | Selects the suggestion provider. | `deepseek`; `openai`, `deepseek`, `groq`, `together`, `fireworks`, `openrouter`, `mistral`, `xai` |
| Prompt Suggestions: Model | Selects its model. Suggestions stay off until a model is set. | Blank; model identifier as text |
| Prompt Suggestions: Debounce Ms | Sets the pause after typing before requesting a suggestion. Increase it to wait longer. | 400 milliseconds; number at least 0 |
| Inline Completions: Enabled | Enables suggestions in the editor. | Off; on or off |
| Inline Completions: Disabled Languages | Lists languages where editor suggestions are disabled. Change it to include or exclude a language. | `markdown`, `plaintext`, `scminput`; list of text values |
| Inline Completions: Trigger Mode | Chooses automatic or manual editor suggestions. Use manual for more control. | `automatic`; `automatic`, `manual` |
| Inline Completions: Provider | Selects the provider for editor suggestions. | `deepseek`; `openai`, `deepseek`, `groq`, `fireworks`, `together`, `openrouter`, `mistral`, `xai` |
| Inline Completions: Model | Selects its model. | Blank; model identifier as text |
| Inline Completions: Max Prefix Lines | Limits the lines before the cursor sent as context. Reduce it to send less surrounding text. | 100; number at least 0 |
| Inline Completions: Max Suffix Lines | Limits the lines after the cursor sent as context. | 40; number at least 0 |
| Inline Completions: Debounce Ms | Sets the delay before an automatic suggestion. | 250 milliseconds; number at least 0 |

For example, select a default model if you usually start chats with the same one, or choose manual inline completions if automatic suggestions distract you. If suggestions do not appear, check that the feature is enabled, a model and provider are selected, and the provider has a key. See [Models](/rath-docs/models/) and [Inline completions](/rath-docs/inline-completions/).
