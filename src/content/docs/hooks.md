---
title: "Hooks"
description: "Early: run your own commands before or after Rath uses a tool."
lastVerifiedVersion: "1.139.0"
---

> Early: Hooks work, but there is no dedicated setup interface yet.

Hooks let you run a command automatically when Rath uses a tool. A tool is an action Rath can take, such as reading or editing a file. For example, you can add a reminder after an edit or stop an action with a check that fails. Use a hook when you need the same check repeatedly; for an occasional request, simply ask Rath in chat.

Before you start, open a project and make sure you can start a chat. The example below uses `printf`, available in a Mac or Linux command shell. It changes your personal settings using JSON, a structured way to write settings. Hooks are empty by default and apply across your projects.

## Try an after-edit reminder

1. Open the command palette, choose **Open User Settings (JSON)**, and find the outer pair of braces. Add the following entry inside them. If there are already entries, separate this entry from the preceding one with a comma; keep the other settings intact.

   ```json
   "rath.agent.hooks": [
     {
       "event": "postToolUse",
       "tools": ["edit", "write"],
       "command": "printf 'Reminder: check the result of this edit.'"
     }
   ]
   ```

2. Save your settings. Select **New Chat**: changes to hooks take effect in newly started chats.
3. Choose a **Permission** mode that allows edits. Ask: “Add a short heading to my notes and tell me about any reminder you receive.” Select **Send** and approve the edit if prompted.
4. When Rath uses an `edit` or `write` tool, the command runs afterwards. Its output is added to the tool result for Rath to read. Rath may mention the reminder in its answer; the model decides what to say, so a missing quotation alone does not prove the hook failed. Check the edit as well.

To remove the reminder, replace the hook list with `[]`, save, and start another **New Chat**. Keep the list if you want to add more hooks: separate entries with commas.

## Choose when a command runs

Each entry needs `event` and `command`. `postToolUse` runs after the matching tool and sends its output to Rath, including when the tool returned an error. `preToolUse` runs first: a failing command normally stops the tool. Set `"blocking": false` on a pre-tool hook to allow the tool to continue even if that command fails.

Use `tools` to limit an entry to named tools, for example `["edit", "write"]`; leave it out to match every tool. An optional `match` is a regular expression, a text pattern checked against the tool's arguments. An invalid pattern matches nothing. `timeoutSeconds` limits how long the command can run: the default is 30 seconds, with values limited to 1–300 seconds. Hook output sent to Rath is limited to 4,000 characters.

For example:

- Keep the reminder above and ask: “Update the introduction and report any reminders.” It applies only if Rath actually calls a matching tool.
- Replace the command with `printf 'Please check spelling.'` and ask: “Write a short welcome note and check its spelling.” The output is a reminder, not a spell-check itself.
- For a guard, use `"event": "preToolUse"`, `"tools": ["write"]`, and `"command": "exit 1"`. Ask: “Create a new note.” If Rath calls `write`, the failing command stops that call. Remove this test guard afterwards and start a new chat.

## Safety

A hook command runs automatically with your account's access. It can read, change or send data, so use only commands you understand and trust. The shell sandbox described in [Limit shell commands](/rath-docs/shell-safety/) applies to Rath's shell tool; do not rely on it to contain hook commands. Personal settings control these hooks; a project cannot add them through its own settings. Hooks are not a substitute for choosing an appropriate [permission mode](/rath-docs/permissions/).

## If it doesn't work

- If a tool is stopped with **A hook stopped this (exit** followed by a number, the pre-tool command failed. Review its command and output, correct or remove the hook, save, and start a new chat.
- A post-tool failure is added to the tool result as **Hook `command` failed (exit** followed by a number. Ask Rath to explain the output and check that the command is available on your computer.
- If nothing happens, check the JSON syntax, `event`, tool names and optional pattern. Start a new chat after saving, and ensure the selected permission mode allows the tool. A hook runs only when its matching tool is actually called; asking for an edit does not guarantee a particular tool call.

See [Chatting with Rath](/rath-docs/chatting/) for starting a task and [Reviewing and undoing changes](/rath-docs/reviewing-changes/) for checking edits.
