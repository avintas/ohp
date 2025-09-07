'use client';

import Link from 'next/link';
import { ClientOnly } from './ClientOnly';

export function Header() {
  return (
    <ClientOnly fallback={
      <header className="w-full bg-[#0a0e1a] py-4 px-4 md:px-6 2xl:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full text-white font-bold text-lg md:text-xl">
              OH
            </div>
          </div>
        </div>
      </header>
    }>
      <header className="w-full bg-[#0a0e1a] py-4 px-4 md:px-6 2xl:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            {/* Logo - Left aligned */}
            <Link 
              href="/" 
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full text-white font-bold text-lg md:text-xl"
            >
              OH
            </Link>
          </div>
        </div>
      </header>
    </ClientOnly>
  );
}
