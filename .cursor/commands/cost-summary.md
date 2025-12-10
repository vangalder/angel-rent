# Cost Analysis Report Generator

Generate comprehensive, accurate cost analysis reports for applications deployed on any platform, determining what services and infrastructure the application consumes and how much cost it generates.

## What This Command Does

1. **Platform Detection**: Identifies the hosting platform (AWS, Vercel, Heroku, Railway, etc.)
2. **Codebase Analysis**: Scans codebase to identify services, APIs, and infrastructure dependencies
3. **Cost Data Collection**: Retrieves cost data from platform APIs and billing systems
4. **Usage Analysis**: Calculates costs from usage metrics when direct billing data is unavailable
5. **External Service Costs**: Identifies and calculates costs for third-party services (APIs, databases, etc.)
6. **Resource Discovery**: Discovers all infrastructure resources used by the application
7. **Report Generation**: Creates comprehensive reports in multiple formats (Markdown, HTML, JSON)
8. **Optimization Recommendations**: Provides data-driven cost optimization suggestions

## Execution Instructions

The agent must:

1. **Identify the hosting platform** by scanning for:
   - Platform-specific configuration files
   - Deployment manifests
   - Infrastructure as code files
   - Platform CLI usage in scripts

2. **Scan the codebase** to identify:
   - Cloud services and infrastructure used
   - External APIs and third-party services
   - Database services
   - Storage services
   - Compute resources
   - Network/CDN services

3. **Collect cost data** using platform-specific methods:
   - **AWS**: Cost Explorer API, CloudWatch metrics, resource tagging
   - **Vercel**: Vercel CLI billing commands, usage API
   - **Heroku**: Heroku CLI billing, add-on costs
   - **Railway**: Railway CLI billing, usage metrics
   - **Other platforms**: Platform-specific billing APIs or dashboards

4. **Calculate costs** when direct billing data is unavailable:
   - Use usage metrics with current pricing
   - Estimate from resource configurations
   - Query platform APIs for pricing information

5. **Generate reports** including:
   - Total monthly/annual costs
   - Cost breakdown by service
   - Cost trends over time
   - Resource-level cost attribution
   - Optimization recommendations

## Platform-Specific Implementation

### AWS
- Use Cost Explorer API for billing data
- Fall back to CloudWatch metrics for usage-based calculations
- Discover resources via AWS service APIs
- Verify and recommend resource tagging for cost allocation

### Vercel
- Query Vercel billing API or CLI
- Analyze usage metrics (bandwidth, function invocations, etc.)
- Check for Pro/Enterprise plan costs
- Identify external service costs

### Heroku
- Query Heroku billing API
- Calculate dyno costs (web, worker, etc.)
- Sum add-on costs (databases, Redis, etc.)
- Include data transfer costs

### Railway
- Query Railway billing API
- Calculate service costs
- Include database and storage costs
- Check for usage-based pricing

### Generic/Unknown Platform
- Scan codebase for service references
- Estimate costs from configuration files
- Document discovered services
- Recommend manual cost verification

## Report Structure

### Executive Summary
- Total monthly/annual cost
- Cost breakdown by category
- Cost trends
- Key cost drivers

### Service Breakdown
- Infrastructure costs (compute, storage, networking)
- Database costs
- External API costs
- Third-party service costs

### Resource Details
- Individual resource costs
- Usage metrics
- Cost per resource type

### Optimization Recommendations
- High-impact cost reduction opportunities
- Estimated savings
- Implementation effort
- Risk assessment

## Output Files

Reports are generated in `prep/cost-analysis/`:
- **cost-summary.md**: Executive-ready Markdown report
- **cost-dashboard.html**: Interactive HTML dashboard
- **cost-data.json**: Structured JSON data for programmatic access

## Notes

- Auto-detect application name from git repository or directory
- Support multiple environments (production, staging, development)
- Handle cases where billing APIs are unavailable
- Provide actionable recommendations with estimated savings
- Document assumptions and data sources
- Include links to platform billing dashboards
