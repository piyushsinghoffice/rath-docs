---
title: "Changing how Rath looks"
description: "Choose a theme, request appearance changes, and restore your look."
lastVerifiedVersion: "1.139.0"
---

Choose a comfortable color theme yourself, or ask Rath to adjust its appearance for you. A theme changes the colors around your work; your own styles can make more specific visual changes. Use a theme for a broad light, dark, or high-contrast look, and a custom style when you want a particular part of Rath to look different.

**Before you start:** To ask Rath to change its appearance, open a chat and connect a provider. Appearance requests need **Full access**, which also grants other abilities; see [Permissions](/rath-docs/permissions/) first. You can choose a color theme yourself without granting that access.

## Choose a color theme

1. Open the Command Palette with **Command+Shift+P** on a Mac or **Ctrl+Shift+P** on Windows or Linux. Type and choose **Preferences: Color Theme**.
2. Move through the available themes with the arrow keys to preview them. Select a theme to keep it, or press Escape to return to the previous one.
3. Look at the window and editor to check that the colors are comfortable. To change it again, open **Preferences: Color Theme** and choose another theme.

For example, choose a light theme for a bright room, a dark theme for a darker workspace, or a high-contrast theme if you need stronger separation between elements. The picker also offers **Browse Additional Color Themes...** when you want more choices.

<!-- SCREENSHOT: Color theme picker with a theme preview -->

## Ask Rath to change an appearance setting

1. Open **Settings**, then **AI** > **Rath Features**. Under **Change how Rath looks**, set **Agent changes to appearance** to **Full**. The default, **Lean**, lets Rath create custom styles; **Full** also allows appearance setting changes with your approval. Both require **Full access** in the chat.
2. Start a new chat so the extra **Full** abilities are available, and select **Full access** in the chat's permission control.
3. Ask for one specific change, for example: “Change Rath to a dark color theme,” or “Make the editor text larger.” Name Rath or the editor so the request is clear. Rath can change selected appearance settings, including themes, zoom, fonts, line height, the minimap and wrapping; it refuses settings outside its allowed list.
4. If Rath proposes a setting change, read **Allow the Agent to Change a Setting?** The dialog shows **Now** and **New**. Select **Allow** if the proposed value is what you want; otherwise dismiss the dialog. After approval, check the window or editor for the change.
5. To reverse an approved setting change, open the Command Palette and choose **Rath: Undo the Agent's Last Setting Change**. Rath reports **Put back the setting** followed by its name. Repeat it to step back through up to the last 30 agent setting changes.

<!-- SCREENSHOT: Appearance setting approval showing current and proposed values -->

## Control your styles

Your styles are personal visual rules that can change particular parts of Rath. **Your styles and additions** is on by default. To temporarily see Rath without them, open **Settings** > **AI** > **Rath Features**, find **Your styles and additions** under **Change how Rath looks**, and turn it off. Turn it on again to bring them back. This switch also controls your additions, such as widgets; see [Making Rath yours](/rath-docs/customizing/) for those.

With **Lean** or **Full** and a chat in **Full access**, try asking: “Make the background behind Rath's chat messages less bright.” Describe where you want the change and inspect the result. If it is not right, ask: “Undo the chat background change you just made.” Results can vary, so check that the change affected Rath itself and that the controls you need remain visible.

## If it doesn't work

- If Rath says **This change is turned off in Settings.**, check **Agent changes to appearance** and use **Full** for setting changes. Start a new chat after choosing it, and check **Full access**.
- If you see **Your custom look is paused. Your widgets still work.**, a style may have hidden a necessary control. Ask Rath to adjust it, then use **Turn On** to try your customizations again. If the problem returns, turn them off in **Your styles and additions**.
- If you see **Your organization has turned customizations off.**, ask your administrator. If Rath says **Part of your customizations could not be read, so it was skipped.**, ask Rath to help fix the affected customization.
- If undo reports **There is no setting change by the agent to undo.**, there is no recorded agent setting change to restore. Choose your preferred theme directly instead.

See [Making Rath yours](/rath-docs/customizing/) for additions and widgets, [Permissions](/rath-docs/permissions/) for access choices, and [Rath Features settings](/rath-docs/settings-features/) for other controls.
