"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
// Import your template's original Navbar component here
// Note: Adjust this import path to match where your template's Navbar actually lives 
// (e.g., "@/components/Navbar", "@/components/Header", etc.)
import Navbar from "@/components/Navbar"; 

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#0a0f1d", color: "#fff", fontFamily: "sans-serif" }}>
        <h3>Loading Workspace...</h3>
      </div>
    );
  }

  return (
    <>
      {/* ONLY show the public template header if the user is NOT logged in */}
      {!user && <Navbar />}
      
      {/* This renders the actual page content */}
      {children}
    </>
  );
}
