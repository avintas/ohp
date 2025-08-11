"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Info, Rss, Monitor, Users } from "lucide-react";
import Link from "next/link";

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
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OH</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">OnlyHockey!</span>
          </div>

          {/* Utility Icons - Visible on all viewports */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/personas">
              <Button variant="ghost" size="sm" className="p-2" title="Meet Our Personas">
                <Users className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-2">
              <Info className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Rss className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Monitor className="h-5 w-5" />
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
