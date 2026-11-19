---
title: "Inline completions"
description: "Set up suggestions that appear as you type."
lastVerifiedVersion: "1.139.0"
---

Inline completions offer text at your cursor as you work in the editor. Use them to continue a line of code without leaving the document. The suggestion appears as faint “ghost text”; review it before accepting it. Rath may offer no suggestion, and a suggestion can be wrong.

## Before you start

Have an API key from a supported provider. An API key is a secret credential from the service supplying the model; keep it private. Inline completions use a separate provider and model choice from chat, but use the saved key for that provider. A subscription sign-in alone does not supply this key. Provider charges and limits depend on your account and chosen model.

## Turn on and try a suggestion

1. Open Settings and search for `Rath inline completions`. Enable the setting described as **Enable AI-powered inline code completions (ghost text) as you type**. It is off by default.
2. In the same results, find the provider setting described as **OpenAI-compatible provider used for inline completions**. Choose a provider for which you have a key. The default is DeepSeek; other choices include OpenAI, Groq, Fireworks, Together, OpenRouter, Mistral and xAI.
3. Open the Command Palette and choose **Rath: Set Provider API Key…**. Choose **Use an API key**, select that same provider, and enter the key at **Set Rath API Key**.
4. Run **Rath: Choose Inline Completion Model**. The picker shows **Loading models for …** while it retrieves choices. Select a model from the list. No model is selected by default. Choose a model your provider account can use, and check the provider's pricing and limits; the list itself does not rank models by speed or cost.
5. Open an editable code document and begin typing. Pause briefly. If Rath has a suggestion, faint text appears at the cursor. Press **Tab** to accept it, or keep typing to continue without accepting it. You can also run **Accept Inline Suggestion** when a suggestion is visible. Review the resulting text.

<!-- SCREENSHOT: An inline suggestion in the editor -->

For example, begin a comment such as `// Calculate the total price` above a function and see whether the suggestion fits your task. Or start a line such as `const total =` and review the proposed continuation before accepting it. These are text to type in the editor, not messages to send in chat; the actual suggestion varies.

## Control when and where suggestions appear

In Settings, search for `Rath inline completions` to find these controls:

- The trigger mode defaults to **Automatic (while typing)**. Choose **Manual (on demand only)** if you prefer to request suggestions yourself. Place the cursor in an editable document and run **Rath: Trigger Inline Completion**, or press **Alt+\**.
- The delay setting determines how long Rath waits after typing stops before making a request. It defaults to 250 milliseconds. A longer delay gives you more time to type before a request starts.
- The maximum prefix and suffix lines limit the text sent before and after the cursor. Their defaults are 100 and 40 lines respectively. Reducing them sends less surrounding text, but the model has less context. Each count includes the part of the cursor's line on that side.
- The disabled-languages setting lists document language identifiers where Rath does not offer completions. Markdown, plain text and source-control input are excluded by default.

For example, to try suggestions in a Markdown document, open it and run **Rath: Toggle Inline Completions for This Language**. Rath reports **Inline completions are on for markdown.** Run the command again to turn them off for that language. This language switch does not turn on the main feature; complete setup first.

To switch providers, change the provider setting, save a key for the new provider and run **Rath: Choose Inline Completion Model** again. The old model selection is not automatically replaced when you change providers.

## If it doesn't work

- **Rath inline completions are enabled, but no model is set — pick one to start seeing suggestions.** Select **Choose Model**, then pick a model.
- **No API key configured for …** or **The API key configured for … was rejected.** Select **Set API Key**, choose the matching provider and enter a valid key.
- **Couldn't fetch the model list for …** or **… didn't return any models**: check your connection and provider access. The picker also offers **Enter model id manually…** if your provider gives you a model identifier.
- No text appears: check that the feature is enabled, the document's language is allowed, and manual mode has been triggered. Some requests return no text. Rate limits and other request errors can also leave no suggestion; details are recorded in the **Rath Agent** output channel.
- **Rath inline completions stopped working — see the "Rath Agent" output channel for details.** Open that output channel to inspect the error.

See [Connect a model provider](/rath-docs/provider-connections/), [Models and thinking level](/rath-docs/models/) and [Troubleshooting](/rath-docs/troubleshooting/).
