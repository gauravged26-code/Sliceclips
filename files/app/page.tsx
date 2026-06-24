'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Zap, TrendingUp, Users, Check, ArrowRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function Home() {
  const { isAuthenticated } = useAppStore();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold">
                  🚀 AI-Powered Video Clipping
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Turn Long Videos Into <span className="gradient-text">Viral Clips</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  SliceClips uses advanced AI to automatically find the best moments in your videos and create
                  platform-optimized clips. Focus on content, let AI handle the editing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={isAuthenticated ? '/dashboard' : '/signup'}
                  style={{ pointerEvents: 'auto', zIndex: 50, postion: 'relative' }}
                  className="btn-primary inline-flex items-center justify-center cursor-pointer"
                >
                  {isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'} 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button 
                  style={{pointerEvents: 'auto', zIndex: 50, position: 'relative' }}
                  className="btn-secondary cursor-pointer"
                  >
                  Watch Demo 
                </button>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">3 free clips to start</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">AI assistance unlocked with Pro</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-1">
                <div className="bg-secondary rounded-xl p-8 flex items-center justify-center h-96 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/5"></div>
                  <div className="relative z-10 text-center">
                    <Play className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-80" />
                    <p className="text-gray-400">Your video magic happens here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to create viral clips faster</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: 'AI-Powered Clipping',
                desc: 'Intelligent detection finds viral moments in seconds',
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-500" />,
                title: 'Viral Moment Detection',
                desc: 'ML algorithms identify high-engagement segments automatically',
              },
              {
                icon: <Users className="w-8 h-8 text-purple-500" />,
                title: 'Multi-Platform Ready',
                desc: 'Auto-optimize for TikTok, Instagram Reels, YouTube Shorts',
              },
              {
                icon: <Play className="w-8 h-8 text-pink-500" />,
                title: 'Smart Editing',
                desc: 'Auto-captions, transitions, and brand overlays',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">How SliceClips Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload', desc: 'Paste a YouTube link or upload your video' },
              { step: '02', title: 'AI Analyzes', desc: 'Our AI finds the best viral moments' },
              { step: '03', title: 'Auto-Edit', desc: 'Clips are auto-captioned and formatted' },
              { step: '04', title: 'Publish', desc: 'One-click upload to all platforms' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">Start free. Upgrade when you need it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                features: ['3 clips/month', 'Basic captions', 'Manual editing'],
                cta: 'Get Started',
              },
              {
                name: 'Pro',
                price: '$19.99',
                period: '/month',
                features: ['Unlimited AI clips', 'Viral detection', 'Auto-captions (30+ languages)', 'Platform optimization', 'One-click publishing'],
                cta: 'Start Free Trial',
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['Everything in Pro', 'Team collaboration', 'API access', 'Dedicated support'],
                cta: 'Contact Sales',
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${
                  plan.featured ? 'bg-gradient-accent border-2 border-blue-400 shadow-xl transform scale-105' : 'card'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-8">
                  {plan.price}
                  {plan.period && <span className="text-lg text-gray-400">{plan.period}</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className={plan.featured ? 'text-white' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Viral Clips?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators. Start your free trial today — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={isAuthenticated ? '/dashboard' : '/signup'} className="btn-primary">
              {isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'} <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
