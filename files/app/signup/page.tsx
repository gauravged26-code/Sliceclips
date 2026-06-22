"use client";

import React, { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");
      
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Or whatever route it is targeting
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setErrorMsg("This email address is already in use.");
      } else {
        setErrorMsg(err?.message || "An error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "100px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Create an Account</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>Get started with SliceClips today.</p>
      
      <form onSubmit={handleSignup} style={{ display: "inline-block", textAlign: "left" }}>
        {errorMsg && (
          <div style={{ color: "#ff4d4f", marginBottom: "15px", maxWidth: "250px", fontSize: "14px", fontWeight: "bold" }}>
            {errorMsg}
          </div>
        )}

        <div style={{ marginBottom: "15px" }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            style={{ padding: "10px", width: "250px", border: "1px solid #ccc", borderRadius: "4px", color: "#000" }} 
          />
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            style={{ padding: "10px", width: "250px", border: "1px solid #ccc", borderRadius: "4px", color: "#000" }} 
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          style={{ 
            padding: "10px 30px", 
            background: loading ? "#ccc" : "#0070f3", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            marginTop: "10px", 
            width: "100%",
            cursor: loading ? "not-allowed" : "pointer" 
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}