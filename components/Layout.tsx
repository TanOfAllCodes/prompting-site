/* Section 03.01: Layout component (global shell) */
import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const SIDEBAR_WIDTH = "320px";

  return (
    <div className="min-h-screen bg-black relative">
      {/* Sidebar Overlay */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setShowSidebar(false)}
        />
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full bg-gray-900 shadow-lg border-r border-gray-800 flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
            showSidebar ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ width: SIDEBAR_WIDTH }}
        >
          <Sidebar />
        </aside>
      </>

      {/* Main Content - Full Page (reserve space for fixed footer by bottom padding) */}
      <div className="min-h-screen flex flex-col pb-16">
        <Navbar />
        <main className="flex-1 flex justify-center pt-8">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </main>
      </div>

      {/* Sidebar Toggle / Close Buttons (same position) */}
      {!showSidebar && (
        <button
          className="fixed top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-200 shadow-lg text-gray-200 z-50 hover:scale-105"
          aria-label="Show Sidebar"
          onClick={() => setShowSidebar(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      {showSidebar && (
        <button
          className="fixed top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-200 shadow-lg text-gray-200 z-50 hover:scale-105"
          aria-label="Hide Sidebar"
          onClick={() => setShowSidebar(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Global Footer */}
      <footer id="footer" className="site-footer">
        Powered by S3 - TI © 2025
      </footer>
    </div>
  )
}
