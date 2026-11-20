---
title: "Context settings"
description: "Choose how Rath keeps useful information in longer chats."
lastVerifiedVersion: "1.139.0"
---

Use context settings to make room in a long chat while keeping more of the details that matter to your task. Context is the information the model can consider at once, including your messages and the results of actions such as reading a document. There is a limit to that space.

Before you start, decide whether you want Rath to keep more recent detail or free space sooner. Changes here apply to new chats. Notes that last across chats are separate from the context of one conversation.

## Change the settings

1. Open **Settings**, then select **AI > Context**.
2. Choose the settings below. For a long investigation, try increasing **Context: Keep Recent Tool Results**; to make room sooner, lower **Context: Clear At Percent**.
3. Start a **New chat** and give Rath the task and any important constraints again.
4. Continue working. When older action results are cleared, you can see a message such as **Cleared 2 old tool results**. After compacting, look for **Conversation compacted**. These actions make room for the model; check important details in its answer.

| Setting | What it does | Default |
| --- | --- | --- |
| **Context: Clear Old Tool Results** | Removes older, large action results from the model's view as context fills. Rath can read a document again if needed. Turn this off to retain those results. | On |
| **Context: Clear At Percent** | Sets how full context must be before old results are cleared. A lower number saves more space but can lead to more rereading. Choose 20–90. | 50 |
| **Context: Keep Recent Tool Results** | Keeps this many recent action results when older ones are cleared. Choose 2–50; a higher number keeps more detail but saves less space. | 8 |
| **Compaction: Keep Working State** | Adds a short summary of the plan, files and actions in use after compaction, using a little of the space freed. | On |
| **Memory: Enabled** | Tells Rath about its notes tool for information that can last across chats. | On |
| **Memory: Auto Extract** | Saves lasting project notes in the background after a long turn. It requires **Full access** and uses an extra AI request per run. | Off |

**Memory: Auto Extract** is the same setting as **Save useful notes** under **AI > Rath Features**. The separate **Memory: Enabled** setting is on by default. Notes can be stored with the project or in your own notes for use across projects. Turning off **Memory: Enabled** stops Rath being told about the notes tool; it does not delete existing notes. The notes tool is available in **Full access**, not in **Ask before changes**, **Read-only**, **Plan**, or **No tools**. See [Memory](/rath-docs/memory/) for managing notes.

## Try it

- For a long review, increase the recent-results number, start a new chat and ask: “Review this proposal for unclear deadlines. Keep a list of the passages you checked.”
- If an earlier detail matters after results are cleared, ask: “Read the proposal again and check the delivery date before answering.”
- For a reusable decision in a **Full access** chat, ask: “Save a project note that our reports use British spelling.” Review what Rath saves.

## If it doesn't work

- If a changed setting seems to have no effect, start a new chat; existing chats keep their previous settings.
- If Rath does not save a note, check **Permission** and use **Full access**. For automatic notes, also turn on **Memory: Auto Extract**.
- If you see **Couldn't compact the context.**, wait until Rath finishes responding and try again. See [Context and compacting](/rath-docs/context/) for the compact action and what to expect.

See [Permissions](/rath-docs/permissions/) and [Rath Features settings](/rath-docs/settings-features/) for related choices.
