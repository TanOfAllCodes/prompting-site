/* Section 05.09: 08 — Pitfalls & Mitigation */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 08 — Pitfalls & Mitigation</h1>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">Most failures arise from ungrounded generation, weak specification, or missing validation loops. Address by constraining inputs, verifying outputs, and instrumenting error signals.</p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Common pitfalls</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Hallucinations:</strong> Ungrounded confident statements.</li>
          <li><strong>Confirmation bias:</strong> Self-critiques that only reinforce initial answer.</li>
          <li><strong>Overfitting exemplars:</strong> Mimicking accidental patterns.</li>
          <li><strong>Prompt injection:</strong> User content overriding system intent.</li>
          <li><strong>Cost blow-up:</strong> Layering strategies without measurement.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Mitigation table</h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 border-b">Pitfall</th>
                <th className="py-2 px-3 border-b">Signal</th>
                <th className="py-2 px-3 border-b">Mitigation</th>
                <th className="py-2 px-3 border-b">Automation Hook</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Hallucination</td><td className="py-2 px-3">Unsupported claims</td><td className="py-2 px-3">RAG + citation requirement</td><td className="py-2 px-3">Citation checker</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Confirmation bias</td><td className="py-2 px-3">No counterexamples</td><td className="py-2 px-3">Adversarial role prompt</td><td className="py-2 px-3">Critique diff scoring</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Exemplar overfit</td><td className="py-2 px-3">Spurious tokens</td><td className="py-2 px-3">Rotate example sets</td><td className="py-2 px-3">A/B repository</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Injection</td><td className="py-2 px-3">User override patterns</td><td className="py-2 px-3">Escape / delimiting</td><td className="py-2 px-3">Regex policy filter</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Runaway cost</td><td className="py-2 px-3">Latency spikes</td><td className="py-2 px-3">Budget guard + fallback</td><td className="py-2 px-3">Cost/trace logging</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Guardrails</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>JSON schema enforcement + parsing validation.</li>
          <li>Deterministic mode for final pass; sampling only in exploration.</li>
          <li>System + user separation with clear delimiters.</li>
          <li>Automated red-team prompts on each deployment.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Instrumentation logs cost & latency?</li>
          <li>Citation or evidence checks passing?</li>
          <li>Prompt injection tests green?</li>
          <li>Rotating exemplar pool configured?</li>
          <li>Fallback strategy defined?</li>
        </ul>
      </div>
    </section>
  )
}
