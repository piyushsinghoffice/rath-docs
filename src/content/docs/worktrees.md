---
title: "Worktrees and separate copies"
description: "Early: try project changes in a separate copy and apply saved work."
lastVerifiedVersion: "1.139.0"
---

A worktree is a separate copy of a Git project on its own branch. A branch is a line of saved project history. Use a separate copy to try a redesign while keeping the original project available, then review and save the result before bringing it back.

**Before you start:** Open a project managed with Git, the tool that tracks its saved history. Connect a provider and choose a model. For the chat method below, select **Full access**: the separate-copy tool creates a copy and branch. See [Permissions](/rath-docs/permissions/).

**Check isolation before edits.** An automation set to **New Worktree** can continue in the original project if the copy cannot be created, without a warning in the run. A successful trial does not guarantee a later run will create its own copy. Avoid unattended edits if you cannot verify where that run is working.

## Ask for a separate copy in chat

1. Open a chat for the project and select **Full access**.
2. Ask: “Make a separate copy of this project called redesign. Work in that copy and propose a shorter introduction.”
3. Watch for Rath's response. It may report “Separate copy ready” and identify the copy and branch. Ask Rath to confirm where it is working before it edits, then review the changes it reports.
4. If you want to keep the result, ask: “Save the changes to the copy's branch, then tell me what you saved.” A commit is a saved snapshot in the project's history. Review the result before asking Rath to leave the copy.
5. When finished, ask: “Leave the separate copy; keep its saved work.” The chat tool removes the copy and retains its branch. It refuses to remove a copy with unsaved changes unless told to discard them. Discarding loses those unsaved changes.

For example, try “Make a separate copy and rewrite the welcome page in a friendlier tone.” Or ask “In a separate copy, try a different layout and explain the changes before saving them.” Review each result and decide whether to keep it.

## Use a separate copy for an automation

1. Run **Open Agents Window**, then open **Customizations** and **Automations**. Choose **Create Automation** or **New Automation**.
2. Under **Target**, choose a Git project and a Rath session type. Select **New Worktree** and use the branch control to choose the local branch to start from. Rath attempts to create a separate copy and a new branch for each run.
3. Fill in **Name**, **Schedule**, **Prompt**, and the model and permissions in **Session configuration**. For a trial, choose **Manual** and write: “Report where you are working, then suggest improvements to the introduction without making edits.” Choose **Create**.
4. Select **Run now**. When the run finishes, choose **Show Result** and check where it worked and what it suggested. Verify each later run before allowing edits; do not assume the copy was created. The automation's permission selection controls what the run may do; it is separate from the **Full access** requirement for asking the chat tool to create a copy. See [Automations](/rath-docs/automations/) for scheduling and results.

<!-- SCREENSHOT: Automation target showing New Worktree and branch selection -->

To bring a worktree session's saved changes into the original project, open that session's **Changes**, review the files, and use **Commit Changes** to ask Rath to save its edits. Then choose **Apply to Main Checkout**. On success, a notification begins **Applied** and names the source and destination branches. The destination is the branch currently checked out in the original project; check it before applying. Applying merges committed work, not unsaved edits.

## What to know

The chat tool tells Rath to use the separate copy for subsequent work; it does not itself change the chat's working folder. Check where changes were made. An automation's copy is created when the run starts, so verify each run separately.

Deleting a session removes a separate copy Rath is tracking for that session, including unsaved changes, without the chat tool's refusal. Those changes are lost. Save and review anything you want to keep first. Copies and branches use disk space and Git history; they are not a replacement for a backup.

## If it doesn't work

- In chat, Rath may tell you “This folder is not a git project, so a separate copy cannot be made.” Open a Git project and try again. “The separate copy could not be made” includes Git's reason; check it before retrying.
- If Rath reports “The separate copy has changes that are not saved to its branch. Save them first, or ask to throw them away,” save the work if you want to keep it; only request discarding if you intend to lose it.
- **The session has changes that are not committed yet. Commit them first, then apply.** Use **Commit Changes**, check that Rath succeeded, and retry. If **The main checkout has uncommitted changes** appears, save or stash those changes first. Stashing temporarily sets changes aside.
- If merging **did not go through**, Rath attempts to cancel the merge and reports the error. Inspect the original project and resolve the reported problem before trying again. If **New Worktree** or the branch choice is unavailable, select a Git project and a supported session type; **Retry Loading Branches** is available when branch loading fails.

## Related pages

- [Automations](/rath-docs/automations/)
- [Reviewing and undoing changes](/rath-docs/reviewing-changes/)
- [Permissions](/rath-docs/permissions/)
- [Agents Window](/rath-docs/agents-window/)
