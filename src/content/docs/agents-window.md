---
title: "Agents Window"
description: "Start and revisit Rath sessions across folders in the Agents Window."
lastVerifiedVersion: "1.139.0"
---

The Agents Window gives you a dedicated place to start and return to Rath sessions across folders. Use it to move between tasks in different projects from one window. Each session contains a conversation associated with its selected folder.

**Before you start:** Connect a provider and make a model available to Rath. Have the folder for your task in mind; it tells Rath where to look for project material. See [Provider connections](/rath-docs/provider-connections/) if you need to set up access.

## Start a session

1. In the main Rath window, open the Command Palette with `Ctrl+Shift+P` (Windows or Linux) or `Cmd+Shift+P` (Mac), and run **Chat: Open Agents Window**. You can also use **Open in Agents** in the title bar when it is visible.
2. If you see **What should Rath work on?**, select **Folder** and choose the folder for your task. If a folder is already supplied or restored, Rath opens a new session for it directly. Check the folder before sending a request.
3. In the conversation that opens, check the folder, model and permissions before asking for work. For an inspection without edits, choose **Read-only**; it allows reading and searching. See [Permissions](/rath-docs/permissions/) for the choices.
4. Type your request and choose **Send**. For example: “Summarize the documents in this folder and tell me what needs attention. Don't change anything.”

You should see your request and Rath's response in the conversation. The session appears in the **Sessions** list, where you can select it to return to the conversation. Depending on the grouping selected, the list shows sessions by folder or in **Recent** and **Older** groups.

<!-- SCREENSHOT: Agents Window with a Rath session selected -->

## Move between tasks

1. Choose **New Session** to start another task. Check the selected folder; if prompted, choose the folder for the task.
2. Send a request such as: “Read the project notes and list the open questions.” In another folder, you might ask: “Explain how this project is organized and suggest where I should begin.”
3. Select a session in **Sessions** to return to its conversation. Check its folder and previous messages before sending a follow-up, such as: “Expand on the second open question.”

Use a separate session when the work belongs in a different folder or deserves its own conversation. The Agents Window is separate from the main window. Opening it from a Rath chat does not transfer the current chat tab; the current folder is passed to the Agents Window. Select the session you want in the list and check the conversation before continuing.

## If it doesn't work

- **No models available** or **Unable to load models**: check your provider connection and model setup, then try again. See [Provider connections](/rath-docs/provider-connections/) and [Models](/rath-docs/models/).
- The list shows **No chats**, or the session you expected is missing: check the session list's **Filter Sessions** controls for filters that hide it. Look under the appropriate folder or time group too, and expand collapsed groups.
- A session shows **Failed** or an error description: open it and read the message. Check that the intended folder and provider are available before trying your request again. See [Troubleshooting](/rath-docs/troubleshooting/).

## Related pages

- [Chatting with Rath](/rath-docs/chatting/) for sending and following a conversation
- [Sessions](/rath-docs/sessions/) for managing conversations in the main window
- [Permissions](/rath-docs/permissions/) for controlling what Rath may do
