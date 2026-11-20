---
title: "Chat settings"
description: "Control message handling and the chat loading animation."
lastVerifiedVersion: "1.139.0"
---

Use chat settings to decide how pasted text and messages are handled, make questions audible, or change the loading animation. For example, you can queue a new request while Rath finishes its current one, or redirect the work immediately.

Before you start, open Rath. To try the message settings, start a chat and send a request that takes a little time.

1. Open the Command Palette with Ctrl+Shift+P (Windows or Linux) or Cmd+Shift+P (Mac).
2. Choose **Preferences: Open Settings (UI)**, then select **AI > Chat**.
3. Find the setting you want in the table below. Change a number, switch, or dropdown value. Dropdowns also show descriptions to help you choose.
4. Return to chat and try your change. For animation settings, look for the new appearance while a conversation is loading.

The table shows the starting defaults and available values. Loader settings only change the animation's appearance.

| Setting | What it changes and when to use it | Default and allowed values |
| --- | --- | --- |
| Paste As Attachment: Lines | Text longer than this many lines becomes an attachment. Raise it to keep longer pastes in the box. | 10; number at least 1 |
| Paste As Attachment: Characters | The same choice based on character count; either limit can trigger an attachment. | 2,000; number at least 1 |
| While Running: Default Action | Choose whether a new message waits for the current work or redirects it. Holding Ctrl or Cmd while sending does the other action. | `followUp`; `followUp`, `steer` |
| Task Panel: Enabled | Show the checklist during a multi-step plan. Turn it off for a less busy chat. | On; on or off |
| Ask User: Sound | Play a sound when Rath is waiting for your answer. Turn it off for quiet work. | On; on or off |
| Slow Model Notice Seconds | Change how long Rath waits before saying the model is still waiting. Retry and Stop are offered after twice this time. | 15 seconds; number at least 1 |
| Loader: Pattern | Choose the loading animation. | `pulse`; `pulse`, `ribbons`, `waves`, `ripples`, `aurora`, `vortex`, `lava`, `plasma`, `circuit`, `radar`, `rain`, `orbit`, `equalizer` |
| Loader: Palette | Choose the animation colors. | `ember`; `theme`, `cyber`, `synthwave`, `matrix`, `ember` |
| Loader: Grid Type | Choose the shape and arrangement of animation cells. | `dots`; `dots`, `hexDots`, `hexagons` |
| Loader: Size | Make animation cells larger or smaller. | 9 pixels; 6–30 |
| Loader: Detail | Change the coarseness of the pattern; pulse ignores this setting. | 12; 5–30 |
| Loader: Glow | Let bright animation dots glow into their neighbors. | Off; on or off |

## Try it

- Leave **While Running: Default Action** at `followUp`. While Rath works, send “Then summarize your changes in three bullets.” The message waits until the current work finishes.
- Choose `steer`. While Rath works, send “Focus on the introduction first.” The message redirects the work in progress. Hold Ctrl or Cmd when sending to use the other action for that message.
- Turn off **Ask User: Sound** in a shared room. Ask “Help me plan a team meeting, and ask me what you need to know.” When Rath asks a question, check the chat for it instead of relying on a sound.

## If it doesn't work

- If a paste becomes an attachment unexpectedly, check both **Paste As Attachment: Lines** and **Paste As Attachment: Characters**. Exceeding either limit triggers an attachment.
- If changing **Loader: Detail** has no visible effect, check **Loader: Pattern**: `pulse` ignores the detail setting.
- If you see **Still waiting for the model**, the default notice appears after 15 seconds without a reply. After twice the configured delay, Rath offers **Retry** and **Stop**. Adjust **Slow Model Notice Seconds** if you want a different wait.
- If you see “The message was not sent: Rath is not connected. Use Retry, then send it again.”, select **Retry**, then send the message again.

See [Chatting](/rath-docs/chatting/) for sending messages and [Questions](/rath-docs/questions/) for answering Rath.
