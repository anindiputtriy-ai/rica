"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="RICA SUPARTINI Logo" 
              className="h-12 w-12 rounded-full bg-white p-1"
            />
            <div>
              <h1 className="text-2xl font-bold">RICA SUPARTINI</h1>
              <p className="text-xs opacity-90">Perdagangan Eceran Terpercaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-orange-200 transition-colors">Beranda</Link>
            <Link href="#tentang" className="hover:text-orange-200 transition-colors">Tentang</Link>
            <Link href="#produk" className="hover:text-orange-200 transition-colors">Produk</Link>
            <Link href="#kontak" className="hover:text-orange-200 transition-colors">Kontak</Link>
            <Link href="/privacy" className="hover:text-orange-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-orange-200 transition-colors">Terms</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-orange-400">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-orange-200 transition-colors">Beranda</Link>
              <Link href="#tentang" className="hover:text-orange-200 transition-colors">Tentang</Link>
              <Link href="#produk" className="hover:text-orange-200 transition-colors">Produk</Link>
              <Link href="#kontak" className="hover:text-orange-200 transition-colors">Kontak</Link>
              <Link href="/privacy" className="hover:text-orange-200 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-orange-200 transition-colors">Terms</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}