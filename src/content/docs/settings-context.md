---
title: "Context settings"
description: "Choose how Rath keeps useful information in longer chats."
lastVerifiedVersion: "1.139.0"
---

A model's context is the material it can consider at once. **AI > Context** lets you balance the detail it keeps against the space available for new work. These changes apply to new chats.

| Setting | What it changes and when to use it | Default and allowed values |
| --- | --- | --- |
| Context: Clear Old Tool Results | Drops old large tool results from the model's view when context fills. Turn it off if you prefer to retain those results. Rath can read material again if needed. | On; on or off |
| Context: Clear At Percent | Sets how full the context must be before old results are dropped. Lower saves more space but can lead to more rereading. | 50%; 20–90 |
| Context: Keep Recent Tool Results | Keeps this many recent results when older ones are dropped. Increase it to retain more detail at the cost of space. | 8; 2–50 |
| Compaction: Keep Working State | Adds a short working summary after compaction. Turn it off to save the small amount of space it uses. | On; on or off |
| Memory: Enabled | Makes the notes tool available so later chats can read short notes. Turn it off if you do not want Rath offered that tool. | On; on or off |
| Memory: Auto Extract | Saves lasting project notes after a long turn. Use it to preserve decisions; it makes an extra model request per run and requires full access. | Off; on or off |

For example, increase **Context: Keep Recent Tool Results** when a long investigation needs more recent details, or turn on **Save useful notes** in **Rath Features** when you want lasting notes. If a setting seems unchanged, start a new chat. See [Context](/rath-docs/context/) and [Apps and notes](/rath-docs/apps-and-notes/).
