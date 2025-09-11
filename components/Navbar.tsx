/* Section 03.02: Top navigation bar */
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="shadow-lg" style={{ backgroundColor: '#090230ff' }}>
      <div className="main-container flex flex-col items-center justify-center py-8 px-4">
        <div className="text-center mb-4">
          <Link href="/" className="block">
            <div className="text-3xl font-extrabold" style={{ color: '#ffffff' }}>
              PROMPTING TECHNIQUES
            </div>
          </Link>
        </div>
        <div className="text-center">
          <div className="text-base" style={{ color: '#c3d4ff' }}>Knowledge pack — guides, templates, examples</div>
        </div>
      </div>
    </header>
  )
}
