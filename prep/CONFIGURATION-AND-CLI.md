# angel.rent - Configuration & CLI Commands

## Configuration Values

### Domain & Project
- **Custom Domain**: `angel.rent`
- **Vercel Project Name**: `angel-rent`
- **Domain Registrar**: Namecheap
- **Alert Email**: `trevor@vangalder.com`

### Analytics
- **Google Analytics Property ID**: `G-7VXBQY7W2F`

### API Keys
- **SendGrid API Key**: `[STORED_IN_VERCEL_ENV_VARIABLES]`

---

## Vercel CLI Commands

### Initial Setup

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Link project to Vercel (run from project root)
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: Select your account
# - Link to existing project: N (first time)
# - Project name: angel-rent
# - Directory: ./
# - Override settings: N
```

### Environment Variables

```bash
# Add SendGrid API key
vercel env add SENDGRID_API_KEY
# Paste: [YOUR_SENDGRID_API_KEY]
# Environment: Production, Preview, Development

# Add Google Analytics ID (already public in vercel.json)
# No action needed - it's in NEXT_PUBLIC_GA_ID

# Vercel KV is added automatically when you enable it in dashboard
```

### Vercel KV Setup

```bash
# Enable Vercel KV (Redis) via Dashboard:
# 1. Go to project dashboard
# 2. Storage tab → Create Database
# 3. Select "KV" (Redis)
# 4. Name: angel-rent-kv
# 5. Region: Washington, D.C., USA (iad1)
# 6. Environment variables are added automatically
```

### Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview (test before production)
vercel

# Check deployment status
vercel ls

# View deployment logs
vercel logs [DEPLOYMENT_URL]
```

### Domain Configuration

```bash
# Add custom domain
vercel domains add angel.rent

# Check domain status
vercel domains ls

# Inspect domain configuration
vercel domains inspect angel.rent
```

---

## DNS Configuration (Namecheap)

### Option 1: A Records (Recommended)

1. Log into Namecheap account
2. Navigate to: Domain List → Manage (angel.rent) → Advanced DNS
3. Add the following A records:

```
Type: A Record
Host: @
Value: 76.76.19.19
TTL: Automatic

Type: A Record  
Host: www
Value: 76.76.19.19
TTL: Automatic
```

### Option 2: CNAME Records

```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Note**: Root domain (@) cannot use CNAME. Use A records or Namecheap's ALIAS record feature if available.

### Verification

After DNS configuration:
- Wait 24-48 hours for full global propagation
- Typical propagation: 1-6 hours
- Check status: `vercel domains inspect angel.rent`
- Test DNS: `nslookup angel.rent` or `dig angel.rent`

---

## SSL Certificate

**No configuration needed!**

Vercel automatically:
- Provisions SSL certificate via Let's Encrypt
- Renews certificates before expiration
- Redirects HTTP → HTTPS
- Certificate activates within minutes of DNS propagation

Verify SSL:
```bash
curl -I https://angel.rent
```

---

## Monitoring & Alerts

### Enable Vercel Analytics

1. Go to Project Dashboard → Analytics
2. Enable Web Analytics
3. Enable Speed Insights

### Configure Alerts

1. Go to Project Settings → Notifications
2. Add email: `trevor@vangalder.com`
3. Enable alerts for:
   - Deployment failures
   - High error rates (threshold: 5% over 5 minutes)
   - Function timeouts
   - Build errors

### Monitor Deployments

```bash
# View recent deployments
vercel ls

# Check specific deployment
vercel inspect [DEPLOYMENT_URL]

# View logs
vercel logs [DEPLOYMENT_URL] --follow

# Check function analytics
vercel analytics
```

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables

**Development**: Uses `.env.local` (not committed)
**Production**: Uses Vercel environment variables

### Storage Behavior

- **Development**: Writes to `data/waitlist.json`
- **Production**: Uses Vercel KV (Redis)

---

## Deployment Checklist

- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Link project: `vercel`
- [ ] Enable Vercel KV database
- [ ] Add environment variable: `SENDGRID_API_KEY`
- [ ] Deploy: `vercel --prod`
- [ ] Add domain: `vercel domains add angel.rent`
- [ ] Configure DNS at Namecheap
- [ ] Verify SSL certificate active
- [ ] Enable Vercel Analytics
- [ ] Configure email alerts to `trevor@vangalder.com`
- [ ] Test waitlist form submission
- [ ] Verify email notifications received
- [ ] Check Google Analytics tracking

---

## Troubleshooting

### Deployment Issues

```bash
# View build logs
vercel logs [DEPLOYMENT_URL]

# Redeploy
vercel --prod --force

# Clear build cache
vercel --prod --force --no-cache
```

### Domain Not Working

```bash
# Check DNS propagation
dig angel.rent
nslookup angel.rent

# Check Vercel domain status
vercel domains inspect angel.rent

# Remove and re-add domain
vercel domains rm angel.rent
vercel domains add angel.rent
```

### Environment Variables

```bash
# List all environment variables
vercel env ls

# Remove and re-add if incorrect
vercel env rm SENDGRID_API_KEY production
vercel env add SENDGRID_API_KEY production
```

### Email Not Sending

1. Verify SendGrid API key is correct
2. Check SendGrid dashboard for errors
3. Ensure `trevor@vangalder.com` is verified sender in SendGrid
4. Check function logs: `vercel logs [DEPLOYMENT_URL]`

---

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel CLI Reference**: https://vercel.com/docs/cli
- **SendGrid Documentation**: https://docs.sendgrid.com
- **Vercel KV Documentation**: https://vercel.com/docs/storage/vercel-kv

---

## Change Log

- **2024-12-10**: Initial configuration and deployment

