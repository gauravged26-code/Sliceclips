"use client";

import React, { useState } from "react";
import { 
  Video, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  BarChart3, 
  Sliders,
  Plus
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Quick stats mock data
  const stats = [
    { name: "Total Clips", value: "128", change: "+12% this week" },
    { name: "Processed Videos", value: "94", change: "Ready to download" },
    { name: "Storage Used", value: "14.2 GB", change: "Of 50 GB limit" },
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      {/* --- SIDEBAR FOR MOBILE --- */}
      <div className={`fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="fixed inset-0 bg-slate-950/80" onClick={() => setSidebarOpen(false)} />
        <div className={`relative flex flex-col w-64 bg-slate-950 p-5 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-400">
              <Video className="w-6 h-6" />
              <span>SliceClips</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-slate-100">
              <X className="w-6 h-6" />
            </button>
          </div>
          <SidebarNavigation />
        </div>
      </div>

      {/* --- SIDEBAR FOR DESKTOP --- */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-950 border-r border-slate-800 p-5 shrink-0">
        <div className="flex items-center gap-2 font-bold text-xl text-indigo-400 mb-8 px-2">
          <Video className="w-6 h-6" />
          <span>SliceClips</span>
        </div>
        <SidebarNavigation />
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="flex items-center justify-between h-16 bg-slate-950 border-b border-slate-800 px-4 md:px-8 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-400 hover:text-slate-100">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:block text-sm text-slate-400">
            Welcome back, <span className="text-slate-200 font-medium">Developer</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              DV
            </div>
          </div>
        </header>

        {/* INNER SCROLLABLE CONTAINER */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          
          {/* PAGE TITLE */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-sm text-slate-400">Monitor and configure your media segment assets layout.</p>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-950 border border-slate-800 p-5 rounded-xl shadow-sm">
                <p className="text-sm font-medium text-slate-400">{stat.name}</p>
                <p className="text-2xl font-bold mt-1 text-white">{stat.value}</p>
                <p className="text-xs text-indigo-400 mt-1 font-medium">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* WORKSPACE & CONTENT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-5 min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-slate-200">Recent Video Slices</h3>
                  <span className="text-xs text-indigo-400 cursor-pointer hover:underline">View all</span>
                </div>
                <div className="border border-dashed border-slate-800 rounded-lg p-8 text-center text-slate-500 my-auto flex flex-col items-center justify-center min-h-[180px]">
                  <Video className="w-10 h-10 text-slate-600 mb-2" />
                  <p className="text-sm text-slate-400">No recent video slices found.</p>
                  <p className="text-xs text-slate-600 mt-1">Create a new project to generate video assets.</p>
                </div>
              </div>
            </div>

            {/* Right Configuration Column */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-slate-200 mb-4">Quick Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Sliders className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm font-medium">Auto-Segment</span>
                    </div>
                    <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Video Slices", icon: Video, active: false },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <div className="flex flex-col flex-1 justify-between">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active 
                  ? "bg-indigo-600 text-white" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors mt-auto">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  );
}
