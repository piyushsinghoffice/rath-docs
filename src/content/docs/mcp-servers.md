---
title: "MCP servers"
description: "Early: connect trusted services and give Rath their tools."
lastVerifiedVersion: "1.139.0"
---

> This feature is new; if something behaves differently from this page, tell us.

An MCP server is a program or online service that offers tools to Rath. A tool is an action Rath can use, such as looking up information in a connected service. Connect one when the service offers information or actions you need in a chat. What Rath can actually do depends on the tools that particular server provides.

Before you start, open the project folder and obtain the server's starting command or web address from a source you trust. A command is an instruction that starts a program on your computer. Check what access the server needs and what it can do before enabling it.

## Add a server and try its tools

1. Open the command palette and choose **Rath: Add MCP Server**. Under **What kind of MCP server?**, choose **Local Program** for a program on your computer or **Remote Address** for a service reachable over HTTP or HTTPS.
2. At **A short name for the server, for example filesystem**, enter a name using lowercase letters, digits and hyphens. Use a different name for each server: adding one with the same name replaces its saved entry.
3. Enter the starting command at **The command that starts it**, or the address at **The server's address, for example https://example.com/mcp**. Use the details supplied by the server provider.
4. If **Turn on MCP servers?** appears, read the warning and select **Turn On** only if you trust the configured servers. If you decline, Rath still saves the server for later. The saved server details then open for inspection.
5. Start a **New Chat**. Under **Permission**, choose **Full access** while Rath is idle. Open the command palette and choose **Rath: Manage Tools…**. Look under **MCP Tools** for tools offered by the server. Ask Rath for a task those tools support, and check the answer against the service.

When a server connects and provides tools, its tools can appear in **MCP Tools**. Their presence shows they were registered; it does not guarantee that a particular request will succeed or that Rath will choose to use one. The first response can take longer while servers connect.

<!-- SCREENSHOT: MCP Tools in Manage Tools with a connected server's tools -->

## Turn access on or off

Open settings and go to **AI > Rath Features**. Switch **Connect services** on to allow configured servers, or off to stop allowing them in new chats. This control corresponds to `rath.agent.mcp.enabled` and is off by default. Start a **New Chat** after changing it; an already started chat may retain its existing tools. Switching it off does not erase the saved server details.

**Full access** is also required: **Read-only**, **Plan**, **Ask before changes**, and **No tools** do not enable MCP tools. Full access allows other configured tools too, including tools that can change your work. Use it only when you are comfortable with that access, and review the result. See [Permission modes](/rath-docs/permissions/).

## Try these requests

The following depend on the server actually offering the relevant tools and access:

- For a document service: “Find the project brief in the connected service and summarize its decisions.” Check the source before sharing the summary.
- For a project tracker: “List the open tasks assigned to me and group them by due date.” Compare the result with the tracker.
- For a service that can make changes: “Find the task about the launch and show me what you would change before making any update.” Read the proposed change carefully; **Full access** does not promise an approval prompt for every action.

## Safety and what to know

Local servers can run programs on your computer. Server tools can potentially read, change or send information, depending on the server and your access. Enable only servers and commands you trust, avoid sharing sensitive information unnecessarily, and switch **Connect services** off when you no longer want to allow them in new chats. Check a server's own permissions as well.

Rath skips certain servers that need unresolved setup values or an online sign-in authorization flow. The add-to-tool-call journey has not been confirmed in a live Rath window for this guide. Connection failures are recorded, but the connection code does not provide a dedicated failure message in the tools list.

## If it doesn't work

- If Rath says **Open a folder first**, open your project folder and run **Rath: Add MCP Server** again. If you see **Use lowercase letters, digits and hyphens only.** or **This is required.**, correct the indicated entry.
- If Rath reports that the existing server details **are not valid JSON**, they were left unchanged. JSON is a structured way to store settings; ask someone familiar with the project's server setup to correct it, then try again.
- If **MCP Tools** says **No MCP tools registered yet — connect an MCP server to add some.**, check **Connect services**, **Full access**, the server details and whether the server is available. Start a new chat and check again. A server can also connect without offering tools.
- If the list says **Open a Rath session to manage its tools.**, open a chat. If it says **Couldn't load the current tool list**, check the accompanying error and try again. A server tool can also return its own error; ask Rath to explain it and check the service's access and availability.

See [Chatting with Rath](/rath-docs/chatting/), [Permission modes](/rath-docs/permissions/) and [Packages and plugins](/rath-docs/packages-and-plugins/).
