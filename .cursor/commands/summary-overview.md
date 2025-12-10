# Application Summary Overview

Generate a comprehensive, high-quality overview of the current state of the application by re-scanning the codebase from scratch, analyzing how everything works, and presenting a comprehensive summary along with suggestions for next steps based on the stated objectives of the project.

## Purpose

This command provides a structured overview of the application's architecture, deployment status, current implementation, and next steps based on the project's objectives.

## Usage

The agent must:

1. **Re-scan the codebase from scratch** - Do not rely on previous knowledge
2. **Analyze the entire application** - Understand architecture, components, and structure
3. **Identify project objectives** - From README, documentation, or code comments
4. **Present comprehensive summary** - Cover all aspects of the application
5. **Suggest next steps** - Based on stated objectives and current state

## Expected Output Sections

When generating the overview, include:

1. **Application Overview**: Purpose, core functionality, and business goals (from project documentation)
2. **Architecture**: Technology stack, deployment infrastructure, and component structure
3. **Deployment Status**: Current hosting platform and deployment state
4. **Component/Module Status**: Implementation status of key components, modules, or services
5. **Data Flow**: How the application processes data, handles requests, and manages state
6. **Recent Changes**: Changes made in the current session (if any)
7. **Recommended Next Steps**: Based on project objectives and current state

### 1. Application Overview
- Purpose: Identify from README, documentation, or code comments
- Core Functionality: What the application does
- Business Goals: Objectives stated in project documentation
- Current Stage: Development phase or deployment status

### 2. Architecture Overview

**Technology Stack**:
- Frontend framework and libraries
- Backend framework and runtime
- Database and data storage
- Build tools and tooling
- Testing frameworks

**Project Structure**:
- Directory organization
- Key files and their purposes
- Module/component organization
- Configuration files

**Deployment Infrastructure**:
- Hosting platform (AWS, Vercel, Heroku, etc.)
- Deployment method
- Infrastructure as code (if applicable)
- Monitoring and logging

### 3. Component/Module Status

For each major component or module:
- Implementation status (✅ Complete, ⚠️ Partial, ❌ Missing)
- Key functionality
- Dependencies
- Integration points

### 4. Data Flow

**Request/Response Flow**:
- How requests are handled
- Data processing pipeline
- State management approach
- API interactions

**Build and Deployment Flow**:
- Build process
- Deployment steps
- Environment configuration

### 5. Current Capabilities

**What Works**:
- Implemented features
- Functional components
- Working integrations

**What's Pending**:
- Planned features
- Incomplete functionality
- Known limitations

### 6. Recent Changes

Document any changes made in the current session:
- Component updates
- Configuration changes
- Deployment improvements
- Bug fixes
- Feature additions

### 7. Recommended Next Steps

Based on project objectives and current state:

**Immediate**:
- Critical tasks to complete current phase
- Blocking issues to resolve
- Essential testing or verification

**Short-term**:
- Next development phase
- Planned features
- Infrastructure improvements

**Long-term**:
- Strategic goals
- Major feature development
- Scalability considerations

## Output Format

- **Section Headings**: Clear markdown structure with ## and ###
- **Status Indicators**: ✅ (Complete), ⚠️ (In Progress/Partial), ❌ (Pending), 🔄 (In Development)
- **Technical Details**: Reference specific file names, functions, and configurations
- **Code References**: Use proper code reference format when citing existing code
- **Next Steps**: Actionable items based on project objectives

## Analysis Process

1. **Start Fresh**: Re-scan the entire codebase without assumptions
2. **Read Documentation**: Check README, docs/, and any project documentation
3. **Analyze Structure**: Understand directory layout and file organization
4. **Identify Technologies**: Determine frameworks, libraries, and tools used
5. **Map Dependencies**: Understand how components/modules interact
6. **Check Deployment**: Identify hosting platform and deployment method
7. **Review Objectives**: Find stated goals in documentation or code comments
8. **Assess Status**: Determine what's complete vs. what's pending

## Notes

- Do not rely on previous knowledge - always re-scan
- Check README.md for project overview and objectives
- Review package.json, requirements.txt, or similar for dependencies
- Look for deployment configuration files
- Check for project documentation in docs/ or similar directories
- Review .cursor/rules/ for project-specific guidelines
- Examine key source files to understand implementation
