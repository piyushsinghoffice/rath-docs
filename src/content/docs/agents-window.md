---
title: "Agents Window"
description: "Start and revisit Rath sessions across folders in the Agents Window."
lastVerifiedVersion: "1.139.0"
---

The Agents Window gives you a dedicated place to start and return to Rath conversations across folders. Reach for it when you want to move between tasks in different projects from one window. Each Rath session contains one conversation and is associated with the folder selected for it.

**Before you start:** Connect a provider and make a model available to Rath. Have the folder for your task in mind; it tells Rath where to look for project material. See [Provider connections](/rath-docs/provider-connections/) if you need to set up access.

## Start a session

1. In the main Rath window, open the Command Palette and run **Open Agents Window**. You can also use the **Open in Agents Window** button in the title bar when it is visible.
2. If you see **What should Rath work on?**, select **Folder** and choose the folder for your task. If a folder was already selected, Rath may open a new session for it directly.
3. In the conversation that opens, check the folder, model and permissions before asking for work. For an inspection without edits, choose **Read-only**; it allows reading and searching. See [Permissions](/rath-docs/permissions/) for the choices.
4. Type your request and choose **Send**. For example: “Summarize the documents in this folder and tell me what needs attention. Don't change anything.”

You should see your request and Rath's response in the conversation. The session appears in the **Sessions** list, where you can select it to return to the conversation. The list can show **Recent** and **Older** groups, or group sessions by workspace. A workspace is the folder in which Rath works.

<!-- SCREENSHOT: Agents Window with a Rath session selected -->

## Move between tasks

1. Choose **New Session** to start another task, and select its folder when prompted.
2. Send a request such as: “Read the project notes and list the open questions.” In another folder, you might ask: “Explain how this project is organized and suggest where I should begin.”
3. Select a session in **Sessions** to return to its conversation. Check its folder and previous messages before sending a follow-up, such as: “Expand on the second open question.”

Use a separate session when the work belongs in a different folder or deserves its own conversation. The Agents Window is a separate window with a session list; ordinary Rath chat tabs live in the main window. Opening the Agents Window can carry over the current folder, but do not assume it opens the current chat tab automatically. Select the session you want in the list and check the conversation before continuing.

## If it doesn't work

- **No models available** or **Unable to load models**: check your provider connection and model setup, then try again. See [Provider connections](/rath-docs/provider-connections/) and [Models](/rath-docs/models/).
- The list shows **No chats**, or the session you expected is missing: check the session list's **Filter Sessions** controls and use **Reset** if filters are hiding it. Look under the appropriate folder or time group too.
- A session shows **Failed** or an error description: open it and read the message. Check that the intended folder and provider are available before trying your request again. See [Troubleshooting](/rath-docs/troubleshooting/).

## Related pages

- [Chatting with Rath](/rath-docs/chatting/) for sending and following a conversation
- [Sessions](/rath-docs/sessions/) for managing conversations in the main window
- [Permissions](/rath-docs/permissions/) for controlling what Rath may do
