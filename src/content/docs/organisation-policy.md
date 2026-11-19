---
title: "Organisation policy"
description: "Early: find out which Rath customizations your organisation restricts."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

Your organisation can set a managed policy that limits some ways Rath is customized. Use the policy report when a personal appearance change, extension, or sync destination does not behave as expected. You can see the restrictions Rath has read and share the result with your administrator when you need help.

Before you start, open Rath. You do not need to start a chat or change a setting to check the policy.

## Check your organisation's restrictions

1. Open the command palette and search for **Rath: Show What My Organization Restricts**.
2. Select **Rath: Show What My Organization Restricts**. Rath reads the policy and displays a notification.
3. If restrictions are present, the notification begins **Your organization restricts Rath:** and lists them. It may include a reason from your organisation in parentheses. Read the relevant line and contact your administrator if you need a change.
4. If there are no restrictions to report, the notification says **Your organization does not restrict anything in Rath.** This report concerns managed policy; your own settings and other safeguards can still limit a feature.

## What an administrator can restrict

The report can describe a maximum level for changes Rath makes to its appearance. An administrator can also prevent personal styles, components, tool-result displays and quick actions from loading, or prevent your components from replacing Rath's built-in ones. A component is a piece of the interface; some components contain instructions that can run, and those can be restricted separately.

An administrator can prevent extensions inside a project from loading, prevent Rath from loading an extension it wrote, or make Rath ignore the Rath-specific contribution of installed extensions. An extension adds capabilities to Rath. Policy can also turn off syncing your interface customizations or limit sync to approved destinations.

The policy sets an upper limit: choosing a more permissive personal setting cannot override it. You can still choose a more restrictive setting. If your task needs a policy change, ask your administrator rather than repeatedly changing your own settings.

## Try these situations

- **Your personalized appearance has disappeared.** Run the report and look for **Your own stylesheets, components, tool renderers and quick actions are not loaded.** The chat may also show **Your organization has turned customizations off.** Give that information to your administrator. You can continue chatting; for example, type “Summarize my meeting notes.”
- **You want Rath to change its appearance.** Run the report first. If it states a maximum customization level, share that line when requesting access. You might ask Rath, “Make the interface easier to read.” The policy can limit what Rath is allowed to change, and the request alone does not change that limit.
- **Your interface customizations won't sync.** Run the report. **Syncing your UI files is turned off.** means policy disables that sync; **Syncing is limited to approved remotes** means the destination must match an approved one. Ask your administrator which destination to use. Meanwhile, you can ask Rath, “Help me organize these notes,” without relying on sync.

## What to know

Rath checks for policy changes while it is open. The report describes the policy it reads at the time you run the command. A restriction does not always produce its own visible warning; check the report when something seems unavailable. Some policy-related notices and variations have not been confirmed in a live window.

## If it doesn't work

- If the report says nothing is restricted but a customization is still unavailable, check your own settings and permission mode. A policy with an unreadable or unrecognized entry can also leave that entry out of the report; ask your administrator to check the policy if you expected a restriction.
- If Rath reports **This change is turned off in Settings.**, check your customization setting and the policy report. A policy limit can contribute to the effective setting.
- If you see **Your organization has turned customizations off.**, the notice has no **Turn On** action for that policy restriction. Contact your administrator if you need it changed.

See [Customizing Rath](/rath-docs/customizing/), [Permission modes](/rath-docs/permissions/), and [Packages and plugins](/rath-docs/packages-and-plugins/) for related controls.
