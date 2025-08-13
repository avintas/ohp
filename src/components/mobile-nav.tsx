"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Info, Rss, Sun, Moon } from "lucide-react";

interface MobileNavProps {
  className?: string;
}

type Theme = "light" | "dark";

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Theme management
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getThemeIcon = () => {
    return theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />;
  };

  const getThemeLabel = () => {
    return theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 ${className}`}>
      <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OH</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">OnlyHockey!</span>
          </div>

          {/* Utility Icons - Visible on all viewports */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Info className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Rss className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              onClick={toggleTheme}
              title={getThemeLabel()}
            >
              {getThemeIcon()}
            </Button>
            
            {/* Mobile Menu Button - Only for additional navigation items */}
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
        </div>

        {/* Mobile Menu - For additional navigation items if needed */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Additional navigation items can be added here */}
              <div className="text-sm text-slate-500 dark:text-slate-400 px-3 py-2">
                Additional menu items can be added here
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
