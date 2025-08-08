"use client"

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center px-4 py-12 text-center"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="hockey-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230f172a;stop-opacity:1" /><stop offset="50%" style="stop-color:%231e293b;stop-opacity:1" /><stop offset="100%" style="stop-color:%230f172a;stop-opacity:1" /></linearGradient><pattern id="hockey-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="1.5" fill="%23ffffff" opacity="0.08"/><circle cx="40" cy="80" r="1" fill="%23ffffff" opacity="0.06"/></pattern></defs><rect width="100%" height="100%" fill="url(%23hockey-bg)"/><rect width="100%" height="100%" fill="url(%23hockey-pattern)"/></svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-sm mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-white drop-shadow-lg text-3xl md:text-4xl font-bold">
            OnlyHockey!
          </h1>
          <p className="text-white/90 drop-shadow-md text-base md:text-lg">
            Your ultimate destination for hockey content, community, and everything puck-related. Join the hockey family today.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            size="lg" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg font-semibold"
          >
            Explore Content
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            Join Community
          </Button>
        </div>
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-8 bg-white/50 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
}
