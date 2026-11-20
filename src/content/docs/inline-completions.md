---
title: "Inline completions"
description: "Set up suggestions that appear as you type."
lastVerifiedVersion: "1.139.0"
---

Inline completions suggest text at your cursor as you work in an editable document. They are useful when writing code, but you can also enable them for other kinds of text. A suggestion appears as faint “ghost text”; check that it fits your task before accepting it.

## Before you start

Have an API key from a supported provider. An API key is a secret credential from the service supplying the model; keep it private. Inline completions use a separate provider and model choice from chat, but use the saved key for that provider. A subscription sign-in alone does not supply this key. Provider charges and limits depend on your account and chosen model.

When a suggestion is requested, Rath sends surrounding document text to the selected provider. By default this includes up to 100 lines before and 40 lines after the cursor, including the portions of the current line. Avoid using it with text you do not want to share, or reduce these limits in Settings.

## Turn on and try a suggestion

1. Open **Settings**, search for `rath.agent.inlineCompletions.enabled` and turn it on. Inline completions are off by default.
2. Search Settings for `rath.agent.inlineCompletions.provider` and choose a provider for which you have a key. The default is DeepSeek; the other choices are OpenAI, Groq, Fireworks, Together, OpenRouter, Mistral and xAI. Anthropic and Gemini are not provider choices for this feature.
3. Open the Command Palette and choose **Rath: Set Provider API Key…**. Choose **Use an API key**, select that same provider, and enter the key at **Set Rath API Key**.
4. Run **Rath: Choose Inline Completion Model**. The picker shows **Loading models for …** while it retrieves choices. Select a model from the list. No model is selected by default. Choose a model your provider account can use, and check the provider's pricing and limits; the list itself does not rank models by speed or cost.
5. Open an editable document and begin typing. Pause briefly. If Rath has a suggestion, faint text appears at the cursor. Press **Tab** to accept it with the default keyboard shortcut, or keep typing to continue without accepting it. You can also run **Accept Inline Suggestion** when a suggestion is visible. Check the resulting text for mistakes.

<!-- SCREENSHOT: An inline suggestion in the editor -->

For example, type `// Calculate the total price` above a function, or start a line with `const total =`. In a Markdown document, after enabling that language as described below, try `## Meeting notes`. These are starting text for the document, not messages to send in chat; the actual suggestion varies.

## Control when and where suggestions appear

In Settings, search for `Rath inline completions` to find these controls:

- Search for `rath.agent.inlineCompletions.triggerMode`. It defaults to **Automatic (while typing)**. Choose **Manual (on demand only)** if you prefer to request suggestions yourself. Place the cursor in an editable document and run **Rath: Trigger Inline Completion**, or press **Alt+\**.
- Search for `rath.agent.inlineCompletions.debounceMs` to change the delay after typing stops. It defaults to 250 milliseconds.
- Search for `rath.agent.inlineCompletions.maxPrefixLines` and `rath.agent.inlineCompletions.maxSuffixLines` to limit text sent before and after the cursor. Reducing them sends less surrounding text, but gives the model less context.
- Search for `rath.agent.inlineCompletions.disabledLanguages` to see the language identifiers where Rath does not offer completions. Markdown, plain text and source-control input are excluded by default.

For example, to try suggestions in a Markdown document, open it and run **Rath: Toggle Inline Completions for This Language**. Rath reports **Inline completions are on for markdown.** Run the command again to turn them off for that language. This language switch does not turn on the main feature; complete setup first.

To switch providers, change the provider setting, save a key for the new provider and run **Rath: Choose Inline Completion Model** again. The old model selection is not automatically replaced when you change providers.

## If it doesn't work

- **Rath inline completions are enabled, but no model is set — pick one to start seeing suggestions.** Select **Choose Model**, then pick a model.
- **No API key configured for …** or **The API key configured for … was rejected.** Select **Set API Key**, choose the matching provider and enter a valid key.
- **Couldn't fetch the model list for …** or **… didn't return any models**: check your connection and provider access. The picker also offers **Enter model id manually…** if your provider gives you a model identifier.
- No text appears: check that the feature is enabled, the document's language is allowed, and manual mode has been triggered. Some requests return no text. Rate limits and other request errors can also leave no suggestion; details are recorded in the **Rath Agent** output channel.
- **Rath inline completions stopped working — see the "Rath Agent" output channel for details.** Open that output channel to inspect the error.

See [Connect a model provider](/rath-docs/provider-connections/), [Models and thinking level](/rath-docs/models/) and [Troubleshooting](/rath-docs/troubleshooting/).
