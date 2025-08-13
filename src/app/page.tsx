import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";

export default function Home() {
  // Select 11 persona avatars for the grid
  const personaAvatars = [
    "/pims/a-architect.webp",
    "/pims/a-bull.webp",
    "/pims/a-edges.webp",
    "/pims/a-strategist.webp",
    "/pims/a-ironmike.webp",
    "/pims/a-eagleeye.webp",
    "/pims/a-numbers.webp",
    "/pims/a-gearguy.webp",
    "/pims/a-silky.webp",
    "/pims/a-healer.webp",
    "/pims/a-recovery.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Mobile-first container */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Top spacing */}
        <div className="px-4 pt-8 pb-6">
        </div>

        {/* Mascots Video Card */}
        <div className="px-4 py-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 border-slate-300 dark:border-slate-600">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
              Mascots
            </h3>
            <div className="w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <video 
                className="w-full h-auto"
                controls
                preload="metadata"
              >
                <source src="/Mascots.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Interactive Cards Grid - 2x2 */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Top-Left Card - Blue */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-2xl font-bold text-white">89.4</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium">Goals by Quarter</p>
            </div>

            {/* Top-Right Card - Purple */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-2xl font-bold text-white">Trivia</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.111.89l2.444-.611a1 1 0 00.445-1.56l-1.445-1.561z" />
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium">Experience</p>
            </div>

            {/* Bottom-Left Card - Orange */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-2xl font-bold text-white">Hot Take</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium">Hockey Trivia #47</p>
            </div>

            {/* Bottom-Right Card - Green */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-2xl font-bold text-white">Connor McDavid</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm font-medium">Fanning Three Stars</p>
            </div>
          </div>
        </div>
          
        {/* Personas Grid - Bottom Section */}
        <div className="px-4 pb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-900 dark:text-white">
              Meet Our Hockey Personas
            </h2>
            
            {/* 2x6 Grid of Persona Avatars */}
            <div className="grid grid-cols-2 gap-4">
              {personaAvatars.map((avatar, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200 dark:bg-slate-700">
                    <Image
                      src={avatar}
                      alt={`Hockey Persona ${index + 1}`}
                      width={80}
                      height={80}
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
