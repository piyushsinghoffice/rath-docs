---
title: "Browser actions"
description: "Early: share a browser page with Rath to inspect or interact with it."
lastVerifiedVersion: "1.139.0"
---

This feature is new; if something behaves differently from this page, tell us.

Ask Rath to open a web page beside your chat, describe a page you share, or help interact with it. This is useful when you want an explanation of a screen or help checking a web app. Rath can read page content, click, type, navigate, answer page dialogs and select files. These actions can have real effects on the website, so give Rath a specific task and review what it does.

## Before you start

Open a Rath chat with a connected model. To let Rath inspect or interact with a page, select **Permission** beneath the message box and choose **Full access** while Rath is idle. Full access also allows other configured tools, including editing and running commands; use it only when you trust Rath with the task. See [Permission modes](/rath-docs/permissions/).

Sharing gives Rath access to browser content and saved data, including cookies. Cookies are data websites save to remember things such as a signed-in session. Rath can also submit forms or navigate away. Avoid sharing sensitive pages unless you are comfortable with that access, and tell Rath to stop before a consequential action if you want to review it yourself.

## Share a page and ask a question

1. Open the Command Palette and choose **Open Integrated Browser**. Enter the page address in the browser bar and open it. Use the browser inside Rath for this flow.
2. On the page, select **Share with Agent** in the browser bar. If **Share with Agent?** appears, read the warning and choose **Allow** to share or **Deny** to cancel. **Don't ask again** remembers your acceptance of this prompt; leave it unchecked if you want to be asked again.
3. If you see **Open a New Tab for Sharing?**, choose **Open and Share** to open a separate tab with the restrictions required for sharing, or **Cancel**. Work with the newly opened tab if you proceed.
4. Return to the chat, name the page and type a request such as “On the shared page titled Project overview, summarize the main points. Don't click or submit anything.” Select **Send**.
5. When sharing succeeds, the browser bar shows **Sharing with Agent**. Watch the chat for Rath's activity and answer, and check the page against its explanation. To end access, select **Stop Sharing with Agent** in the browser bar.

<!-- SCREENSHOT: Integrated browser sharing control and shared state -->

Rath can also open its own preview: ask “Open https://example.com in the browser and tell me what the page says.” The preview opens beside the chat. Its first browser action may ask you to allow sharing. If you stop sharing that preview, Rath will not turn sharing back on for it; use **Share with Agent** yourself if you want to resume.

## Try a focused task

- To understand a screen, share it and ask: “Summarize the options on this page in plain English. Don't change anything.” Check the answer against the page.
- To inspect a web app, ask: “Open https://example.com, check the heading and describe what you see.” Give Rath the actual address of the app you want checked.
- To help fill a form, share the page and ask: “Fill in the name and description we discussed, but don't submit the form. Tell me when it's ready for review.” Inspect the fields yourself before submitting.

## What to know

The code checks sharing when choosing a page for a new browser action. If you have shared several pages, name the title or part of the address so Rath can select the intended one. Without a name, Rath uses its own shared preview first; otherwise it uses the only shared page, or asks which page you mean when several are shared. A running action may still be finishing when sharing changes.

The shared-page connection and sharing changes have not yet been checked in a live Rath window. A page may therefore be offered for sharing but fail when Rath tries to use it. Browser automation also depends on browser tools being available; sharing alone does not grant the required permission mode.

## If it doesn't work

- **Browser automation requires full permission mode.** Wait for Rath to finish, choose **Full access** under **Permission**, and try again. **Browser automation is disabled in the current permission mode.** can appear with **No tools**.
- **Nothing is shared with me. Click Share with Agent in the browser bar on the page you want me to see.** Open the intended page in Rath's browser and share it. If you denied sharing, select **Share with Agent** again when ready.
- If Rath reports that several pages are shared, give the intended page's distinctive title or address. If it cannot find a matching page, check that the page is open and the title or address is correct. A named page that is not shared must be shared before Rath can use it.
- **Browser tools are disabled.** means browser actions are unavailable in the current setup. **Cannot share with agents due to network domain policy.** means sharing is blocked for that page; use an allowed page or ask your organisation for help.

See [Chatting with Rath](/rath-docs/chatting/), [Permission modes](/rath-docs/permissions/) and [Troubleshooting](/rath-docs/troubleshooting/).
