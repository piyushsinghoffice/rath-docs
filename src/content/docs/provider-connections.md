---
title: "Connect a model provider"
description: "Sign in, add an API key, and remove a connection."
lastVerifiedVersion: "1.139.0"
---

Connect Rath to a model provider—the service that supplies the AI model—before asking it to answer questions or work on a project. Depending on the provider, you can use an eligible subscription or an API key. A key is a secret credential supplied by the provider; keep it private. Provider charges and limits depend on your account and plan.

## Before you start

Have your provider account ready. For an API-key connection, obtain a key from that provider. Open a Rath chat first if you want to connect or disconnect a subscription.

## Connect a subscription

1. Open the Command Palette and choose **Rath: Sign In with a Subscription (Anthropic, GitHub Copilot, ChatGPT)…**.
2. At **Select a subscription to sign in with**, choose your provider.
3. Follow the sign-in prompts for that provider. Complete any authorization it requests.
4. Return to the chat, select an available model and send a short message such as “Summarize this project in three sentences.”

When the connection and model are usable, Rath can answer in the chat. The available choices depend on the account and provider. You can also start with **Rath: Set Provider API Key…** and choose **Use a subscription**.

## Connect with a key

1. Open the Command Palette and choose **Rath: Set Provider API Key…**.
2. Choose **Use an API key**, then select your provider.
3. At **Set Rath API Key**, enter the key. Rath stores it encrypted in its secret storage.
4. Select a model for that provider in your chat and try a request, such as “Explain this document in plain language.”

<!-- SCREENSHOT: Provider sign-in choice and API key prompt -->

To replace a key, run the same command again for that provider. To remove one, choose **Rath: Clear Provider API Key…** and select the configured provider. To disconnect a subscription, open a chat and choose **Rath: Sign Out of a Subscription…**, then select the account. Rath displays **Signed out of {provider}.** A subscription and an API key are separate connections; removing one does not remove the other.

For example, use a subscription when your provider offers that sign-in route; use a key when your organisation has supplied one for API use. If you are switching accounts, remove the old connection and connect the new one, then ask “What are the main decisions in these notes?” to check that the chosen model responds.

## If it doesn't work

- **No active Rath chat to sign in through — open a chat first.** Open a chat and repeat subscription sign-in or sign-out.
- **No subscription providers are available.** No subscription choices were returned; check your provider access or use an available API-key connection.
- **API key is required.** Enter a nonempty key. If a provider rejects it, check the key and the provider account before replacing it.
- **No API keys are configured yet.** There is no saved key to clear. **No providers signed in** means there is no subscription to sign out of.
- If a model says its provider is not signed in, connect that provider or choose another available model.

See [Models and thinking level](/rath-docs/models/), [Getting started](/rath-docs/getting-started/) and [Troubleshooting](/rath-docs/troubleshooting/).
