---
title: "Worktrees and separate copies"
description: "Early: try project changes in a separate copy and apply saved work."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

A worktree is a separate copy of a Git project on its own branch. A branch is a line of saved project history. Use a separate copy to try a redesign or a risky edit while keeping the original project available. Review and save the work before bringing it back.

**Before you start:** Open a project managed with Git, the tool that tracks its saved history. Connect a provider and choose a model. For the chat method below, select **Full access**: the separate-copy tool creates a copy and branch. See [Permissions](/rath-docs/permissions/).

## Ask for a separate copy in chat

1. Open a chat for the project and select **Full access**.
2. Ask: “Make a separate copy of this project called redesign. Work in that copy and propose a shorter introduction.”
3. Watch the conversation for Rath's response and review the changes it reports. The **Separate copy** tool can report **Separate copy ready** and identifies the copy and its branch. Ask Rath to confirm where it made changes before relying on the result.
4. If you want to keep the result, ask: “Save the changes to the copy's branch, then tell me what you saved.” A commit is a saved snapshot in the project's history. Review the result before asking Rath to leave the copy.
5. When finished, ask: “Leave the separate copy; keep its saved work.” The tool removes the copy and retains its branch. It refuses to remove a copy with unsaved changes unless told to discard them. Discarding loses those unsaved changes.

For example, try “Make a separate copy and rewrite the welcome page in a friendlier tone.” Or ask “In a separate copy, try a different layout and explain the changes before saving them.” Review each result and decide whether to keep it.

## Use a separate copy for an automation

1. Run **Open Agents Window**, then open **Customizations** and **Automations**. Choose **Create Automation** or **New Automation**.
2. Under **Target**, choose a Git project and a Rath session type. Select **New Worktree**. Use the branch control to choose the local branch to start from; a new branch is created for the run.
3. Fill in **Name**, **Schedule**, **Prompt**, and the model and permissions in **Session configuration**. For a trial, choose **Manual** and write: “Suggest improvements to the introduction and explain each change.” Choose **Create**.
4. Select **Run now**. When the run finishes, choose **Show Result** and review the result and session changes. See [Automations](/rath-docs/automations/) for scheduling and results.

<!-- SCREENSHOT: Automation target showing New Worktree and branch selection -->

To bring a worktree session's saved changes into the original project, open that session's **Changes**, review the files, and use **Commit Changes** to ask Rath to save its edits. Then choose **Apply to Main Checkout**. On success, a notification begins **Applied** and names the source and destination branches. The destination is the branch currently checked out in the original project; check it before applying. Applying merges committed work, not unsaved edits.

## What to know

The chat tool tells Rath to use the separate copy for subsequent work; it does not itself change Rath's working folder. Check where changes were made. For an automation, the provider attempts to create a worktree on the first request. If creation fails, it continues in the original project without showing a creation warning from this code. The provider also does not check whether changing the session folder succeeded. Do not rely on isolation without checking where the work is happening, especially before an unattended edit. These flows have not been confirmed in a live window.

Deleting a session can remove a copy created for it, including unsaved changes. Save and review anything you want to keep first. Copies and branches use disk space and Git history; they are not a replacement for a backup.

## If it doesn't work

- **This folder is not a git project, so a separate copy cannot be made.** Open a Git project and try again. **The separate copy could not be made** includes Git's reason; check the reason before retrying.
- **The separate copy has changes that are not saved to its branch. Save them first, or ask to throw them away.** Save the work if you want to keep it; only request discarding if you intend to lose it.
- **The session has changes that are not committed yet. Commit them first, then apply.** Use **Commit Changes**, check that Rath succeeded, and retry. If **The main checkout has uncommitted changes** appears, save or stash those changes first. Stashing temporarily sets changes aside.
- If merging **did not go through**, Rath attempts to cancel the merge and reports the error. Inspect the original project and resolve the reported problem before trying again. If **New Worktree** or the branch choice is unavailable, select a Git project and a supported session type; **Retry Loading Branches** is available when branch loading fails.

## Related pages

- [Automations](/rath-docs/automations/)
- [Reviewing and undoing changes](/rath-docs/reviewing-changes/)
- [Permissions](/rath-docs/permissions/)
- [Agents Window](/rath-docs/agents-window/)
