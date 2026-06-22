'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Play, LogOut } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { signOutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const { user, isAuthenticated } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      useAppStore.setState({ user: null, isAuthenticated: false });
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">SliceClips</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {!isAuthenticated ? (
              <>
                <a href="#features" className="text-gray-300 hover:text-white transition">
                  Features
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition">
                  Pricing
                </a>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/editor" className="text-gray-300 hover:text-white transition">
                  Editor
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-gray-700 py-4 space-y-4 animate-fadeIn">
            {!isAuthenticated ? (
              <>
                <a href="#features" className="block text-gray-300 hover:text-white">
                  Features
                </a>
                <a href="#pricing" className="block text-gray-300 hover:text-white">
                  Pricing
                </a>
                <Link href="/login" className="block text-gray-300 hover:text-white">
                  Login
                </Link>
                <Link href="/signup" className="block btn-primary w-full text-center">
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block text-gray-300 hover:text-white">
                  Dashboard
                </Link>
                <Link href="/editor" className="block text-gray-300 hover:text-white">
                  Editor
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
