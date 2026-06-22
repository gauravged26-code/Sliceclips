# SliceClips - Complete Setup & Deployment Guide

Welcome! This guide will walk you through setting up SliceClips from scratch and deploying it to the world.

## 📋 Table of Contents
1. Prerequisites
2. Project Setup
3. Firebase Configuration
4. Environment Variables
5. Running Locally
6. Deployment
7. Additional Features
8. Troubleshooting

---

## 1️⃣ Prerequisites

Before starting, you'll need:
- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- **Git** ([download](https://git-scm.com/))
- A **Firebase account** (free tier available at [firebase.google.com](https://firebase.google.com))
- A **Google Gemini API key** (free tier at [makersuite.google.com](https://makersuite.google.com))

---

## 2️⃣ Project Setup

### Step 1: Clone/Download the Project

```bash
# If you have git
git clone <your-repo-url> sliceclips
cd sliceclips

# Or manually download and extract the files
cd sliceclips
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~1-2 minutes).

---

## 3️⃣ Firebase Configuration

Firebase is our backend for user authentication and data storage.

### Step 1: Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"**
3. Enter project name: `sliceclips` (or your preferred name)
4. Select your region
5. Click **"Create project"** (wait 1-2 minutes)

### Step 2: Get Firebase Credentials

1. In Firebase console, click the **gear icon** → **Project settings**
2. Go to **"Your apps"** section
3. Click **"</ >"** (Web) icon
4. Register app with name `sliceclips-web`
5. Copy the config object that appears:

```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### Step 3: Enable Firebase Services

In Firebase console:

#### Authentication
1. Go to **"Build"** → **"Authentication"**
2. Click **"Get started"**
3. Enable **"Email/Password"** provider

#### Firestore Database
1. Go to **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Start in **"Production mode"**
4. Choose location closest to you
5. Click **"Enable"**

#### Storage
1. Go to **"Build"** → **"Storage"**
2. Click **"Get started"**
3. Accept default settings
4. Click **"Done"**

---

## 4️⃣ Environment Variables

### Step 1: Create .env.local file

```bash
# In your project root directory, rename .env.local.example to .env.local
cp .env.local.example .env.local
```

### Step 2: Fill in the variables

Open `.env.local` and add your Firebase credentials:

```env
# Firebase (from Step 3 above)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Gemini API (for AI clipping)
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
JWT_SECRET=your_super_secret_key_min_32_characters
```

### Step 3: Get Gemini API Key

1. Go to [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Click **"Get API Key"**
3. Create new API key
4. Copy and paste into `.env.local`

---

## 5️⃣ Running Locally

### Start the Development Server

```bash
npm run dev
```

You should see:
```
> Local:        http://localhost:3000
> Environments: .env.local
```

### Access Your App

Open [http://localhost:3000](http://localhost:3000) in your browser

You should see the SliceClips landing page! 🎉

---

## 6️⃣ Deployment to Vercel (FREE)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Authorize Vercel to access your GitHub

### Step 2: Create GitHub Repository (if you haven't already)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/sliceclips.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Vercel will auto-detect Next.js
4. Add environment variables:
   - Copy all variables from your `.env.local`
   - Paste into Vercel's "Environment Variables" section
5. Click **"Deploy"** (takes 2-3 minutes)

### Step 4: Get Your Domain

After deployment, Vercel will give you a URL like:
```
https://sliceclips-abc123.vercel.app
```

You now have a FREE hosted SliceClips! 🚀

### Optional: Custom Domain

1. In Vercel dashboard, go to **"Settings"** → **"Domains"**
2. Add your domain (sliceclips.com, etc.)
3. Update DNS settings at your domain registrar

---

## 7️⃣ Adding More Features

### Step 1: Connect Stripe (for payments)

1. Create account at [stripe.com](https://stripe.com)
2. Get publishable and secret keys
3. Add to `.env.local`:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Step 2: Connect Cloudinary (for video storage)

1. Sign up at [cloudinary.com](https://cloudinary.com) (FREE tier: 25GB/month)
2. Get credentials from dashboard
3. Add to `.env.local`:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 8️⃣ Project Structure

```
sliceclips/
├── app/                    # Next.js pages & layouts
│   ├── page.tsx           # Home page
│   ├── signup/            # Signup page
│   ├── login/             # Login page
│   ├── dashboard/         # User dashboard
│   ├── editor/            # Video editor
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                   # Utilities & configs
│   ├── firebase.ts        # Firebase setup
│   ├── auth.ts            # Auth functions
│   ├── ai.ts              # AI clipping functions
│   ├── store.ts           # State management
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── .env.local.example     # Environment template
```

---

## 🆘 Troubleshooting

### Issue: "Module not found" error

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Firebase not initializing

**Solution:** Check that all environment variables in `.env.local` are correct

### Issue: Port 3000 already in use

**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: Deployment fails on Vercel

**Solution:**
1. Check that all environment variables are added in Vercel dashboard
2. Make sure `.env.local` is in `.gitignore`
3. Clear Vercel cache: Dashboard → Settings → Git → Clear Cache

---

## 🎯 Next Steps

1. **Test locally** - Create an account and test features
2. **Deploy to Vercel** - Go live for free
3. **Add custom domain** - Use your own domain name
4. **Configure Stripe** - Enable Pro plan payments
5. **Add Cloudinary** - Enable video storage

---

## 📚 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## 🤝 Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Review error messages carefully
3. Check browser console (F12) for errors
4. Verify all environment variables are correct

---

## 🎉 Congratulations!

You now have a fully functional SliceClips application running locally and deployed to the world!

**Total setup time: ~20-30 minutes**

Start building! 🚀
