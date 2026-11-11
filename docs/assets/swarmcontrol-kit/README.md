# SwarmControl kit for ACXD

> **SAMPLE CODE** — A worked example, not a supported installer or a final solution. Review, adapt, and test in a non-production ACXD workspace before use.

Connects AI agents you already run in Amazon Connect Agentic CX Designer (ACXD) to ConnectPath SwarmControl. The full guide, with every field and error message, is **[SwarmControl — connect your ACXD agents](https://docs.connectpath.cx/swarmcontrol-acxd-setup/)**.

## Quick start

```bash
export ACXD_SDK_ROOT="$HOME/.cache/swarmcontrol-acxd-sdk"
mkdir -p "$ACXD_SDK_ROOT" && (cd "$ACXD_SDK_ROOT" && npm init -y >/dev/null && npm install amazon-connect-acxd-sdk@0.2.0)
read -rs ACXD_API_KEY && export ACXD_API_KEY

cp config.example.json config.json     # fill in your ids; never commit
cd scripts
node preflight.mjs                     # read-only checks P1–P7
node backup.mjs                        # pristine copies to ../state/backup
node install.mjs --dry-run             # plan; changes nothing
node install.mjs                       # type yes
node connect-block.mjs                 # shows the Connect block change
node connect-block.mjs --apply         # type yes
node verify.mjs                        # V1–V7
```

Validate each hooked flow and both hook flows in ACXD Designer, then test with a real chat or call.

To undo: `node rollback.mjs` (redeploy the pre-install build) or `node uninstall.mjs --connect` (restore everything from backup).

## Layout

| Path | What |
| --- | --- |
| `config.example.json` | Config template. Copy to `config.json`. |
| `scripts/` | The scripts above. `lib/` holds the shared code and its unit tests (`node --test scripts/lib/*.test.mjs`). |
| `assets/flows/` | Hook flow templates. |
| `assets/data-requests/` | Data request templates. The secret placeholder is filled in memory at install time. |
| `assets/context-variables.json` | The context variables install creates. |
| `assets/connect/` | Sample ACXD block for chat and voice, for reference. |
| `state/` | Created by the scripts: stack outputs, backups, install records. Keep it until you uninstall. Never commit it. |

## Requirements

Node.js 20 or later, the AWS CLI v2 signed in to the account that runs your ConnectPath stack and Connect instance, an ACXD API key, and SwarmControl enabled on your stack by ConnectPath Support.
