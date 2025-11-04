# Deployment Guide

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy

**Or use CLI:**
```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Or use CLI:**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

### Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create new project
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`

## 📦 Manual Deployment

Build the production files:
```bash
npm run build
```

The `dist` folder contains your production-ready files. Upload this folder to any static hosting service.

## 🔧 Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

2. Access in code:
```ts
const apiUrl = import.meta.env.VITE_API_URL
```

3. For production, set environment variables in your hosting platform's dashboard.

## ⚙️ Build Optimization

To analyze bundle size:
```bash
npm run build -- --mode analyze
```

To preview production build locally:
```bash
npm run preview
```

## 🌐 Custom Domain

Most hosting platforms allow custom domains:
1. Add domain in hosting dashboard
2. Update DNS records (usually A or CNAME)
3. Enable HTTPS (usually automatic)

## 📊 Analytics (Optional)

Add Google Analytics by updating `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Headers

Add security headers in your hosting platform or via `_headers` file (Netlify/Cloudflare):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## ✅ Pre-Deployment Checklist

- [ ] Update personal information in components
- [ ] Replace placeholder images
- [ ] Update links (GitHub, Twitter, LinkedIn, etc.)
- [ ] Test responsive design on mobile/tablet
- [ ] Check dark/light mode
- [ ] Test all navigation links
- [ ] Optimize images (compress, use WebP)
- [ ] Add meta tags for SEO
- [ ] Test build locally (`npm run build && npm run preview`)
- [ ] Update README with your info

## 🐛 Troubleshooting

**Build fails:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist .vite`

**Blank page after deployment:**
- Check `base` in `vite.config.ts`
- Check browser console for errors
- Verify build output in `dist` folder

**Assets not loading:**
- Ensure correct `base` path in config
- Use relative paths for assets
- Check network tab in browser DevTools
