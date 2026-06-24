// app/page.tsx
'use client';

import React from 'react';
import AdvancedEditor from '@/components/AdvancedEditor';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Upper Brand Control Strip */}
        <div className="text-center md:text-left border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            SliceClips <span className="text-indigo-500">Pro Studio</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            High-Performance WebAssembly Slicing & OpenAI Whisper Transcription Engine
          </p>
        </div>

        {/* This directly mounts your advanced studio options onto your homepage */}
        <AdvancedEditor />

      </div>
    </main>
  );
}