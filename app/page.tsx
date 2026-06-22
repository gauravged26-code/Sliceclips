"use client";

import React from 'react';
import { 
  Video, 
  LayoutDashboard, 
  Settings, 
  Layers, 
  Folder, 
  TrendingUp, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Sidebar Layout */}
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
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600 text-white font-medium transition-all">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
              <Layers className="w-5 h-5" />
              <span>Clips</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
              <Folder className="w-5 h-5" />
              <span>Projects</span>
            </button>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-slate-800 bg-slate-900/40 backdrop-blur flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-slate-200">Welcome Back</h1>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-600/10">
              <Sparkles className="w-4 h-4" />
              <span>Create New Clip</span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
          {/* Status Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Video Clips</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">12</h3>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Watch Time</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">48.5h</h3>
              </div>
              <div className="bg-indigo-500/10 p-3 rounded-xl text-indigo-400">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Average Engagement</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-100">+24.3%</h3>
              </div>
              <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Video List Placeholders */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-md font-semibold text-slate-200 mb-4">Recent Clips</h2>
            <div className="border border-dashed border-slate-800 rounded-xl p-12 text-center">
              <p className="text-sm text-slate-500">No clips processed yet. Upload a video file to get started.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
