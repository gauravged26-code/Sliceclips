"use client";

import React, { useState } from 'react';
import { 
  Video, LayoutDashboard, Settings, Layers, Folder, 
  TrendingUp, Clock, Sparkles, Upload, Loader2, CheckCircle2, AlertCircle
} from 'lucide-react';

interface Clip {
  id: string;
  title: string;
  duration: string;
  viralityScore: number;
  signals: { hook: number; pacing: number; retention: number };
}

export default function DashboardPage() {
  const [videoUrl, setVideoUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [clips, setClips] = useState<Clip[]>([]);

  const handleProcessVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;

    setStatus('processing');
    try {
      // Connect to your external high-performance processing server
      const response = await fetch('http://localhost:8000/api/process-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoUrl })
      });

      if (!response.ok) throw new Error('Processing failed');
      const data = await response.json();
      
      setClips(data.clips);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Sidebar Nav */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-3 px-2 py-4 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Video className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Sliceclips
            </span>
          </div>
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600 text-white font-medium">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 transition-all">
              <Layers className="w-5 h-5" />
              <span>Clips</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 transition-all">
              <Folder className="w-5 h-5" />
              <span>Projects</span>
            </button>
          </nav>
        </div>
        <div className="border-t border-slate-800 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 transition-all">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-slate-800 bg-slate-900/40 backdrop-blur flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-slate-200">AI Video Processing Engine</h1>
          <span className="text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full">
            v1.0 Multi-Signal Ingestion
          </span>
        </header>

        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
          {/* Form Processing Center */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold tracking-tight mb-2">Ingest Long-Form Content</h2>
            <p className="text-sm text-slate-400 mb-6">Enter a video stream URL to isolate high-engagement moments via face-tracking, filler extraction, and vocal pacing algorithms.</p>
            
            <form onSubmit={handleProcessVideo} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste YouTube, Twitch, or MP4 link here..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-200 placeholder:text-slate-600 transition-colors"
                disabled={status === 'processing'}
                required
              />
              <button
                type="submit"
                disabled={status === 'processing'}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 min-w-[160px]"
              >
                {status === 'processing' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Clips</span>
                  </>
                )}
              </button>
            </form>

            {/* Ingestion Status Modals */}
            {status === 'processing' && (
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-400 font-mono bg-amber-500/5 border border-amber-500/10 p-3 rounded-xl animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Extracting streams -> Computing voice tone shifts -> Running face detection algorithms...</span>
              </div>
            )}
            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Multi-signal extraction completed successfully. Isolated {clips.length} dynamic candidate clips.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 text-xs text-red-400 font-mono bg-red-500/5 border border-red-500/10 p-3 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Ingestion failure. Ensure your processing server is running locally on port 8000.</span>
              </div>
            )}
          </section>

          {/* Metrics Layout Block */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between shadow-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Video Clips</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">{status === 'success' ? clips.length : 0}</h3>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400"><Layers className="w-6 h-6" /></div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between shadow-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Processing Speed</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">{status === 'success' ? '12.4x' : '0.0x'}</h3>
              </div>
              <div className="bg-indigo-500/10 p-3 rounded-xl text-indigo-400"><Clock className="w-6 h-6" /></div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between shadow-md">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Average Virality</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">
                  {status === 'success' && clips.length > 0 
                    ? ${Math.round(clips.reduce((acc, c) => acc + c.viralityScore, 0) / clips.length)}%
                    : '0%'}
                </h3>
              </div>
              <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400"><TrendingUp className="w-6 h-6" /></div>
            </div>
          </section>

          {/* Video List Output Panel */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-md font-semibold text-slate-200 mb-4">Isolated Viral Assets</h2>
            {clips.length === 0 ? (
              <div className="border border-dashed border-slate-800 rounded-xl p-12 text-center">
                <Upload className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                <p className="text-sm text-slate-500">No clips processed yet. Submit an active video link above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clips.map((clip) => (
                  <div key={clip.id} className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-medium text-slate-200 text-sm leading-snug">{clip.title}</h4>
                        <span className="text-xs px-2.5 py-1 font-bold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {clip.viralityScore} Score
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-mono">Duration: {clip.duration}</p>
                    </div>

                    {/* Multi-Signal Metric Indicators */}
                    <div className="space-y-2 border-t border-slate-900 pt-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
                          <span>Hook Strength (0-2s)</span>
                          <span>{clip.signals.hook}%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: ${clip.signals.hook}% }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
                          <span>Vocal Pacing Density</span>
                          <span>{clip.signals.pacing}%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full" style={{ width: ${clip.signals.pacing}% }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium py-2 rounded-lg transition-colors">
                        Preview Workspace
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors">
                        Export 9:16
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
