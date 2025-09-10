/* Section 05.01: Home page */
import React from 'react'

export default function Home() {
  return (
    <section className="content-section space-y-6">
      <div className="card">
        <h1 className="text-3xl font-bold">Prompting Techniques — Knowledge Pack</h1>
        <p className="text-gray-700 mt-2">Practical, high-quality guides on prompting LLMs. Includes templates, improved examples, and curated references for Maieutic, Self-Refinement, and Least-to-Most methods.</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Quick jump</h2>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li><a href="/04-maieutic" className="text-primary hover:underline">Maieutic Prompting — explanation trees & traceability</a></li>
          <li><a href="/05-self-refinement" className="text-primary hover:underline">Self-Refinement — iterative critique & polish</a></li>
          <li><a href="/06-least-to-most" className="text-primary hover:underline">Least-to-Most — scaffolded decomposition</a></li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Download</h2>
        <p className="text-gray-700">This project can be run locally. Use <code className="rounded bg-slate-100 px-1 py-0.5">npm install</code> and <code className="rounded bg-slate-100 px-1 py-0.5">npm run dev</code>.</p>
      </div>
    </section>
  )
}
