Here’s a deployment plan to replace the site at http://bfresh.mx/. Your Next.js 14 app works on several platforms.
Deployment Options for Next.js
Option 1: Vercel (Recommended for Next.js)
Vercel is built by the Next.js team and offers the simplest deployment:
Steps:
Push your code to GitHub/GitLab/Bitbucket
Sign up at vercel.com
Import your repository
Vercel auto-detects Next.js and deploys
Add your custom domain bfresh.mx:
In Vercel dashboard → Project Settings → Domains
Add bfresh.mx and www.bfresh.mx
Update your DNS records as instructed
SSL certificates are provided automatically
Pros: Easy, fast, free tier, automatic SSL, CDN included
Cons: May need a paid plan for certain features
Option 2: Netlify
Similar to Vercel, good Next.js support:
Steps:
Push code to Git repository
Sign up at netlify.com
Import repository
Build settings:
Build command: npm run build
Publish directory: .next (or configure for Next.js)
Add custom domain in Netlify dashboard
Update DNS records
Pros: Free tier, good Next.js support, automatic SSL
Cons: Slightly more configuration than Vercel
Option 3: VPS/Server Hosting (cPanel, DigitalOcean, AWS, etc.)
If you want to use your existing hosting provider:
Steps:
Build the Next.js application:
   npm run build
You have two options:
A. Standalone Output (Recommended for servers):
Update next.config.js:
   const nextConfig = {     reactStrictMode: true,     output: 'standalone',   }      module.exports = nextConfig
Then build and deploy the .next/standalone folder.
B. Node.js Server:
Upload the entire project
Install Node.js 18+ on the server
Run npm install --production
Run npm run build
Use PM2 or similar to run npm start continuously
Set up reverse proxy (nginx/Apache) to forward requests to port 3000
Configure your web server (nginx/Apache) as a reverse proxy
Point your domain DNS to the server IP
Option 4: Static Export (if no server-side features needed)
If your site doesn't need server-side rendering or API routes:
Update next.config.js:
const nextConfig = {  reactStrictMode: true,  output: 'export',  images: {    unoptimized: true,  }}module.exports = nextConfig
Then build:
npm run build
This creates a out/ folder with static files that can be uploaded to any web hosting (including your current hosting).
Domain Migration Process (bfresh.mx)
Test the new site on a temporary URL (Vercel/Netlify provide one)
Verify everything works (forms, images, navigation)
Update DNS records:
Find where bfresh.mx DNS is managed (domain registrar or current host)
Add/modify records per your hosting provider’s instructions
For Vercel/Netlify: Update A/CNAME records as specified
Wait for DNS propagation (can take 24–48 hours)
Monitor and switch when ready
Pre-Deployment Checklist
Before deploying, ensure:
[ ] Test production build locally: npm run build && npm start
[ ] Remove all placeholder content
[ ] Verify all images are in public/images/ or properly referenced
[ ] Test contact form functionality
[ ] Verify all links work
[ ] Check mobile responsiveness
[ ] Test Google Maps integration
[ ] Verify environment variables (if any) are documented
[ ] Update contact information (email, phone) if needed
Recommended Approach
For a Next.js site, start with Vercel:
Fastest to deploy
Optimized for Next.js
Free SSL
Global CDN
Simple domain setup
Would you like help setting up any of these options, or do you have a specific hosting preference for bfresh.mx?