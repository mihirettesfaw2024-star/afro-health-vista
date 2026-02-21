import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className={cn(
              "p-2 rounded-lg transition-all duration-300",
              isScrolled ? "bg-blue-600 text-white" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
            )}>
              <Activity className="w-6 h-6" />
            </div>
            <div className={cn(
              "absolute inset-0 animate-ping opacity-20 rounded-lg",
              isScrolled ? "bg-blue-600" : "bg-white"
            )} />
          </div>
          <span className={cn(
            "font-['Montserrat'] font-extrabold text-xl tracking-tight transition-colors duration-300",
            isScrolled ? 'text-slate-900' : 'text-white'
          )}>
            Afro Public Health <span className="text-blue-500">Consultancy</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-['Open_Sans'] font-semibold text-sm hover:text-blue-500 transition-colors uppercase tracking-wider",
                isScrolled ? 'text-slate-600' : 'text-white/90'
              )}
            >
              {link.name}
            </a>
          ))}
          <button className={cn(
            "px-6 py-2.5 rounded-lg font-['Montserrat'] font-bold text-sm transition-all duration-300 transform hover:scale-105",
            isScrolled 
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
              : 'bg-white text-blue-600 hover:bg-blue-50'
          )}>
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 md:hidden animate-in slide-in-from-top duration-300 border-b border-slate-100">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['Open_Sans'] font-bold text-slate-800 py-3 border-b border-slate-50 flex items-center justify-between group hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-['Montserrat'] font-bold mt-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;