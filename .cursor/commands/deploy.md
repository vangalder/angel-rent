# Deploy Application

Deploy the complete application to its hosting platform, refreshing the deployment reliably and repeatably.

## What This Command Does

1. **Scans codebase** to understand the application's deployment architecture
2. **Identifies deployment platform** (AWS, Vercel, Heroku, Railway, etc.)
3. **Validates prerequisites** (platform CLI tools, credentials, dependencies)
4. **Builds application** (if needed) using detected build system
5. **Deploys application** using the appropriate deployment method
6. **Verifies deployment** (health checks, status verification, smoke tests)

## Execution Instructions

The agent must:

1. **Analyze the codebase** to determine:
   - Deployment platform (check for platform-specific config files)
   - Build system and commands
   - Deployment scripts or configuration
   - Infrastructure as code files (Terraform, CloudFormation, etc.)

2. **Identify deployment method** by scanning for:
   - Platform-specific files (`.vercel/`, `serverless.yml`, `samconfig.toml`, `Procfile`, etc.)
   - CI/CD configuration (`.github/workflows/`, `.gitlab-ci.yml`, etc.)
   - Deployment scripts (`deploy.sh`, `scripts/deploy.js`, etc.)
   - Infrastructure definitions (`terraform/`, `cloudformation/`, etc.)

3. **Execute deployment** using the identified method:
   - Run platform-specific CLI commands
   - Execute deployment scripts
   - Apply infrastructure changes
   - Build and deploy application artifacts

4. **Verify deployment** by:
   - Checking deployment status
   - Running health checks
   - Testing critical endpoints
   - Verifying services are running

## Platform Detection

The agent should look for these indicators:

### AWS
- `samconfig.toml`, `template.yaml`, `serverless.yml`
- `aws/` directory, CloudFormation templates
- AWS CLI commands in scripts

### Vercel
- `.vercel/` directory, `vercel.json`
- Vercel CLI commands

### Heroku
- `Procfile`, `app.json`
- Heroku CLI commands

### Railway
- `railway.json`, `railway.toml`
- Railway CLI commands

### Docker/Container
- `Dockerfile`, `docker-compose.yml`
- Container registry references

### Static Hosting
- Build output directories (`dist/`, `build/`, `out/`)
- Static site generators (Next.js, Gatsby, etc.)

## Prerequisites Validation

Before deploying, validate:
- Platform CLI tools are installed and authenticated
- Required environment variables are set
- Dependencies are installed
- Build tools are available
- Credentials have necessary permissions

## Deployment Process

1. **Pre-deployment checks**:
   - Verify git status (uncommitted changes warning)
   - Check environment variables
   - Validate configuration files

2. **Build phase** (if applicable):
   - Install dependencies
   - Run build commands
   - Generate deployment artifacts

3. **Deployment phase**:
   - Execute platform-specific deployment
   - Monitor deployment progress
   - Handle deployment errors gracefully

4. **Post-deployment verification**:
   - Check deployment status
   - Run smoke tests
   - Verify endpoints are accessible
   - Confirm services are healthy

## Error Handling

- Stop on errors and report clearly
- Provide actionable error messages
- Suggest troubleshooting steps
- Preserve deployment logs for debugging

## Notes

- Always respect the application's existing deployment process
- Do not modify deployment configuration without explicit user request
- Preserve any existing deployment scripts or workflows
- Document any platform-specific requirements discovered
