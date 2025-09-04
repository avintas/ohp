import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#16213e] border-t border-[#2d3748] py-6 md:py-12 px-4 md:px-6 2xl:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Links */}
        <nav className="flex justify-center items-center gap-6 mb-4 md:mb-8" aria-label="Main footer navigation">
          <a 
            href="/about" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="Learn more about OnlyHockey"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="Contact OnlyHockey team"
          >
            Contact
          </a>
          <a 
            href="/support" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="Get product support"
          >
            Support
          </a>
        </nav>

        {/* Copyright and Legal */}
        <div className="border-t border-[#2d3748] pt-4 md:pt-8">
          <div className="flex flex-col items-center gap-2 md:gap-4 text-center">
            
            {/* Copyright */}
            <div className="text-sm text-[#718096]">
              © 2025 OnlyHockey, LLC. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm flex-wrap justify-center">
              <a 
                href="/legal" 
                className="text-[#718096] hover:text-[#4cc9f0] transition-colors duration-200"
                aria-label="View privacy policy"
              >
                Privacy
              </a>
              <a 
                href="/legal" 
                className="text-[#718096] hover:text-[#4cc9f0] transition-colors duration-200"
                aria-label="View terms of service"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
