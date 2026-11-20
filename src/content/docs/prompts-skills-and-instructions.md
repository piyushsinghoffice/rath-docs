---
title: "Prompts, skills, and project instructions"
description: "Create reusable requests and guidance for Rath."
lastVerifiedVersion: "1.139.0"
---

Save a **prompt** when you want to run the same request by typing a slash command. Create a **skill** for a repeatable procedure Rath can use when it fits a task, or that you can explicitly request. Use **project instructions** for guidance that should apply across new chats in a particular project, such as the tone to use in its documents.

Before you start, connect a provider so you can try your result in chat. Open the project folder if you want to share a prompt or skill with its users, or to create project instructions. Only trust a project if you trust its contents: project resources and instructions are subject to the project's trust decision.

To open the Command Palette, press Command+Shift+P on a Mac or Ctrl+Shift+P elsewhere. It is a searchable list of actions.

## Make a reusable prompt

1. In the Command Palette, choose **Rath: New Prompt (Slash Command)**. At **Name of the slash command, for example review-pr**, enter a short name such as `brief`.
2. If a project is open, answer **Where should it be saved?** Choose **This Project** to share it with people using the project, or **All My Projects** for your own use. Without an open project, Rath saves it for your own projects.
3. In the starter that opens, replace the description with a short explanation, keeping the surrounding lines. Replace the example instructions with your request, then save your changes. For example, write: `Summarize $ARGUMENTS in three short bullets for a new teammate.`
4. Start a new chat and type `/brief the project plan` at the beginning of the message box. Press Enter or select **Send**. Rath receives the saved request with the words after `/brief` in place of `$ARGUMENTS` and responds to it.

You can use `$1` for the first word after the command and `$2` for the second; put a multiword value in quotes to treat it as one. For example, `Compare $1 with $2 in a table` works with `/compare "first draft" "second draft"` if you created a prompt named `compare`. Type `/` at the start of the message box to see available suggestions; inserting a suggestion does not send it.

<!-- SCREENSHOT: Creating a prompt and choosing where to save it -->

## Make a skill

1. Choose **Rath: New Skill** in the Command Palette. At **Name of the skill, for example release-notes**, enter a name such as `meeting-summary`.
2. If asked **Where should it be saved?**, choose **This Project** or **All My Projects**. The starter opens for editing.
3. Replace the description with when Rath should use the skill, retaining the `name` and `description` lines. Below the heading, write the steps to follow and save. For example: “Identify decisions, list action items with owners if stated, and flag unanswered questions. Do not invent owners.”
4. Start a new chat. Send `/skill:meeting-summary Summarize the meeting notes I provide.` Then provide the notes, or include them in that message. Rath receives the skill's instructions with your request. You can also ask: “Use the meeting-summary skill to summarize these notes.” Rath may choose a relevant skill on its own based on its description.

Look for a response organized around your instructions; check it against the original notes. A skill guides Rath's work, so review the result rather than assuming it followed every step.

## Set guidance for a project

1. Open the project folder and choose **Rath: Open Project Instructions (AGENTS.md)** in the Command Palette.
2. Edit the starter that opens, or the existing instructions if the project already has them. Add concise guidance, such as “Write customer-facing text in plain English. Explain abbreviations on first use.” Save your changes.
3. Start a new chat in that project and ask: “Draft a short welcome message for a new customer.” Check that the answer follows your guidance, then refine the instructions if needed. Rath reads these instructions at the start of a chat in the project; a trust decision can prevent project instructions from being loaded.

## If it doesn't work

- **Use lowercase letters, digits and hyphens only.** means the name contains an unsupported character. Try `meeting-summary`, without spaces or capitals.
- **Open a folder first: project instructions live in it.** means there is no open project folder. Open one and run the command again.
- If Rath says an item **already exists; opening it.**, it opened the existing item instead of replacing it. Edit that item or choose a different name.
- If a prompt or skill is missing from suggestions, save your edits and start a new chat in the intended project. Check the project trust decision and the skill's description; a skill needs a nonempty description to be loaded. A response still depends on the model and the material you provide.

See [Slash commands](/rath-docs/slash-commands/) for chat commands, [Chatting](/rath-docs/chatting/) for sending material, and [Packages and plugins](/rath-docs/packages-and-plugins/) for additions made by others.
