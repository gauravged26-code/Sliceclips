# 🚀 SliceClips - Quick Start Guide

## ⏱️ 5-Minute Setup

Follow these steps to get SliceClips running on your machine:

### Step 1: Prepare (2 minutes)

```bash
# Install Node.js 18+ from https://nodejs.org/ if you don't have it

# Verify installation
node --version   # Should be v18 or higher
npm --version    # Should be v9 or higher

# Create a new directory
mkdir sliceclips-project
cd sliceclips-project
```

### Step 2: Setup Firebase (2 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Create project"
3. Enter name: `sliceclips`
4. Select your region
5. Click "Create project" (wait 1-2 minutes)

When done, you'll see your Firebase project dashboard.

### Step 3: Get Credentials (2 minutes)

#### Firebase Config:
1. Click ⚙️ (gear) → Project Settings
2. Scroll to "Your apps"
3. Click "</ >" (Web)
4. Register app: `sliceclips-web`
5. Copy the firebaseConfig object

#### Gemini API Key:
1. Go to [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Click "Get API Key" → "Create new API key"
3. Copy the key

#### Enable Firebase Services:
In Firebase console:
- Build → Authentication → Email/Password (enable)
- Build → Firestore Database → Create Database (Production mode)
- Build → Storage → Get Started

### Step 4: Clone & Setup (5 minutes)

```bash
# Download SliceClips files
# (You have these files already)

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local with your credentials:
# - Firebase API Key
# - Firebase Auth Domain
# - Firebase Project ID
# - Firebase Storage Bucket
# - Firebase Messaging Sender ID
# - Firebase App ID
# - Gemini API Key
```

### Step 5: Run! (1 minute)

```bash
npm run dev

# Open http://localhost:3000 in your browser
```

You should see SliceClips landing page! 🎉

---

## 🎯 First Test

1. Go to [http://localhost:3000](http://localhost:3000)
2. Click "Get Started" or "Sign Up"
3. Create an account
4. You'll see the dashboard
5. Try uploading a video!

---

## 📦 Deploy to Production (FREE)

### Option 1: Vercel (Recommended)

```bash
# 1. Create GitHub account if you don't have one
# 2. Push code to GitHub

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sliceclips.git
git push -u origin main

# 3. Go to vercel.com/new
# 4. Connect your GitHub repository
# 5. Add environment variables
# 6. Click Deploy

# Your app is now live at: https://sliceclips-xxx.vercel.app
```

### Option 2: Other Platforms

- **Netlify** - Similar to Vercel
- **Railway.app** - Easy deployment
- **Render.com** - Free tier available

---

## 🆘 Troubleshooting

### "Cannot find module" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Firebase not initialized" error
- Check all Firebase credentials in `.env.local`
- Make sure you created Firebase project
- Verify Firestore database exists

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Gemini API not working"
- Check API key is correct in `.env.local`
- Make sure you enabled the API
- Verify it's the right API key (not from OAuth)

---

## 📚 Full Documentation

For detailed setup, architecture, and feature documentation:
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup with screenshots
- **[README.md](./README.md)** - Full project documentation
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical details

---

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] Firebase project created
- [ ] Gemini API key obtained
- [ ] Environment variables filled in
- [ ] `npm install` completed
- [ ] `npm run dev` running
- [ ] App opens at localhost:3000
- [ ] Can create account
- [ ] Ready to deploy

---

## 🎓 Next Steps

1. ✅ Get it running locally
2. 🚀 Deploy to Vercel (free)
3. 💳 (Optional) Add Stripe for Pro plan
4. 📹 (Optional) Add Cloudinary for video storage
5. 🎯 Start marketing

---

## 💬 Questions?

1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) - most answers are there
2. Check browser console (F12) for error messages
3. Verify all credentials are correct
4. Restart your development server

---

## 🎉 You're Ready!

You now have a complete, production-ready video clipping platform.

**Time invested: ~30 minutes**
**Cost: $0 (free tier)**
**Revenue potential: Unlimited**

Good luck! 🚀

Questions? Check SETUP_GUIDE.md or README.md
