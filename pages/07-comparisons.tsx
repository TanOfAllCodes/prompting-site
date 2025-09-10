/* Section 05.08: 07 — Comparisons & Use Cases */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 07 — Comparisons & Use Cases</h1>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">Choose the lightest strategy that meets reliability / transparency requirements. Escalate only when baseline performance or guardrail needs justify cost.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Technique selection matrix</h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2">Technique</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
                <th className="border border-gray-300 px-3 py-2">Cost</th>
                <th className="border border-gray-300 px-3 py-2">Transparency</th>
                <th className="border border-gray-300 px-3 py-2">Failure Risk Reduced</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Maieutic</td>
                <td className="border border-gray-300 px-3 py-2">Traceable commonsense QA</td>
                <td className="border border-gray-300 px-3 py-2">High</td>
                <td className="border border-gray-300 px-3 py-2">High (tree)</td>
                <td className="border border-gray-300 px-3 py-2">Inconsistent justification</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Self-Refine</td>
                <td className="border border-gray-300 px-3 py-2">Draft polishing / code quality</td>
                <td className="border border-gray-300 px-3 py-2">Medium (rounds)</td>
                <td className="border border-gray-300 px-3 py-2">Medium</td>
                <td className="border border-gray-300 px-3 py-2">Surface-level errors</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Least-to-Most</td>
                <td className="border border-gray-300 px-3 py-2">Compositional multi-step tasks</td>
                <td className="border border-gray-300 px-3 py-2">Low→Medium</td>
                <td className="border border-gray-300 px-3 py-2">Medium (explicit steps)</td>
                <td className="border border-gray-300 px-3 py-2">Premature leaps</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Self-Consistency</td>
                <td className="border border-gray-300 px-3 py-2">Math / classification</td>
                <td className="border border-gray-300 px-3 py-2">Linear in K</td>
                <td className="border border-gray-300 px-3 py-2">Low (rationales sampled)</td>
                <td className="border border-gray-300 px-3 py-2">Random reasoning errors</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">RAG</td>
                <td className="border border-gray-300 px-3 py-2">Factual Q&A / summarization</td>
                <td className="border border-gray-300 px-3 py-2">Index + retrieval calls</td>
                <td className="border border-gray-300 px-3 py-2">High (citations)</td>
                <td className="border border-gray-300 px-3 py-2">Hallucinated facts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Hybrid patterns</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>LtM + Self-Refine:</strong> Decompose, then refine each step for correctness.</li>
          <li><strong>RAG + Maieutic:</strong> Retrieve passages, build explanation tree citing sources.</li>
          <li><strong>ReAct + Self-Consistency:</strong> Sample tool-augmented traces; majority answer.</li>
        </ul>
        <p className="text-gray-700 mt-2">Design hybrids only if each layer adds a distinct mitigation (e.g., hallucination reduction + reasoning robustness).</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Escalation checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Baseline simple prompt measured & insufficient?</li>
          <li>Quantified failure being mitigated (e.g., hallucination rate)?</li>
          <li>Added latency within SLO budget?</li>
          <li>Instrumentation captures step-level outputs?</li>
          <li>Rollback path if hybrid underperforms?</li>
        </ul>
      </div>
    </section>
  )
}
