---
title: "Permission modes"
description: "Choose whether Rath can look, plan, or make changes."
lastVerifiedVersion: "1.139.0"
---

Choose a permission mode before asking Rath to work. It determines which tools Rath can use: tools are the actions it takes to inspect or change your work. Use a restrictive mode while you are exploring an unfamiliar folder, and give more access when you are ready for changes.

Before you start, open the folder and a Rath chat. The choices below are in the main chat; the [Agents Window](/rath-docs/agents-window/) offers **Read-only**, **Full access**, and **No tools**.

## Choose access for the task

1. While Rath is idle, open **Permission** beneath the message box. The current choice appears on the control; **Ask before changes** can appear as **Ask first**.
2. Choose the access you want:
   - **Read-only** lets Rath read files and search. Choose it to investigate without editing.
   - **Plan** lets Rath research and write a plan without changing your work. Use it when you want to decide on an approach first.
   - **Ask before changes** lets reads proceed, but edits and commands wait for your decision. A command is an instruction run on your computer.
   - **Full access** allows all configured tools, including editing and running commands. Use it when you are ready for Rath to carry out the work.
   - **No tools** disables tool use. Choose it for a conversation that does not require Rath to inspect the folder.
3. Type your request and select **Send**. The selected mode remains visible beneath the message box. Watch the conversation for activity and the answer.
4. With **Ask before changes**, read the proposed action when **Allow Rath to use …?** appears. Select **Allow** for that action, **Deny** to refuse it, or **Always Allow … in This Chat** to allow that tool in this chat. Choose the last option only if you are comfortable with later uses of the same tool.
5. Review any changes before relying on them. See [Reviewing and undoing changes](/rath-docs/reviewing-changes/).

<!-- SCREENSHOT: Permission selector showing the available modes -->

## Try it

- To inspect: choose **Read-only** and ask, “Summarize the documents in this folder and identify anything that needs my attention.” Expect an answer, not edits.
- To decide first: choose **Plan** and ask, “Plan how to organize these notes by topic. Explain what you would change.” Read the plan before deciding whether to proceed.
- To approve individual changes: choose **Ask before changes** and ask, “Fix the spelling in my meeting notes.” Read each proposed action before allowing or denying it.

## If it doesn't work

The permission control is locked while Rath works and says **Available again when the agent finishes**. Wait for the answer or stop the current work, then change the mode. If Rath cannot edit, check that you did not select **Read-only**, **Plan**, or **No tools**. If you denied an action, tell Rath how you want to proceed; do not approve a request you do not understand.

Permissions are separate from the additional limits on commands described in [Limit shell commands](/rath-docs/shell-safety/). For model access, see [Models and thinking level](/rath-docs/models/).
