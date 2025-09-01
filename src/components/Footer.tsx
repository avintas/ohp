export function Footer() {
  return (
    <footer className="bg-[#16213e] border-t border-[#2d3748] py-12 px-4 md:px-6 2xl:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left justify-items-center">
          
          {/* Content Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Content</h3>
            <ul className="space-y-3">
              <li>
                <a href="/havefun" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Have Fun
                </a>
              </li>
              <li>
                <a href="/sendhugs" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Send Hugs
                </a>
              </li>
              <li>
                <a href="/powerbrain" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Brain Power
                </a>
              </li>
              <li>
                <a href="/motivate" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Motivate
                </a>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Project</h3>
            <ul className="space-y-3">
            <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200">
                  Devices
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-[#2d3748] pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            
            {/* Copyright */}
            <div className="text-sm text-[#718096]">
              © 2025 OnlyHockey, LLC. All rights reserved.
            </div>

            {/* Legal Links */}
                          <div className="flex items-center gap-6 text-sm flex-wrap justify-center">
                <a href="/legal" className="text-[#718096] hover:text-[#4cc9f0] transition-colors duration-200">
                  Privacy
                </a>
                <a href="/legal" className="text-[#718096] hover:text-[#4cc9f0] transition-colors duration-200">
                  Terms
                </a>

              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
