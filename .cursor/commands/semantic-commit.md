# Semantic Commit

Stage all changed files and create a descriptive commit message that accurately documents the changes made to the application.

## Commit Message Guidelines

1. **Analyze Changes**: Review all outstanding changes across the codebase
2. **Group Related Changes**: Organize files whose changes are related logically into one or more groups to be staged
3. **Content Focus**: The commit message must state **what was changed in the code**, not describe what the code does
   - *Bad*: "Update component to allow searching" (Describes functionality)
   - *Good*: "Add debounce logic to input handler to reduce API calls" (Describes the change)
4. **Structure**: Use a clear subject line (50-72 characters) and optional body for details
5. **Scope**: Include the affected component or area (e.g., `frontend:`, `backend:`, `deploy:`, `config:`)

## Process

The agent must:
0. **Handle macOS invisible files**: Before analyzing changes, check for macOS-related invisible files (e.g., `.DS_Store`, `._*`, `.AppleDouble`, `.LSOverride`) in the repository. If any are detected in `git status` output or file listings:
   - Check if `.gitignore` exists in the repository root
   - If `.gitignore` exists, read it to check if macOS files are already ignored
   - If not already ignored, automatically add appropriate patterns to `.gitignore`:
     - `.DS_Store`
     - `**/.DS_Store`
     - `._*`
     - `.AppleDouble`
     - `.LSOverride`
   - If `.gitignore` doesn't exist, create it with these patterns
   - Stage the `.gitignore` changes as part of the configuration group
0.5. **Check for extraordinarily large files**: Before staging or committing, identify any files that are unusually large (typically > 5MB for source code repositories, or > 10MB for repositories that may legitimately contain assets):
   - Use `git status` and `git ls-files` to identify all files that will be staged or committed
   - Check file sizes using `ls -lh` or `du -h` for each file
   - Flag any files exceeding the size threshold (default: 5MB for code repos, 10MB for asset repos)
   - **IMPORTANT**: If any large files are detected, **STOP** and bring them to the user's attention:
     - List the file path(s) and size(s)
     - Ask the user to confirm if these files should be committed
     - Suggest alternatives if appropriate (e.g., Git LFS, external storage, `.gitignore`)
     - **DO NOT** proceed with staging or committing large files without explicit user confirmation
1. **Analyze all outstanding changes** using `git status`, `git diff`, and `git diff --staged`
2. **Understand the changes** by reviewing diffs to comprehend what was modified
3. **Group related files** logically (e.g., all frontend component changes, all backend API changes, all configuration changes)
4. **Compose clear commit messages** for each group that describe the technical changes made
5. **Stage files by group** and create separate commits for logically distinct changes
6. **Request user approval** before executing any commits

## Change Analysis

1. **Review All Changes**:
   - `git status` to see what files changed
   - **Check for macOS invisible files** in the output (`.DS_Store`, `._*`, etc.) and handle them via `.gitignore` if found
   - **Check file sizes** for any files that will be committed - flag files > 5MB (or > 10MB for asset repos) and get user confirmation before proceeding
   - `git diff` for unstaged changes
   - `git diff --staged` for staged changes
   - `git diff --stat` for summary of changes
   - Review each file's diff to understand the nature of changes

2. **Group Related Changes**:
   - Configuration changes (build config, deployment config, environment, `.gitignore` updates)
   - Frontend changes (UI components, styles, client-side logic)
   - Backend changes (API endpoints, server logic, database)
   - Documentation changes
   - Test changes
   - Infrastructure changes

3. **Draft Commit Messages**:
   - Start with a verb (Add, Update, Fix, Remove, Refactor, Configure)
   - Be specific about the technical change
   - Include component/file name if relevant
   - Use present tense ("Add" not "Added")
   - Describe what changed, not what the code does

4. **User Permission**:
   - **ALWAYS** ask the user for permission before executing any commits
   - **ALWAYS** alert the user about any large files (> 5MB or > 10MB) and get explicit confirmation before staging/committing them
   - Propose all commit messages to the user first
   - Show which files will be staged in each commit, including file sizes for large files
   - Wait for approval before running `git commit`

## Commit Message Format

```
<type>(<scope>): <subject>

<body (optional)>

<footer (optional)>
```

### Types

- **feat**: New feature (e.g., "feat(frontend): Add category filter component")
- **fix**: Bug fix (e.g., "fix(frontend): Fix domain detection in production")
- **refactor**: Code refactoring (e.g., "refactor(frontend): Extract domain detection logic to utility")
- **style**: Formatting, CSS changes (e.g., "style(frontend): Update landing page responsive styles")
- **config**: Configuration changes (e.g., "config: Update CloudFront distribution settings")
- **deploy**: Deployment-related changes (e.g., "deploy: Add CloudFront invalidation step")
- **docs**: Documentation updates (e.g., "docs: Update README with S3 deployment steps")
- **test**: Test additions or changes (e.g., "test(frontend): Add unit tests for SearchBox component")

### Scopes (Application-Specific)

Scopes should reflect the application's structure. Common scopes include:
- `frontend`: Frontend code changes
- `backend`: Backend code changes
- `api`: API endpoint changes
- `components`: Component-specific changes
- `utils`: Utility function changes
- `config`: Configuration files
- `deploy`: Deployment configuration
- `infra`: Infrastructure changes
- `docs`: Documentation files
- `tests`: Test changes

## Examples

### Good Commit Messages

**Example 1 - Component Update**:
```
feat(frontend): Add debounce logic to search input handler

- Extract input handler to separate function
- Add 300ms debounce to reduce API calls
- Update search state management
```

**Example 2 - Bug Fix**:
```
fix(api): Fix error handling in user authentication endpoint

Previously, authentication errors would return 500 instead of 401.
Now properly returns 401 Unauthorized for invalid credentials.
```

**Example 3 - Configuration**:
```
config: Update build output configuration for better cache busting

- Configure output filenames with content hashes
- Set proper asset file naming patterns
- Improve production build optimization
```

**Example 4 - Deployment**:
```
deploy: Add cache invalidation step to deployment workflow

Include cache invalidation after static asset upload to ensure
immediate updates are visible to users.
```

**Example 5 - Multiple Related Changes**:
```
refactor(backend): Extract database query logic to repository layer

- Create UserRepository class
- Move user queries from service to repository
- Update service methods to use repository
```

### Bad Commit Messages

- ❌ "Update frontend" (Too vague)
- ❌ "Fix bugs" (Not specific)
- ❌ "Changes to App.tsx" (Describes file, not change)
- ❌ "Added new feature" (Doesn't specify what)
- ❌ "WIP" (Work in progress - not descriptive)

## Common Change Patterns

### Frontend Changes
- "Add [feature] to [component]"
- "Update [component] to handle [scenario]"
- "Refactor [component] to use [pattern/approach]"
- "Fix [component] [issue description]"
- "Add [animation/transition] to [element]"
- "Update styles for [responsive/mobile/theme]"

### Backend Changes
- "Add [endpoint/feature] to [module]"
- "Update [endpoint] to handle [scenario]"
- "Refactor [module] to use [pattern/approach]"
- "Fix [endpoint] [issue description]"
- "Add validation for [input/data]"

### TypeScript/Type Changes
- "Add TypeScript types for [interface/type]"
- "Update [function] return type to [type]"
- "Fix type errors in [file/component]"

### Configuration Changes
- "Update [config file] to [change description]"
- "Add [setting] to [configuration]"
- "Configure [tool/service] for [purpose]"

### Database Changes
- "Add migration for [table/feature]"
- "Update schema for [table]"
- "Add index on [table.column]"

## Command Template

After analyzing changes, grouping files, and drafting messages:

```bash
# Check for large files before proceeding
git status
# Check file sizes for files to be committed
find . -type f -size +5M -not -path './.git/*' | while read file; do
  size=$(du -h "$file" | cut -f1)
  echo "Large file detected: $file ($size)"
done
# Alert user about any large files and get confirmation

# Analyze all changes
git status
git diff
git diff --staged

# Group 1: Frontend changes
git add frontend/src/components/...
git add frontend/src/utils/...
# Propose commit message to user
# [Show proposed message and files]

# After user approval:
git commit -m "feat(frontend): Add debounce logic to search input handler"

# Group 2: Configuration changes
git add package.json
git add vite.config.ts
# Propose commit message to user
# [Show proposed message and files]

# After user approval:
git commit -m "config: Update build output configuration for cache busting"
```

## Notes

- Always review the full diff before committing
- **Always check for large files** (> 5MB for code repos, > 10MB for asset repos) and get user confirmation before committing them
- Group related changes logically into separate commits
- Keep each commit focused on a single logical change
- Use `git add -p` for interactive staging if needed
- Never commit sensitive data (API keys, credentials)
- Never commit large files without explicit user confirmation - consider Git LFS or external storage for large assets
- Never auto-commit without user permission
- Create multiple commits if changes span different concerns
