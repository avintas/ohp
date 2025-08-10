import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Mobile-first container - 50% width on desktop, full width on mobile */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Hello Image Section */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <img
            src="/hello.jpg"
            alt="Hello"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
