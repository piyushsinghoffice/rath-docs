---
title: "Hooks"
description: "Early: run your own commands before or after Rath uses a tool."
lastVerifiedVersion: "1.139.0"
---

> Early: Hooks work, but there is no dedicated setup interface yet.

Hooks run a command automatically when Rath uses a matching tool, such as one that edits a file. Use one to give Rath a recurring reminder after an edit or to stop a tool when a check fails. For a one-off instruction, ask in chat.

Before you start, open a project and make sure you can start a chat. You will edit your personal settings as JSON, a structured text format. Hooks are empty by default and apply across your projects. The `echo` example below works in standard Mac, Linux and Windows command shells.

**Only use commands you understand and trust.** Hook commands run automatically with your account's access and can read, change or send data. The [shell sandbox](/rath-docs/shell-safety/) does not restrict them, and a permission mode does not confine what a hook command does. Hooks can run around allowed tool calls even in restrictive modes; **No tools** does not run them. A project cannot add hooks to your personal settings.

## Add an after-edit reminder

1. Open the Command Palette with **Cmd+Shift+P** on Mac or **Ctrl+Shift+P** on Windows or Linux. Choose **Preferences: Open User Settings (JSON)**.
2. Add the `rath.agent.hooks` entry below inside the existing outer braces. The full example shows what an otherwise empty settings document looks like. If you already have settings, keep them and separate the new entry from its neighbours with commas; do not add a second pair of outer braces.

   ```json
   {
     "rath.agent.hooks": [
       {
         "event": "postToolUse",
         "tools": ["edit", "write"],
         "command": "echo Reminder: check the result of this edit."
       }
     ]
   }
   ```

3. Save the settings and select **New Chat**. Hook changes apply to newly started chats.
4. Choose a **Permission** mode that allows edits, such as **Ask before changes**. Type “Add a short heading to my notes and tell me about any reminder you receive.” Select **Send** and approve the edit if prompted.
5. Check the edit. When Rath calls `edit` or `write`, the hook adds its output to the result Rath reads. Rath may mention the reminder, but its answer depends on the model; an omitted quotation alone does not prove the hook failed.

To remove the reminder, replace the hook list with `[]`, save, and start another **New Chat**.

## Adapt the hook

Each hook needs an `event` and a `command`. `postToolUse` runs after a matching tool, including when the tool reports an error. `preToolUse` runs before it; a failing command stops the tool unless you set `"blocking": false`. Omit `tools` to match every tool. An optional `match` is a regular expression checked against the tool's arguments; an invalid pattern matches nothing. The default `timeoutSeconds` is 30, limited to 1–300 seconds. Output sent to Rath is limited to 4,000 characters.

The command receives three environment variables: `RATH_TOOL_NAME` is the tool name, `RATH_TOOL_INPUT` contains its arguments as JSON, and `RATH_TOOL_FILE` contains the file supplied by the tool, or is empty if none was supplied. A trusted formatter command could use `RATH_TOOL_FILE` to identify the file; the syntax for reading it depends on your command shell.

Try these variations, saving and starting a new chat after each change:

- Change the reminder command to `echo Please check spelling.` Then ask: “Write a short welcome note and check its spelling.” This is a reminder, not a spell-check.
- To test a guard, set `"event": "preToolUse"`, `"tools": ["write"]` and `"command": "exit 1"`. Ask: “Create a new note.” If Rath calls `write`, the hook stops that call. Remove the test guard afterwards.

## If it doesn't work

- If Rath reports **A hook stopped this (exit** followed by a number, a pre-tool command failed. Review the command and its output, correct or remove the hook, save, and start a new chat.
- Rath may receive a message in the form **Hook `your command` failed (exit N):** for a failed after-tool command. Ask Rath to explain the output and check that the command is available on your computer.
- If nothing happens, check the JSON syntax, event, tool names and optional pattern. Start a new chat after saving and choose a permission mode that allows the desired tool. A hook runs only when its matching tool is actually called; an edit request does not guarantee a particular tool call.

See [Chatting with Rath](/rath-docs/chatting/) for starting a task, [Permissions](/rath-docs/permissions/) for tool access, and [Reviewing and undoing changes](/rath-docs/reviewing-changes/) for checking edits.
