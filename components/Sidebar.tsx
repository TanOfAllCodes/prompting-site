/* Section 03.03: Sidebar navigation */
import Link from 'next/link'
import React from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/01-introduction', label: '01 — Introduction' },
  { href: '/02-core-styles', label: '02 — Core Prompting Styles' },
  { href: '/03-advanced-strategies', label: '03 — Advanced Strategies' },
  { href: '/04-maieutic', label: '04 — Maieutic Prompting' },
  { href: '/05-self-refinement', label: '05 — Self-Refinement' },
  { href: '/06-least-to-most', label: '06 — Least-to-Most' },
  { href: '/07-comparisons', label: '07 — Comparisons & Use Cases' },
  { href: '/08-pitfalls', label: '08 — Pitfalls & Mitigation' },
  { href: '/09-cheat-sheets', label: '09 — Cheat Sheets' },
  { href: '/10-references', label: '10 — References' },
]

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0 p-6 flex flex-col justify-between" style={{ backgroundColor: '#001947' }}>
      <div>
        <div className="text-base font-extrabold mb-4 tracking-wide text-center uppercase" style={{ color: '#ffffff' }}>Contents</div>
        <nav className="space-y-2">
          {links.map(l => (
            l.label === 'Home' ? (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-[1rem]"
                style={{ color: '#c8d6f8' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" style={{ color: '#ffffff' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4-11v11a1 1 0 001 1h5a1 1 0 001-1V10" />
                </svg>
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="block px-4 py-2 rounded-lg font-medium transition-colors text-[1rem] hover:brightness-125"
                style={{ color: '#c8d6f8' }}
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>
      </div>
      <div className="text-xs mt-8 border-t pt-4" style={{ color: '#94a8d8', borderColor: 'rgba(255,255,255,0.15)' }}>
        Built for offline use.<br />All pages include numbered sections for easy edits.
      </div>
    </div>
  )
}
