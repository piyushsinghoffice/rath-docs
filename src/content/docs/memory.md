---
title: "Memory"
description: "Save, inspect and remove notes that can help in later chats."
lastVerifiedVersion: "1.139.0"
---

Memory helps Rath carry useful facts from one chat into another. Use it for a lasting project decision or a preference you do not want to repeat. Saved notes are separate from the conversation: Rath receives a list of notes and can read a relevant one when needed. It does not remember every detail of every chat.

Before you start, open a folder and a Rath chat. For project notes, the folder must be trusted. Choose **Full access** under **Permission** so Rath can use its memory tool. Memory is enabled by default. **Read-only**, **Plan**, and **No tools** do not provide the memory tool. See [Permission modes](/rath-docs/permissions/) before choosing full access.

## Save and check a note

1. In the chat, type: “Remember for this project: use plain language in the meeting summaries.” Select **Send**. In a trusted folder, Rath can save a short project note. The model decides whether to use memory, so ask it to list the saved notes to check the result.
2. Ask: “List my project and user memory notes.” The list can contain a title and a short description for each note. If there are no notes, Rath can report an empty list.
3. Ask: “Read the project note about meeting summaries and show me its contents.” Check the actual text, not just the title. Tell Rath to update the note if it is wrong or outdated, then ask to read it again.
4. Select **New Chat** and ask: “What do you remember about how I want meeting summaries written?” Rath can use the saved note in the later chat. Its response depends on the model, so ask it to read the note if you need to check the source.

Project notes apply to the current trusted project. User notes are for preferences across projects. To save a user note, say so explicitly: “Remember across my projects that I prefer concise answers.” When Rath asks to save or change a user note, choose **Allow** or **Deny**. A user note reaches every project, so check what it contains before allowing it. Notes are ordinary readable files stored on your computer: project notes are stored with the project and user notes in your personal Rath data. Anyone with access to those files can read them. Note contents are limited to 20,000 characters; longer contents are shortened.

## Delete a note

1. Ask: “List my project and user memory notes.” Identify the note and its scope.
2. Say, for example: “Delete the project memory note about meeting summaries.” For a user note, specify “user note” and choose **Allow** when asked to delete it, or **Deny** to keep it.
3. Ask for the list again. The deleted note should no longer appear. If there are similarly named notes in both scopes, check both lists and request each deletion separately.

## Save useful notes automatically

1. Open settings and go to **AI > Rath Features**. Under **Save tokens and remember**, turn on **Save useful notes**. It is off by default.
2. Start a **New Chat** and choose **Full access** under **Permission**. The setting applies to new chats and requires full access.
3. Continue a substantial conversation about your project. After a long turn, Rath may run a separate background review and save useful project notes. Ask “List the project memory notes” to inspect what was saved. Turning the switch off stops this optional review for new chats; it does not delete existing notes.

Each background review sends part of the conversation for an extra AI request, which may add to your provider costs. It saves project notes, not user notes. It may decide there is nothing worth saving.

## What to know

Notes can become outdated; ask Rath to check important facts before relying on them. A new note may not appear in the list Rath was given at the start of the current chat, but you can request a fresh list or start a new chat. Automatic review failures are not shown in the main chat, so check the list when a note matters.

Do not put passwords, keys or other secrets in notes. Rath refuses notes matching certain secret patterns, but that check cannot recognize every secret.

## If it doesn't work

- Rath may report **Project memory is off: this workspace is not trusted**. This means project notes cannot be used there. Trust the folder if appropriate, or ask for a user note instead.
- Rath may report **No project note named** or **No user note named** when Rath could not find that name in the requested scope. List the notes and specify the correct one.
- Rath may report **Not saved: the note seems to contain** when it detects a suspected secret. Remove it from the request and try again.
- If no note appears, check the permission mode and trusted-folder status, then ask Rath explicitly to save or list the note. Automatic extraction is optional and can produce no note; it does not report its failures in chat.

See [Chatting with Rath](/rath-docs/chatting/), [Permission modes](/rath-docs/permissions/), and [Rath Features settings](/rath-docs/settings-features/).
