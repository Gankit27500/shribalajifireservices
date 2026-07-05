# Deployment Guide: Shri Balaji Fire Security Services

This project is built using **Next.js**, **TypeScript**, and **Tailwind CSS**. Below are the step-by-step instructions for the three most common deployment methods.

---

## Option 1: Deploying on Vercel (Recommended & Easiest)
Vercel is the creator of Next.js and offers the best hosting experience with automatic SSL, global CDN, and git-push deployment.

### Steps:
1. Push your project codebase to a **GitHub**, **GitLab**, or **Bitbucket** repository.
2. Sign up or log into [Vercel](https://vercel.com).
3. Click the **"Add New..."** button and select **"Project"**.
4. Import your git repository.
5. Vercel will automatically detect that it is a Next.js project. You do not need to change any build settings:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click **"Deploy"**. Your site will be live in 1–2 minutes with an automatic SSL certificate.

---

## Option 2: Deploying on Shared Hosting (Hostinger, cPanel, GoDaddy)
If you want to host this on traditional shared hosting without running a Node.js server, you can configure Next.js to build static HTML files.

### Steps:
1. Open [next.config.ts](file:///c:/Users/Lenovo/Desktop/Shrii/next.config.ts) in your project and update it to enable static exports:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export", // Add this line
     images: {
       unoptimized: true, // Required for static export
     }
   };

   export default nextConfig;
   ```
2. Run the build command locally:
   ```bash
   npm run build
   ```
3. Once completed, a new folder named `out` will be created in your root directory.
4. Compress the contents of this `out` directory into a `.zip` file.
5. Log into your hosting account's file manager (cPanel or Hostinger hPanel).
6. Upload and extract the zip contents directly into the `public_html` directory of your domain.

---

## Option 3: Deploying on a VPS (AWS, DigitalOcean, Linode)
If you are hosting on a virtual private server, you can run a production-ready Node.js server using a process manager like **PM2**.

### Steps:
1. SSH into your VPS and install **Node.js** (v18+) and **PM2**:
   ```bash
   npm install -g pm2
   ```
2. Clone your repository onto the server and navigate into the folder:
   ```bash
   git clone <your-repo-link> && cd Shrii
   ```
3. Install dependencies and compile the production build:
   ```bash
   npm install
   npm run build
   ```
4. Start the application with PM2:
   ```bash
   pm2 start npm --name "shrii-app" -- start -- -p 3000
   ```
5. Set up a reverse proxy using **Nginx** to map your domain to `http://localhost:3000` and configure SSL using **Certbot/Let's Encrypt**.
