import React from "react";
import "./globals.css"; // This links your Tailwind styles

export const metadata = {
  title: "Sliceclips Dashboard",
  description: "Create and manage your video clips seamlessly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
