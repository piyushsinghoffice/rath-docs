---
title: "Limit shell commands"
description: "Choose where commands can write and whether they can use the network."
lastVerifiedVersion: "1.139.0"
---

Use the shell sandbox when you want extra limits on commands Rath runs while working for you. A shell command is an instruction to your computer, such as running a test or downloading a package. The sandbox can limit where those commands write, and can also block their network access.

Before you start, open the folder you want Rath to work in. The two restricted choices need macOS. Choose a [permission mode](/rath-docs/permissions/) that allows commands when you want Rath to run one; the sandbox adds limits to those permissions.

## Choose a limit

1. Open **Settings** and search for **Rath Agent Sandbox**.
2. Choose one of the following values in the setting:
   - **off** is the default. Shell commands run with your full access. Choose this only when you are comfortable giving commands that access.
   - **files** allows shell commands to write inside the project folder and temporary folders. Choose it when work needs commands but should keep their writes within those areas. Network access remains available.
   - **files-and-network** adds a network block to the same write limits. Choose it for work that can be done without downloading or sending data. Commands that need the network, such as downloading packages or sending changes to a remote repository, will fail.
3. Select **New Chat** to start a new conversation. The chosen setting takes effect in newly started chats; an existing chat does not pick up the change.
4. Ask Rath to do the task and select **Send**. If you use **Ask before changes**, read the proposed command and choose whether to allow it. Watch the conversation for the command's result and Rath's answer.

![The sandbox setting in Settings](../../assets/screenshots/shell-sandbox.png)

When it works, the setting shows your selected value and the new chat can run permitted commands. A command that tries a blocked operation can fail instead of completing that operation. Check the result before assuming the task succeeded.

These limits apply to Rath's shell commands, not its ordinary file edits. They do not make a chat read-only, and **files** does not prevent commands from using the network. To control whether Rath can edit or run commands at all, use the separate **Permission** control.

## Try it

- To work locally while allowing network access, choose **files**, start a new chat, and ask: “Run the project's tests and explain any failures.” Test commands can write in the project and temporary folders.
- To avoid network access during local work, choose **files-and-network**, start a new chat, and ask: “Run the available tests without downloading anything, then summarize the results.” If a test needs the network, it can fail.
- To download a needed package, choose **files**, start a new chat, and ask: “Install the project's dependencies, then tell me what happened.” Network access is allowed, but writes outside the permitted areas can still fail.

## If it doesn't work

If the message begins **The shell sandbox is turned on, but this machine cannot provide it (it needs macOS)**, Rath has refused the command because the protection is unavailable. Use a supported Mac, or choose **off** and start a new chat only if you accept commands running with your full access.

If a command reports **Command exited with code** followed by a number, read its output and ask Rath to explain the failure. This status can have causes other than the sandbox. For a blocked download, check for **files-and-network**; for a blocked write, check whether the destination is outside the project and temporary folders. Change the setting only if the task needs broader access, then start a new chat and try again.

For approval choices, see [Permission modes](/rath-docs/permissions/). For reviewing edits, see [Reviewing and undoing changes](/rath-docs/reviewing-changes/); for other failures, see [Troubleshooting](/rath-docs/troubleshooting/).
