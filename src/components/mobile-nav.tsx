"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Settings, User } from "lucide-react";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 ${className}`}>
      <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">OHP</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4 mr-2" />
              About
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start h-12 text-base"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-5 w-5 mr-3" />
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-12 text-base"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-12 text-base"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
