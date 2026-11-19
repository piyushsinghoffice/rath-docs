---
title: "Automations"
description: "Early: schedule tasks, respond to events, and control unattended actions."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

Automations repeat a request on a schedule or when an event occurs. Use one to prepare a regular summary or check for new information without starting each run yourself. You can test it immediately, inspect the result, and limit what Rath can do while you are away.

**Before you start:** Connect a provider and make a model available. Run **Open Agents Window** from the Command Palette and have the folder Rath should inspect ready. Keep the Agents Window open for scheduled and event checks. See [Agents Window](/rath-docs/agents-window/) and [Provider connections](/rath-docs/provider-connections/).

## Create and test a schedule

1. In the Agents Window, open **Customizations**, then **Automations**. Select **Create Automation** or **New Automation**.
2. Give it a **Name**, such as `Morning review`. Under **Schedule**, choose **Hourly**, **Daily**, or **Weekly**; set **Time** and **Day of week** when offered. Choose **Manual** if you only want to start it yourself or use an event trigger.
3. Under **Target**, select the folder containing the material. In **Prompt**, write the task, for example: “Read the project notes and summarize the open questions. Do not change anything.”
4. Check the model and **Permissions** in **Session configuration**. **Read-only** permits reading and searching; **No tools** answers without tools. **Full access** can edit files and run commands without someone watching. Start with **Read-only** for a summary.
5. Leave **Enabled (the scheduler runs this automation when due)** selected and choose **Create**. The automation appears as a card. Select **Run now** to test it; the card shows **Running** while it works.
6. When the notification says **Automation "Morning review" finished.**, select **Show Result**. The result contains the prompt, a short account of the steps and the answer. You can also run **Rath: Show Automation Result** from the Command Palette to open the latest saved result. **History** lists runs.

<!-- SCREENSHOT: Automation setup showing the schedule, prompt and permission controls -->

## Start from an event

An event trigger is a setting that tells Rath what to watch. For example, an RSS feed is a regularly updated list of published items.

1. Create an enabled automation named `Feed review` with **Schedule** set to **Manual** and this **Prompt**: “Summarize the new items and list anything relevant to our project.”
2. Open **Settings** in the Agents Window and search for `rath.agent.automations.eventTriggers`. Add an entry to that setting's list with `automation` set to `Feed review`, `source` set to `rss`, and `url` set to the feed's full web address. For example:

   ```json
   { "automation": "Feed review", "source": "rss", "url": "https://example.com/feed.xml" }
   ```

   Replace the example address with a real feed. The first check remembers existing items; later new items can start a run. Checks default to every 30 minutes. Look in **History** and open the result after a new item appears.
3. Other sources include `fileChanged` for a changed file, `webhook` for a message sent to Rath's local listener, and `mcp` for new results from a connected service's tool. Their entries need additional details described in the setting. A webhook is off by default; enabling it requires a secret token of at least 16 characters. Anyone with that token can start the matching automation, so keep it private.

## Control actions and approvals

Without a matching action policy, the automation uses its selected permission. Ordinary questions Rath would ask during an unattended run are declined automatically. To approve a specific action during a run, use an action policy: a set of rules for the tools Rath can call.

1. In **Settings**, search for `rath.agent.automations.actionPolicies`. Add an entry naming the automation. For an automation called `Notes update`, this example asks before each use of the editing tool and denies other unmatched actions:

   ```json
   { "automation": "Notes update", "default": "deny", "rules": [{ "tool": "edit", "action": "ask" }] }
   ```

2. Give **Notes update** a prompt such as: “Review the meeting notes and correct spelling; leave the meaning unchanged.” When an edit is requested, a notification says **Automation "Notes update" wants to use …**. Inspect it and choose **Approve** or **Reject**. If you do not answer, the request is refused after 30 minutes by default.
3. Run **Rath: Show Automation Action Log** to inspect recorded decisions. Only automations with a policy entry are recorded there. Rules are checked in order; `auto` allows an action, `ask` requests approval, and `deny` refuses it. Unmatched actions default to deny; built-in reading tools remain allowed unless a rule says otherwise. A policy makes tools available and checks each call, even if the automation's selected permission is more restrictive.

## Stop and review

To prevent future runs, open the card's **More Actions...** menu and choose **Disable**. Choose **Enable** to resume. To stop a run already underway, use **Stop** on its item in **History**. **Delete** permanently removes the automation and its run history. Review results before relying on them; the latest ten saved result copies are retained, and long results may be shortened.

## What to know

The code supports event triggers, policy approvals and saved results, but their complete flow has not been confirmed in a live window. Event checks run about once a minute; feed and connected-service checks have their own intervals. A run can also be stopped by its time limit. Model use may incur provider charges.

## If it doesn't work

- **Name is required.**, **Prompt is required.**, or **Workspace folder is required.**: fill in the missing field and try **Create** again.
- **Automation '…' cannot start until its agent becomes available.**: check your provider connection and model, then try **Run now** again.
- **No automation result has been saved yet.**: wait for a run to finish and use **Show Result**. Check **History** for the run.
- **Nothing recorded yet.** in the action log: add a policy for that automation and run it again. Runs without a matching policy are not recorded there.
- A feed produces no initial run: the first check records existing items. Check the address and wait for a new item. A disabled automation does not run from its schedule or event trigger.

## Related pages

- [Agents Window](/rath-docs/agents-window/) for opening and navigating sessions
- [Permission modes](/rath-docs/permissions/) for deciding what Rath may do
- [Provider connections](/rath-docs/provider-connections/) and [Troubleshooting](/rath-docs/troubleshooting/) for connection problems
