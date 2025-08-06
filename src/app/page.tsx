import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Mobile-first container - 50% width on desktop, full width on mobile */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Main Content Area - Completely Blank */}
        <main className="px-4 py-8">
          {/* Empty content area */}
        </main>
      </div>
    </div>
  );
}
