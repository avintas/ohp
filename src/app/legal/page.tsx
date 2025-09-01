'use client';

import { motion } from 'framer-motion';
import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Main Content */}
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-gray-600">
            Privacy Policy, Terms of Service, and Legal Notices
          </p>
        </motion.div>

        {/* Privacy Policy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>Last Updated:</strong> January 2025
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h3>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include your name, email address, 
              and any content you share on our platform.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure the security of our platform.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Sharing</h3>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Security</h3>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
        </motion.section>

        {/* Terms of Service Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>Last Updated:</strong> January 2025
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Acceptance of Terms</h3>
            <p className="text-gray-700 mb-4">
              By accessing and using OnlyHockey, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Use License</h3>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily use OnlyHockey for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">User Conduct</h3>
            <p className="text-gray-700 mb-4">
              You agree to use our services in compliance with all applicable laws and regulations. 
              You may not use our services for any unlawful purpose or to solicit others to perform 
              unlawful acts.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Content Responsibility</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for any content you post or share on our platform. We reserve 
              the right to remove content that violates our terms or is otherwise inappropriate.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              In no event shall OnlyHockey, LLC or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use our services.
            </p>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or Terms of Service, 
              please contact us:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Email:</strong> legal@onlyhockey.com</li>
              <li><strong>Address:</strong> OnlyHockey, LLC</li>
              <li><strong>Phone:</strong> (555) 123-HOCKEY</li>
            </ul>
          </div>
        </motion.section>

        {/* Updates Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Policy Updates</h3>
          <p className="text-blue-800">
            We may update this Privacy Policy and Terms of Service from time to time. 
            We will notify you of any changes by posting the new policy on this page 
            and updating the "Last Updated" date.
          </p>
        </motion.div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
