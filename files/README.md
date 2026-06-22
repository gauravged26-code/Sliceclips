# 🎬 SliceClips - AI-Powered Video Clipping Platform

Transform long-form videos into viral short clips with AI-powered automation. Perfect for podcasters, streamers, content creators, and anyone who wants to repurpose video content at scale.

## ✨ Features

- **🤖 AI-Powered Clip Detection** - Automatically identifies the best viral moments
- **📱 Multi-Platform Optimization** - Optimizes for TikTok, Instagram Reels, YouTube Shorts
- **⚡ Fast Processing** - Clip long videos in minutes, not hours
- **🎯 Viral Scoring** - AI rates clip potential (0-100 score)
- **🔤 Auto-Captions** - Generates captions in 30+ languages
- **🚀 One-Click Publishing** - Export to multiple platforms simultaneously
- **💰 Flexible Pricing** - Free plan + affordable Pro tier
- **🔐 Secure** - Built with Firebase for reliability

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account (free)
- Google Gemini API key (free)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/sliceclips.git
cd sliceclips

# 2. Install dependencies
npm install

# 3. Copy environment template
cp .env.local.example .env.local

# 4. Add your credentials to .env.local
# (See SETUP_GUIDE.md for detailed instructions)

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📚 Documentation

### Getting Started
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Step-by-step setup and deployment
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture overview

### Configuration
- **Firebase** - See SETUP_GUIDE.md Step 3
- **Environment Variables** - See SETUP_GUIDE.md Step 4
- **Google Gemini API** - See SETUP_GUIDE.md Step 4

## 🏗️ Architecture

### Tech Stack

```
Frontend:
- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS (styling)
- Zustand (state management)

Backend:
- Firebase Auth (authentication)
- Firestore (database)
- Firebase Storage (file storage)
- Google Gemini API (AI clipping)
- Stripe (payments)
- Cloudinary (video storage)

Deployment:
- Vercel (free hosting)
```

### Project Structure

```
sliceclips/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home/landing page
│   ├── signup/page.tsx          # Sign up page
│   ├── login/page.tsx           # Login page
│   ├── dashboard/page.tsx       # User dashboard
│   ├── editor/page.tsx          # Video editor
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── api/                     # API routes
│
├── components/                   # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── auth/
│   ├── editor/
│   └── ...
│
├── lib/                         # Core utilities
│   ├── firebase.ts              # Firebase config
│   ├── auth.ts                  # Authentication
│   ├── ai.ts                    # AI clipping engine
│   ├── store.ts                 # Zustand store
│   └── utils.ts                 # Helper functions
│
├── public/                      # Static files
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
└── next.config.js               # Next.js config
```

## 🔑 Key Components

### Authentication System
- Email/password signup and login
- Firebase Authentication
- User profiles with usage tracking
- Plan management (Free/Pro/Enterprise)

### Video Processing
- YouTube URL support
- Local file uploads
- Transcription integration (ready for AssemblyAI)
- AI-powered moment detection

### Clipping Engine
- Viral moment detection (0-100 score)
- Automatic caption generation
- Multi-language support
- Platform-specific formatting

### Dashboard
- Project management
- Clip history
- Usage analytics
- Export options

## 💳 Pricing Plans

### Free
- 3 clips per month
- Basic captions
- Manual editing
- Perfect for trying it out

### Pro ($19.99/month)
- Unlimited AI-powered clips
- Viral moment detection
- Auto-captions (30+ languages)
- Smart platform optimization
- One-click publishing
- Perfect for creators

### Enterprise (Custom)
- Everything in Pro
- Team collaboration
- API access
- Dedicated support
- Perfect for agencies

## 🚀 Deployment

### Deploy to Vercel (Recommended - FREE)

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com/new
# 3. Select your repository
# 4. Add environment variables
# 5. Click Deploy

# Your app is live! 🎉
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment instructions.

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create `.env.local` with:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...

# Google Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=...

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 📊 Usage Examples

### Create Your First Clip

```javascript
// In your component
import { analyzeTranscriptForClips } from '@/lib/ai';

const clips = await analyzeTranscriptForClips(transcript, duration);
// Returns array of ClipSegment objects with:
// - startTime, endTime
// - viralScore (0-100)
// - hook & reason
```

### User Authentication

```javascript
import { signUpUser, signInUser } from '@/lib/auth';

// Sign up
const user = await signUpUser(email, password, displayName);

// Sign in
const user = await signInUser(email, password);
```

### State Management

```javascript
import { useAppStore } from '@/lib/store';

const { user, currentProject, clips } = useAppStore();
const { setCurrentProject, addProject } = useAppStore();
```

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🆘 Support

Need help?

- Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for setup issues
- Review [ARCHITECTURE.md](./ARCHITECTURE.md) for technical questions
- Open an issue on GitHub for bugs
- Contact us at support@sliceclips.com

## 🎯 Roadmap

- [ ] Advanced video editing tools
- [ ] Team collaboration features
- [ ] Live stream clipping
- [ ] More AI models for better detection
- [ ] Mobile app
- [ ] Affiliate program
- [ ] API for third-party integrations

## 📈 Performance

SliceClips is built for performance:

- **Fast Loading** - Optimized Next.js bundling
- **Real-time Updates** - Firebase realtime listeners
- **Efficient Processing** - Optimized AI models
- **Scalable** - Built on serverless infrastructure

## 🔐 Security

Your content is secure:

- Firebase security rules
- Encrypted data transmission
- No unauthorized access
- GDPR compliant
- Regular security audits

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Backend
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini](https://ai.google.dev/) - AI
- [Zustand](https://github.com/pmndrs/zustand) - State management

## 📞 Contact

- Email: hello@sliceclips.com
- Twitter: [@sliceclips](https://twitter.com/sliceclips)
- Website: [sliceclips.com](https://sliceclips.com)

---

**Made with ❤️ for creators**

SliceClips - Turn your content into viral moments.
