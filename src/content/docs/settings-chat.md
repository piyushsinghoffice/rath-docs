---
title: "Chat settings"
description: "Control message handling and the chat loading animation."
lastVerifiedVersion: "1.139.0"
---

Use **AI > Chat** in Settings to make the conversation fit your working style. Switches accept on or off; the registered defaults are shown below.

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

For example, choose `steer` if you often correct a task as it runs, or turn off **Ask User: Sound** in a shared room. If a long paste becomes an attachment unexpectedly, check both limits. See [Chatting](/rath-docs/chatting/) and [Questions](/rath-docs/questions/).
