---
name: console-logging-standards
description: Standards for professional console/terminal output in CLI applications and scripts
applies_to:
  - "*.sh"
  - "*.bash"
  - "*.py"
  - "*.js"
  - "*.ts"
  - "*.mjs"
priority: medium
tags:
  - cli
  - logging
  - console
  - bash
languages:
  - python
  - bash
  - javascript
  - typescript
---

# Console Logging Standards for Terminal & CLI Applications

All scripts that output to terminal/console must maintain commercial-grade, professional logging standards. When modifying any script, review and update console output to ensure it remains coherent, well-organized, and visually clear.

## Core Principles

### Visual Clarity & Organization
- Use colored and styled text strategically (bold, dim, underline) to create visual hierarchy
- Employ horizontal rules (hard rules) to separate major sections of execution
- Group related operations into logical sections with clear headers
- Maintain consistent indentation for nested operations (2-4 spaces per level)
- Use visual separators (borders, boxes) for important messages or summary sections
- Preserve vertical whitespace strategically—blank lines between major sections improve readability

### Progress Indication
- **Deterministic operations**: Use progress bars with percentage/count (e.g., "Processing: [████████░░] 47% | 2907/6196")
- **Non-deterministic operations**: Use spinner animations (⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇ ⠏) or pulsing indicators
- **Progress bars must**:
  - Update smoothly without flickering or leaving artifacts
  - Show accurate percentages and counts
  - Clear properly when complete
  - Include rate/speed information when relevant (e.g., "items/sec")
- **Completion reporting**: When a progress bar finishes, replace it with a summary line showing final results

### Message Type System
Implement a consistent, standardized message type system:

- **SUCCESS** ✓ / ✔ (green): Completed operations, successful validations
- **ERROR** ✗ / ✖ (red): Failures, exceptions, critical issues requiring attention
- **WARNING** ⚠ / ⚡ (yellow/orange): Non-fatal issues, deprecations, potential problems
- **INFO** ℹ / ● (blue/cyan): General information, status updates, configuration details
- **DEBUG** 🔍 (dim/gray): Verbose technical details (only when debug mode enabled)
- **QUESTION** ? / ❓ (magenta): User input prompts, confirmations
- **STEP** → / ▶ (default): Sequential step indicators in multi-step processes

### Announcement & Completion Pattern
Always follow the announcement-action-result pattern:
```
→ Starting database migration...
  ├─ Backing up current schema... ✓ Complete (2.3s)
  ├─ Running migration scripts... ✓ 15 migrations applied (8.7s)
  └─ Verifying integrity... ✓ All checks passed (1.1s)
✓ Database migration completed successfully (12.1s total)
```

### Timing, Duration & Timestamps

**When to show timestamps:**
- Long-running processes (>5 minutes), background services, audit trails
- Cloud/Lambda functions, error/warning messages
- Multi-user operations where event ordering matters
- Skip for short interactive scripts where relative timing suffices

**Duration format standards:**
- Under 1 second: `847ms`
- Under 1 minute: `12.3s`
- Under 1 hour: `5m 42s`
- Over 1 hour: `2h 15m 34s`

**Timestamp format by context:**
- **Interactive/short scripts:** Relative time `[+2.34s]` or no timestamps
- **Logs/services:** ISO 8601 `2025-11-30T14:23:45.123Z` (always UTC)
- **Long-running/monitoring:** Human-friendly `[14:23:45]` or hybrid `[14:23:45 | +2m 34s]`

**Example patterns:**
```
Short script (no timestamps):
✓ Build completed (25.2s total)

Service logs (ISO 8601):
2025-11-30T14:23:45.123Z ℹ Service started
2025-11-30T14:23:52.891Z ✓ Processed job #1284 (2.1s)

Batch job (hybrid):
[14:20:00 | +0m] 📊 Starting batch - 6,196 records
[14:21:33 | +1m 33s] ✓ Completed: 6,196/6,196
```

### Emoji Usage Guidelines
- Use emojis purposefully to enhance clarity, not for decoration
- Limit to 1-2 emojis per message type for consistency
- Avoid emoji overload—text should remain readable without them
- Consider terminal compatibility (use ASCII fallbacks when needed)
- Appropriate emojis: 🚀 (launch/start), 📦 (package/bundle), 🔧 (configuration), 📊 (analysis/stats), 🔄 (sync/update), ⏱️ (timing)

## Technical Requirements

### Color & Styling
- Use ANSI escape codes or libraries (colorama for Python, chalk for Node.js, tput for bash)
- Ensure graceful degradation when colors aren't supported (NO_COLOR env var)
- Test output in both light and dark terminal themes
- Never use color as the *only* way to convey information (include symbols/text)

### Performance & Efficiency
- Batch console writes to avoid excessive I/O operations
- Use carriage returns (\r) for updating progress on the same line
- Clear previous lines properly when updating multi-line displays
- Minimize ANSI codes in each write operation

### Error Handling & Stack Traces
- Catch and format errors with context before logging
- Include relevant error codes, file paths, line numbers
- For stack traces: show abbreviated version by default, full trace in debug mode
- Suggest actionable next steps when errors occur

### Smart Verbosity Levels
Support at least 3 verbosity levels:
- **Quiet** (-q): Only errors and critical warnings
- **Normal** (default): Standard operation messages, progress, results
- **Verbose** (-v): Detailed steps, timing, configuration
- **Debug** (-vv): Everything including variable states, API calls, diagnostic info

## Examples of Excellence

### Good Progress Bar
```
Scraping data: [█████████████████░░░░] 58% | 3618/6196 | 245 items/sec | ETA 11s
```

### Poor Progress Bar (DON'T DO THIS)
```
47% | 2900/6196 | Scraping:
47% | 2901/6196 | Scraping:
[leaves artifacts, no visual bar, confusing layout]
```

### Good Section Header
```
═══════════════════════════════════════════════════════════
  🚀 DEPLOYMENT PROCESS
═══════════════════════════════════════════════════════════
```

### Good Nested Operations
```
📦 Building application...
  ├─ Installing dependencies... ✓ 234 packages (15.3s)
  ├─ Compiling TypeScript... ✓ 89 files (4.2s)
  ├─ Bundling assets... ✓ 2.4 MB (6.8s)
  └─ Running tests... ✓ 47/47 passed (12.1s)
✓ Build completed successfully (38.4s)
```

### Good Summary Section
```
┌──────────────────────────────────────┐
│ ✓ MIGRATION SUMMARY                  │
├──────────────────────────────────────┤
│ Total Records: 6,196                 │
│ Processed:     6,196 (100%)          │
│ Succeeded:     6,189 (99.9%)         │
│ Failed:        7 (0.1%)              │
│ Duration:      2m 34s                │
└──────────────────────────────────────┘
```

## Platform-Specific Considerations

### Cloud Environments (Lambda, Cloud Functions)
- CloudWatch/StackDriver treat each log line independently—avoid complex multi-line animations
- Use structured JSON logging for searchability when appropriate
- Include request IDs and trace context in every log entry
- Always use ISO 8601 timestamps in UTC
- Prefix severity clearly: `[ERROR]`, `[INFO]`, `[WARNING]`

### CI/CD Pipelines
- Use collapsible sections/groups (GitHub Actions groups, GitLab sections)
- Avoid excessive animation—it creates noise in logs
- Focus on clear step boundaries and summary information
- Include GitHub Actions-style markers: `::error::`, `::warning::`, `::notice::`

### Interactive vs Non-Interactive
- Detect if running in TTY: use animations and colors when interactive, plain text when piped
- Respect `CI=true` environment variable
- Check terminal width and adapt layout accordingly

## Language-Specific Implementations

### Python
- Use `colorama` for cross-platform color support
- Use `tqdm` for progress bars or `rich` for advanced formatting
- Example: `from colorama import Fore, Style; print(f"{Fore.GREEN}✓{Style.RESET_ALL} Success")`

### Bash
- Use `tput` for colors: `tput setaf 2` (green), `tput sgr0` (reset)
- Use `printf` with `\r` for progress updates
- Example: `echo "$(tput setaf 2)✓$(tput sgr0) Success"`

### Node.js/TypeScript
- Use `chalk` for colors and styling
- Use `cli-progress` or `ora` for progress indicators
- Example: `console.log(chalk.green('✓') + ' Success')`

## Testing Console Output

Before committing changes:
1. Run script in terminal with various widths (80, 120, 160+ columns)
2. Pipe output to file and verify it's readable: `./script.sh > output.log`
3. Test with `NO_COLOR=1` environment variable
4. Verify progress bars complete cleanly without artifacts
5. Check that all announced operations have corresponding completion messages
6. Verify timestamps (if used) align properly with dynamic content

## Maintenance Requirement

When modifying any script:
- Review all console output in affected functions
- Update progress indicators to reflect new steps
- Ensure message types are still appropriate
- Verify that visual hierarchy remains clear
- Update timing estimates if operation duration changes
- Check that emojis/symbols still make sense in new context
- Ensure timestamp format is appropriate for the script's context