---
title: "Automations"
description: "Early: schedule tasks, respond to events, and control unattended actions."
lastVerifiedVersion: "1.139.0"
---

Automations repeat a request on a schedule or when something happens. Use one for a regular summary or feed check. Review results before relying on them.

**Before you start:** Connect a provider, make a model available, and have the folder Rath should inspect ready. Run **Open Agents Window** from the Command Palette. Keep the Agents Window open: scheduled and event checks do not run while Rath is closed. With several windows open, only one checks for events, about once a minute.

## Create and test a schedule

1. In the Agents Window, open **Customizations**, then **Automations**. Select **Create Automation** if the list is empty, or **New Automation** if it already contains automations.
2. Enter a **Name**, such as `Morning review`. Under **Schedule**, choose **Hourly**, **Daily**, or **Weekly** and set **Time** and **Day of week** when offered. **Manual** starts only when you run it or an event triggers it.
3. Under **Target**, select your folder. In **Prompt**, enter: “Read the project notes and summarize the open questions. Do not change anything.”
4. Check the model and **Permissions** in **Session configuration**. Start with **Read-only** for a summary. **No tools** cannot read files; **Full access** can edit files and run commands unattended. If no permission is selected, the `rath.agent.automations.permissionMode` setting applies, with read-only as its default. See [Permission modes](/rath-docs/permissions/).
5. Leave **Enabled (the scheduler runs this automation when due)** selected and choose **Create**. Select **Run now** on the new card; it shows **Running** while it works.
6. When the notification says **Automation "Morning review" finished.**, select **Show Result** to read the prompt, steps and answer. **History** lists runs.

## Start from a feed

An RSS feed lists published items. To summarize new ones:

1. Create an enabled automation named `Feed review`, with **Schedule** set to **Manual** and **Prompt** set to: “Summarize the new items and list anything relevant to our project.”
2. Open **Settings**, search for `rath.agent.automations.eventTriggers`, and select **Edit in settings.json**. Add this setting inside the outer braces, separating it from other settings with a comma. Replace the address with a real feed. If the setting already exists, add the object inside its square brackets, separated from existing entries by a comma.

   ```json
   "rath.agent.automations.eventTriggers": [
     { "automation": "Feed review", "source": "rss", "url": "https://example.com/feed.xml" }
   ]
   ```

3. Save your changes. The first check records existing items; later new items can start a run. Feed checks default to every 30 minutes. Look in **History** for the result.

Other event sources include changed files, webhooks and connected services. The setting describes their details. Webhooks are off by default and require a secret token of at least 16 characters; anyone with it can start the matching automation.

## Approve actions

Without a matching action policy, an automation uses its selected permission, and ordinary questions are declined automatically. A policy sets rules for actions Rath can take:

1. In **Settings**, search for `rath.agent.automations.actionPolicies` and select **Edit in settings.json**. Add this setting inside the outer braces, separated from other settings by a comma. If it already exists, add the object inside its square brackets, separated from existing entries by a comma.

   ```json
   "rath.agent.automations.actionPolicies": [
     { "automation": "Notes update", "default": "deny", "rules": [{ "tool": "edit", "action": "ask" }] }
   ]
   ```

2. Save, then create an automation named `Notes update` with this **Prompt**: “Review the meeting notes and correct spelling; leave the meaning unchanged.” When an edit is requested, inspect the notification and choose **Approve** or **Reject**.

The request is refused after 30 minutes by default. A rule's `waitMinutes` can be set from 1 to 240, but the run time limit can stop the run first. Rules are checked in order; unmatched actions default to deny, except reading. A policy makes actions available even if the selected permission is more restrictive. Use **Rath: Show Automation Action Log** to review decisions for automations with a policy.

## Stop and review

Choose **Disable** from a card's **More Actions...** menu to prevent future runs, or **Enable** to resume. To stop a current run, select **Stop** on its item in **History**. **Delete** permanently removes the automation and its run history; runs already underway continue. The latest ten result copies are retained; long results may be shortened. Model use may incur provider charges.

## If it doesn't work

- **Name is required.**, **Prompt is required.**, or **Workspace folder is required.**: fill in the missing field.
- **Automation '…' cannot start until its agent becomes available.**: check the provider connection and model, then try **Run now** again.
- **No automation result has been saved yet.**: wait for a run to finish and check **History**.
- **Nothing recorded yet.** in the action log: add a policy and run the automation again. Runs without a matching policy are not recorded there.
- No feed run: the first check records existing items. Check the address, ensure the automation is enabled, and wait for a new item.

## Related pages

- [Agents Window](/rath-docs/agents-window/)
- [Permission modes](/rath-docs/permissions/)
- [Provider connections](/rath-docs/provider-connections/) and [Troubleshooting](/rath-docs/troubleshooting/)
