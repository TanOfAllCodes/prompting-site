/* Section 05.03: 02 — Core Prompting Styles */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 02 — Core Prompting Styles</h1>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">These foundational styles are the primitives you combine later with advanced orchestration (Self‑Refine, Maieutic, LtM, ReAct). Learn their strengths, failure modes, and when to escalate.</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Zero-shot:</strong> Pure instruction.</li>
          <li><strong>Few-shot:</strong> Pattern anchoring via curated exemplars.</li>
          <li><strong>Role / Persona:</strong> Lens + tone control.</li>
          <li><strong>Chain-of-Thought:</strong> Makes internal reasoning explicit.</li>
          <li><strong>Decomposition:</strong> Sequential sub-target resolution.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Zero-shot</h2>
        <p className="text-gray-700 mt-2">Best for clear, atomic tasks. Add explicit format + constraints to reduce ambiguity.</p>
        <pre className="code whitespace-pre-line mt-2">{`Instruction: Summarize the paragraph in ≤25 words for an executive.
Paragraph: "Our pilot automation reduced average handling time from 11m to 7m and cut error rates by 32%."`}</pre>
        <p className="text-gray-700 mt-2"><strong>Failure mode:</strong> Drifts in tone → add persona or style spec.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Few-shot</h2>
        <p className="text-gray-700 mt-2">Use when the model misclassifies / misformats. Order examples simplest → edge case.</p>
        <pre className="code whitespace-pre-line mt-2">{`Task: Extract tax amount.
Example 1:
Input: "Tax on €100 at 19%." -> {"tax_eur": 19}
Example 2:
Input: "Tax on €250 at 7%." -> {"tax_eur": 17.5}
Respond ONLY as JSON.
Input: "Tax on €80 at 10%." ->`}</pre>
        <p className="text-gray-700 mt-2"><strong>Tip:</strong> Stop at 2–4 examples; overloading reduces signal.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Role / Persona</h2>
        <p className="text-gray-700 mt-2">Aligns register + abstraction. Keep functional; avoid narrative fluff that burns tokens.</p>
        <pre className="code whitespace-pre-line mt-2">{`System: You are a senior accessibility reviewer. Be concise, WCAG oriented.
User snippet: [HTML_SNIPPET]
Task: List 3 prioritized accessibility issues with fixes.`}</pre>
        <p className="text-gray-700 mt-2"><strong>Anti‑pattern:</strong> Adding quirky personas for precision tasks.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Chain-of-Thought (CoT)</h2>
        <p className="text-gray-700 mt-2">Request incremental reasoning to reduce shortcut answers and expose logic errors.</p>
        <pre className="code whitespace-pre-line mt-2">{`Q: A cafe sells 24 croissants. They bake 40 more, but 1/5 burn. How many sellable remain?
Instruction: Think step-by-step then output ANSWER: <NUMBER>.`}</pre>
        <p className="text-gray-700 mt-2"><strong>Variant:</strong> Hidden chain (internal) + final answer only when evaluating.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Decomposition</h2>
        <p className="text-gray-700 mt-2">Break complex, multi‑constraint tasks to reduce cognitive load per generation.</p>
        <pre className="code whitespace-pre-line mt-2">{`Goal: Draft a product update email.
Phase 1: List user segments + single key benefit.
Phase 2: Create one sentence per benefit.
Phase 3: Assemble final 120-word email using prior outputs.`}</pre>
        <p className="text-gray-700 mt-2"><strong>Guideline:</strong> Each phase should disambiguate the next—avoid over‑splitting.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Style selection quick guide</h2>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 font-semibold border-b border-gray-200">Situation</th>
                <th className="py-2 px-3 font-semibold border-b border-gray-200">Use</th>
                <th className="py-2 px-3 font-semibold border-b border-gray-200">Why</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-3">Atomic, well-specified task</td>
                <td className="py-2 px-3 font-medium">Zero-shot</td>
                <td className="py-2 px-3">Fast; no extra tokens; low ambiguity</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-3">Output format drifting / inconsistent</td>
                <td className="py-2 px-3 font-medium">Few-shot</td>
                <td className="py-2 px-3">Anchors structure & edge handling</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-3">Tone / audience mismatch</td>
                <td className="py-2 px-3 font-medium">Persona</td>
                <td className="py-2 px-3">Aligns voice + abstraction level</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-3">Model skips reasoning steps</td>
                <td className="py-2 px-3 font-medium">Chain-of-Thought</td>
                <td className="py-2 px-3">Forces explicit intermediate logic</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-3">Multi-constraint / multi-stage goal</td>
                <td className="py-2 px-3 font-medium">Decomposition</td>
                <td className="py-2 px-3">Reduces complexity per generation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
