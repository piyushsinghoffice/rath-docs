---
title: "My stylesheets and UI sync"
description: "Early: inspect, pause, restore, and sync your personal Rath interface."
lastVerifiedVersion: "1.139.0"
---

*Early: these customization controls are still being checked across different setups.*

Use these commands to inspect your personal look, temporarily switch it off, return to an earlier version, or share your interface changes between computers. A stylesheet is a set of visual rules; you can ask Rath to make changes to it instead of writing those rules yourself. For choosing themes and making appearance requests, see [Changing how Rath looks](/rath-docs/appearance-and-themes/). For widgets and other additions, see [Making Rath yours](/rath-docs/customizing/).

**Before you start:** Open the Command Palette with Command+Shift+P on a Mac or Ctrl+Shift+P elsewhere. To ask Rath for changes, connect a provider and check the access instructions in the appearance guide. Restoring and syncing require Git, a tool that keeps versions of changes. Sync also needs a private Git repository you own and access to it from each computer.

## Inspect or pause your look

1. In the Command Palette, choose **Rath: Open My Stylesheet**. Your personal stylesheet opens in the editor; Rath creates one if needed. You can inspect it or ask Rath to explain it: “Explain my stylesheet in plain language.”
2. To compare Rath without your customizations, choose **Rath: Turn Off My Stylesheets**. Your styles and other personal additions, including widgets and quick actions, are switched off.
3. Choose **Rath: Turn On My Stylesheets** to bring them back. Check the part of the window you changed. If a style obscured something, ask: “Adjust my custom styles so the chat controls remain visible,” then try turning them on again.
4. For a list of detected additions and problems, choose **Rath: Show What My UI Loaded**. The picker shows names with check or error marks; an error can include details. This list covers components and tool renderers, so it is not a complete stylesheet check.

<!-- SCREENSHOT: The loaded UI picker showing a component and a reported problem -->

For example, after asking “Make the chat background less bright,” compare the result with styles off and on. If the result is not useful, ask Rath to revise it or restore an earlier version.

## Restore a previous version

1. Choose **Rath: Restore an Earlier Version of My UI**. The picker says **Choose the version to go back to (the present state is saved first)** and shows saved versions with their ages.
2. Select the version you want. Rath reports **Your UI files are back as they were. The change shows within a few seconds.** Check your interface to see whether it is the look you wanted.
3. If you chose the wrong version, open the command again and choose another saved version. The present state is saved before a restore, so you can return to it.

This restores the saved personal interface changes together, not just one visual rule. For example, use it after several experimental changes when you want to return to the earlier combination.

## Sync your interface

1. Choose **Rath: Set Up Sync for My UI**. In **Sync My UI Files**, enter the address of your private repository and submit it. Rath attempts a sync immediately. Use the same repository on another computer to bring the changes together.
2. Look for **Synced.** or **Synced: the changes from the other computer were merged in.** Check the resulting interface on each computer. Rath syncs your stylesheet, components, renderers and quick actions; the setup prompt says keys and chats are not included.
3. To sync again, choose **Rath: Sync My UI Now**. Automatic sync is off by default; if enabled in **Settings** under **Rath UI Sync**, it runs about 30 seconds after changes.

If both computers changed the same item, the side with the later change wins a conflict; histories are kept. Inspect the result and use the restore command if you need an earlier version.

## Manage an extension Rath wrote

An extension adds capabilities to Rath. Choose **Rath: Manage Extensions the Agent Wrote**, then select an extension under **Choose an extension the agent wrote**. Choose **Disable** to stop using it, or **Remove** to uninstall it. Rath confirms the action; removed extension files remain on your computer. To enable a disabled extension again, use the **Extensions** view.

## If it doesn't work

- **There is no saved version of your UI files yet.** means the picker has no history to offer. Git may be unavailable; install it and make a change before trying again. **Could not restore that version (is git installed?).** also points to Git as a possible cause.
- **No remote is set up yet.** means you should run **Rath: Set Up Sync for My UI** first. If the address is rejected, check its format and any organization restrictions. **Could not sync:** may indicate a connection or access problem; check access to the private repository and try again. **The two versions could not be merged. Nothing was changed.** means the merge did not complete.
- **Your custom look is paused. Your widgets still work.** can appear if styles hide an essential control. Fix the style and choose **Turn On**. Organization restrictions may also prevent customizations or sync; see [Organisation policy](/rath-docs/organisation-policy/).
- **The agent has not written any extension that is loaded.** means there is nothing in that management list to select.

See [Changing how Rath looks](/rath-docs/appearance-and-themes/), [Making Rath yours](/rath-docs/customizing/), and the [Command palette reference](/rath-docs/commands-reference/) for related tasks.
