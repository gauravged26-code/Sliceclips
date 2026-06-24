"use client";

import React, { useState, useEffect } from "react";
import { 
  Video, 
  LayoutDashboard, 
  FolderVideo, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  BarChart3, 
  Sliders,
  Plus
} from "lucide-react";
// Import your database config from your lib folder
import { db } from "@/lib/firebase"; 
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clips, setClips] = useState([]);
  const [stats, setStats] = useState([
    { name: "Total Clips", value: "0", change: "Syncing..." },
    { name: "Processed Videos", value: "0", change: "Syncing..." },
    { name: "Storage Used", value: "0 GB", change: "Of 50 GB limit" },
  ]);

  // Hook into real-time Firebase Data
  useEffect(() => {
    if (!db) {
      toast.error("Firebase config is not initialized yet.");
      setLoading(false);
      return;
    }

    const clipsQuery = query(collection(db, "clips"), orderBy("createdAt", "desc"), limit(5));

    const unsubscribe = onSnapshot(clipsQuery, (snapshot) => {
      const fetchedClips = [];
      let totalCount = snapshot.size;
      let processedCount = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedClips.push({ id: doc.id, ...data });
        if (data.status === "processed" || data.status === "completed") {
          processedCount++;
        }
      });

      setClips(fetchedClips);
      setStats([
        { name: "Total Clips", value: String(totalCount), change: "+12% this week" },
        { name: "Processed Videos", value: String(processedCount), change: "Ready to download" },
        { name: "Storage Used", value: "1.2 GB", change: "Of 50 GB limit" },
      ]);
      setLoading(false);
    }, (error) => {
      console.error("Firestore fetch error:", error);
      toast.error("Error connecting to database collection.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCreateProject = () => {
    toast.success("Project workflow triggered! Ready to implement upload handler.");
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      
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
            <button 
              onClick={handleCreateProject}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            >
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
            
            {/* Left Content Column - Video Workspace Grid */}
            <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-5 min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-slate-200">Recent Video Slices</h3>
                  <span className="text-xs text-indigo-400 cursor-pointer hover:underline">View all</span>
                </div>

                {loading ? (
                  <div className="text-center py-12 text-slate-400">Loading your assets...</div>
                ) : clips.length === 0 ? (
                  <div className="border border-dashed border-slate-800 rounded-lg p-8 text-center text-slate-500 my-auto flex flex-col items-center justify-center min-h-[180px]">
                    <FolderVideo className="w-10 h-10 text-slate-600 mb-2" />
                    <p className="text-sm font-medium text-slate-400">No recent video slices found.</p>
                    <p className="text-xs text-slate-600 mt-0.5">Create a new project to generate video assets.</p>
                  </div>
                ) : (
                  <div className="space-y-3 mt-2">
                    {clips.map((clip) => (
                      <div key={clip.id} className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FolderVideo className="w-5 h-5 text-indigo-400" />
                          <div>
                            <p className="text-sm font-medium text-slate-200">{clip.title || "Untitled Clip"}</p>
                            <p className="text-xs text-slate-500">{clip.duration || "Unknown duration"}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                          clip.status === "processed" || clip.status === "completed" 
                            ? "bg-emerald-500/10 text-emerald-400" 
                            : "bg-amber-500/10 text-amber-400"
                        }`}>
                          {clip.status || "pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Controls Right Column */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-slate-200 mb-4">Quick Controls</h3>
                <button 
                  onClick={() => toast.success("Automated processing enabled.")}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 py-2.5 px-4 rounded-xl text-sm font-medium transition-all"
                >
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <span>Auto-Segment Engine</span>
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <nav className="flex-1 space-y-1">
      <a href="#" className="flex items-center gap-3 bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
        <LayoutDashboard className="w-5 h-5" />
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
        <BarChart3 className="w-5 h-5" />
        <span>Analytics</span>
      </a>
      <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
        <Settings className="w-5 h-5" />
        <span>Settings</span>
      </a>
      <div className="pt-4 mt-4 border-t border-slate-800">
        <a href="#" className="flex items-center gap-3 text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}