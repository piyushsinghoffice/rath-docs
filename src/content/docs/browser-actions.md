---
title: "Browser actions"
description: "Share a browser page with Rath to inspect or interact with it."
lastVerifiedVersion: "1.139.0"
---

Share a page in Rath's integrated browser to get an explanation of a screen, check a web app, or get help filling in a form. Rath can read and modify the page and saved browser data, including cookies, and can click, type, submit forms, answer page dialogs and select files. Actions on a website can have real effects, so give Rath a specific task and review its work.

## Before you start

Open a Rath chat with a connected model. While Rath is idle, select **Permission** beneath the message box and choose **Full access**. This also allows other configured tools, including editing and running commands. Use it only when you trust Rath with the task. See [Permission modes](/rath-docs/permissions/).

Sharing gives Rath access to saved data such as cookies, which websites use to remember things including signed-in sessions. Share sensitive pages only if you are comfortable with that access. Ask Rath to stop before submitting or making another change you want to review yourself.

## Share a page and ask a question

1. Open the Command Palette with **Ctrl+Shift+P** on Windows or Linux, or **Cmd+Shift+P** on Mac. Choose **Open Integrated Browser**, enter the page address in the browser bar, and open it.
2. Select **Share with Agent** in the browser bar. If you see **Open a New Tab for Sharing?**, choose **Open and Share** to open a separate tab with the restrictions required for sharing, or **Cancel**. Use the new tab if you proceed.
3. If **Share with Agent?** appears, read the warning and choose **Allow** or **Deny**. Leave **Don't ask again** unchecked if you want the warning in future: accepting with it checked remembers your choice for your profile, and there is no control to bring the warning back.
4. Return to chat and type: “On the shared page titled Project overview, summarize the main points. Don't click or submit anything.” Replace the title with your page's title, then select **Send**.
5. The browser bar shows **Sharing with Agent** when the page is shared. Watch the chat for Rath's activity and answer, and check its explanation against the page. When finished, select **Stop Sharing with Agent** in the browser bar.

<!-- SCREENSHOT: Integrated browser sharing control and shared state -->

Rath can also open a page: ask “Open https://example.com in the browser and tell me what the page says.” The page opens beside the chat. Its first browser action may ask you to allow sharing. If you stop sharing that page, select **Share with Agent** yourself to resume.

## Try a focused task

- To understand a screen, share it and ask: “Summarize the options on this page in plain English. Don't change anything.” Check the answer against the page.
- To help fill a form, share it and ask: “Fill in the name and description we discussed, but don't submit the form. Tell me when it's ready for review.” Inspect the fields yourself before submitting.

If several pages are shared, include a distinctive page title or part of its address in your request. Stopping sharing prevents new actions on that page, though an action already running may still finish.

## If it doesn't work

- If Rath says “Browser automation requires full permission mode,” wait for it to finish, select **Full access** under **Permission**, and try again.
- If Rath says “Nothing is shared with me,” open the intended page in the integrated browser and select **Share with Agent**. If you denied sharing, select it again when ready.
- If Rath reports that several pages are shared or cannot find a page, give its distinctive title or address. Check that it is open and shared.
- If Rath says “Browser tools are disabled,” browser actions are unavailable in the current setup. If you see **Cannot share with agents due to network domain policy.**, use an allowed page or ask your organisation for help.

See [Chatting with Rath](/rath-docs/chatting/), [Permission modes](/rath-docs/permissions/) and [Troubleshooting](/rath-docs/troubleshooting/).
