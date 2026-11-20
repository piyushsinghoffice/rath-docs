---
title: "Packages and plugins"
description: "Early: review, install and manage packages and use plugin panels."
lastVerifiedVersion: "1.139.0"
---

> This feature is new; if something behaves differently from this page, tell us.

Packages can add tools, skills, prompts and themes to Rath. A plugin can also show information or controls beside a chat. Use packages when you trust a provider and want its extra capabilities; use the package list to pause or remove one you no longer need.

Before you start, get a package source from a provider you trust. A source tells Rath where to find the package: it can be an npm package name such as `npm:package-name`, a Git repository address such as `git:github.com/user/repo`, or a folder on your computer. Ask the provider for the exact source. For a project-only installation, open the project and trust it.

## Review and install

1. Open the Command Palette with **Ctrl+Shift+P** (Windows or Linux) or **Cmd+Shift+P** (Mac), and choose **Rath: Manage Packages…**. The **Packages** page opens. Under **Installed** you may see **No packages installed yet.**
2. Enter the source supplied by the package provider in **Package source**, then select **Review Package…**. Rath reads it without installing it.
3. On **Install …?**, check **What it adds** and **What runs when it is installed**. A package can run code with full access to your computer: it can read and change files and use the network. Dependencies can run installation scripts too. Removing the package later does not undo what an installation script has already done. Select **Cancel** if you do not trust or understand the source.
4. Under **Install for**, choose **All my projects** or **This project only (the project must be trusted)**. The latter requires an open folder. Select **Install**.
5. Look for **Installed …** and the package under **Installed**. Select **Restart Idle Chats** to load the change in idle open chats. A chat in the middle of a response is left alone and loads the change when it restarts.

<!-- SCREENSHOT: Packages review showing scope, additions and install warning -->

For example, after installing a trusted package that supplies a review skill, start a new chat and ask: “Review my draft using the review skill and explain your suggestions.” The result depends on what that particular package supplies and how Rath responds; installation alone does not guarantee a particular answer.

## Pause, resume or remove

1. Open **Rath: Manage Packages…** and find the package under **Installed**. Its badge says **This project** or **All projects**.
2. Clear the checkbox beside it to turn it off. Look for **Turned … off.** and the **Off** badge. The package stays installed. Select the checkbox again to turn it on; look for **Turned … on.**
3. To uninstall instead, select **Remove**, then confirm **Remove**. Look for **Removed …**. Open chats keep using the package until they restart; use **Restart Idle Chats** for idle chats.

For instance, pause a package while comparing your usual workflow, then ask: “Summarize this document in three points.” Turn it back on when you need its additions again. To stop using an unfamiliar package altogether, remove it and restart idle chats.

## Use a plugin panel

1. Open a chat using a plugin that provides a panel. Some plugins show text above or below the message box; others show a named button beside its controls.
2. If the plugin provides a button with an arrow, select it. Its tooltip says **Open … in its own tab**. The panel opens in a tab with the plugin's title and any controls it supplies.
3. Use the controls offered by that plugin. Their names and results depend on the plugin. For example, after installing a package with a status panel, ask: “Help me with this project,” and check the panel for information the plugin chooses to show.

## What to know

A panel appears only while its plugin displays it in its chat; its tab is not restored after closing and reopening Rath.

Some packages offer **Update**; **Update All** is available when there are updateable packages. Updates that add code require individual review. Read **New since the installed version** before approving an update.

## If it doesn't work

- **Enter where the package comes from.** means the source is empty. Enter the source from the provider. A source must be one line and cannot start with a dash.
- **Could not read that package:** means the review failed. Check the source and the detail after the message, then try again. **Could not install it:** similarly includes the installation error; check that detail before retrying.
- **Could not read the installed packages:** means the list could not be read; use the detail shown to investigate. If the page says **It does not add anything the agent can load.**, check that you were given the intended package.
- **This panel is not showing right now. It appears here when the plugin draws it in its chat.** Return to that chat and check that the package is on. A plugin may stop displaying its panel, or its chat may have closed.

See [Permissions](/rath-docs/permissions/), [Customizing Rath](/rath-docs/customizing/) and [Troubleshooting](/rath-docs/troubleshooting/).
