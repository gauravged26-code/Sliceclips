import React from "react";
import "./globals.css";

export const metadata = {
  title: "SliceClips AI - Premium Video Automation",
  description: "Turn long-form videos into viral clips with multi-signal AI analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
