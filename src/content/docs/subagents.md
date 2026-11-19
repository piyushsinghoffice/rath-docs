---
title: "Subagents"
description: "Delegate parts of a task and follow their progress."
lastVerifiedVersion: "1.139.0"
---

Subagents let Rath hand a piece of work to another agent and bring its result back to your chat. This can help when a request has independent parts, such as examining several topics, or when one piece of work should build on an earlier result. You can ask for delegation, but Rath chooses how to carry out your request; a subagent card appears only if it actually delegates.

Before you start, open a Rath chat and choose a permission mode appropriate for the work. **Read-only**, **Plan**, and **No tools** do not make delegation available. **Full access** permits tools that can change your work and run commands, so use it only when you are comfortable with that access. See [Permission modes](/rath-docs/permissions/) before deciding. A subagent can have its own tool limits; do not assume that asking for a review alone prevents changes. For **Ask before changes**, the approval experience for delegated work has not been established here.

## Delegate and follow the work

1. In the main chat, write the outcome you want and identify the parts you would like delegated. Include any boundaries, such as “report findings before making changes.” Select **Send**.
2. If Rath delegates, look for the **Subagents** panel in the conversation. Each card represents a delegated task. Its text can show the task and recent activity or a result; a spinning indicator means it is running. The panel can show counts or a summary of work performed.
3. Select a card to open its separate subagent tab. Read the task and the conversation there to see what that agent was asked to do and what it reported. The tab is read-only: return to the main chat to send Rath a message.
4. Check the tab header for **Running**, **Completed**, **Failed**, **Queued**, or **Waiting**. It can also show the model and elapsed time. A running transcript can update as work continues. Return to the main chat tab to follow the overall answer.
5. Read Rath's answer and check any changes before using them. A completed card tells you that the delegated run ended; it does not guarantee the result is correct. See [Reviewing and undoing changes](/rath-docs/reviewing-changes/).

<!-- SCREENSHOT: Subagent activity and its status in a chat -->

When several tasks are independent, Rath can run them together. It can also arrange work in sequence, passing one result to the next. In that case **Waiting for previous subagent** means a later task has not started yet; inspect the earlier card for progress.

## Try it

- For an overview, ask: “Use subagents to examine the project documentation and summarize the main topics. Report findings before making changes.” Open each card to see what was examined, then compare the summaries in the main chat.
- For a review, ask: “Delegate a review of the recent changes. List possible problems and explain the evidence; don't make changes.” Read the subagent's findings and ask Rath to clarify anything you cannot verify.
- For a sequence, ask: “Have one subagent investigate how these notes are organized, then have another suggest a clearer structure. Show me the proposal before changing anything.” Watch for the second card to wait for the first.

## If it doesn't work

- **No card appears:** Check **Permission**. Delegation is unavailable in **Read-only**, **Plan**, and **No tools**. If you need those limits, ask Rath to do the investigation in the main chat instead. If you choose **Full access**, understand the access it grants first.
- **Waiting for previous subagent** or **Waiting for subagent** remains visible: open the earlier or running card to inspect its activity. Some work takes time. A subagent is stopped after 15 minutes; a failed run can report **Subagent timed out after 900s and was stopped.** Return to the main chat and ask Rath to retry a smaller part or explain what it completed.
- **Failed** or **No subagent result was returned.**: inspect the card and the main chat for details. Ask Rath to explain the failure or retry with a narrower task. If you need to interrupt the current work, use **Stop** in the main chat; then tell Rath what to do next.
- **Loading the full transcript…** can appear while the tab loads. **Transcript not available** means the full record could not be shown. Return to the main chat and use the card and Rath's response for the available result; ask for a fresh attempt if you need more detail.

For more on the conversation controls, see [Chatting with Rath](/rath-docs/chatting/) and [Permission modes](/rath-docs/permissions/).
