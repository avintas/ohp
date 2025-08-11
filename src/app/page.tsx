import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  // Select 12 random persona avatars for the grid
  const personaAvatars = [
    "/personas-im/a-architect.webp",
    "/personas-im/a-bull.webp",
    "/personas-im/a-edges.webp",
    "/personas-im/a-strategist.webp",
    "/personas-im/a-ironmike.webp",
    "/personas-im/a-voice.webp",
    "/personas-im/a-eagleeye.webp",
    "/personas-im/a-numbers.webp",
    "/personas-im/a-gearguy.webp",
    "/personas-im/a-silky.webp",
    "/personas-im/a-healer.webp",
    "/personas-im/a-recovery.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Mobile-first container - 50% width on desktop, full width on mobile */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Superboy Image - Top Section (replaces the blue rectangle) */}
        <div className="px-4 pt-8 pb-6">
          <img
            src="/superboy.webp"
            alt="Superboy - OnlyHockey!"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Personas Grid - Bottom Section */}
        <div className="px-4 pb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Meet Our Hockey Personas
          </h2>
          
          {/* 4x3 Grid of Persona Avatars */}
          <div className="grid grid-cols-3 gap-4">
            {personaAvatars.map((avatar, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200 dark:bg-slate-700">
                  <img
                    src={avatar}
                    alt={`Hockey Persona ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator arrows */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
