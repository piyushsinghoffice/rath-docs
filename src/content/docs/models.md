---
title: "Models and thinking level"
description: "Choose a model and reasoning effort for your task."
lastVerifiedVersion: "1.139.0"
---

A model generates Rath's answers and decides what actions to take. Choose one for the work and account available to you; use the reasoning control to adjust how much effort a supported model spends on a request. A quick summary may need less effort than a difficult investigation. Results vary, so review the answer and changes regardless of the selection.

Before you start, open a Rath chat and connect a model provider using a subscription or API key. A provider is the company or service supplying the model. The list depends on the providers and access available to you.

## Pick a model

1. When Rath is idle, open the model selector beneath the message box. Choose a model from the available list. The selected model appears in the control.
2. Open **Reasoning effort** and choose a level available for that model. Choices can include **No thinking**, **Minimal thinking**, **Low thinking**, **Medium thinking**, **High thinking**, **Extra-high thinking**, and **Maximum thinking**. Some models offer fewer choices; a model without reasoning support offers **No thinking**.
3. Type your request and select **Send**. The answer comes from the selected model. Changing the selection affects subsequent work; it does not rewrite an earlier answer.
4. To choose the starting model for new chats, open the Command Palette and select **Rath: Choose Default Model…**. Pick from the available models. This choice is for new chats.

You can also use **Rath: Switch to Next Model** or **Rath: Switch to Previous Model** from the Command Palette while the chat tab is active. The commands wrap around the available models. They have no default shortcuts; assign your own in Keyboard Shortcuts.

<!-- SCREENSHOT: Model and reasoning effort controls -->

Which models you see depends on the providers you have connected; the model selector under the message box is always the final word for your account. Rath does not pick a model for you until you choose one, so do not assume everyone starts on the same model.

Higher reasoning effort can take longer and may use more of a provider's allowance. Price, quotas and available models depend on the provider and plan; check your provider's terms before choosing. Rath's code does not establish a universal price or guarantee that a particular model is fastest or best.

## Try it

- For a straightforward task, start with an available model and a lower effort: “Summarize these meeting notes in five bullets.” Check that the summary preserves the decisions.
- For a harder task, try a higher available effort: “Compare these proposals, identify conflicts, and explain the trade-offs.” Allow more time and check its evidence.
- If the result is incomplete, switch models after the turn finishes and ask: “Review your previous answer and identify anything it missed.” Compare both answers with the source material.

## If it doesn't work

If the model or permission control is dimmed while Rath works, its message is **Available again when the agent finishes**. Wait or stop the current work before changing it. **No models are available yet — configure a provider first.** means you need to connect a provider. If you see **Open a Rath chat first, then choose a default model.**, open a chat and repeat the command. For connection and sign-in messages, see [Troubleshooting](/rath-docs/troubleshooting/). For tool access, see [Permission modes](/rath-docs/permissions/).
