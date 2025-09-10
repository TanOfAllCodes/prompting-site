/* Section 05.10: 09 — Cheat Sheets */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 09 — Cheat Sheets</h1>
      </div>
      {/* Quick reference matrix */}
      <div className="card">
        <h2 className="text-xl font-semibold">Quick reference matrix</h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 border-b">Pattern</th>
                <th className="py-2 px-3 border-b">Core Shape</th>
                <th className="py-2 px-3 border-b">Use When</th>
                <th className="py-2 px-3 border-b">Stop Condition</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3 font-medium">Maieutic</td><td className="py-2 px-3">Answer + claim tree</td><td className="py-2 px-3">Need justification</td><td className="py-2 px-3">Depth reached / consistent</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3 font-medium">Self-Refine</td><td className="py-2 px-3">Draft→Critique→Refine loop</td><td className="py-2 px-3">Quality polishing</td><td className="py-2 px-3">No material issues</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3 font-medium">Least-to-Most</td><td className="py-2 px-3">Ordered subproblems S1..Sn</td><td className="py-2 px-3">Compositional reasoning</td><td className="py-2 px-3">Final aggregation</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3 font-medium">Self-Consistency</td><td className="py-2 px-3">K sampled rationales</td><td className="py-2 px-3">Reduce stochastic error</td><td className="py-2 px-3">Majority stable</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3 font-medium">RAG</td><td className="py-2 px-3">Retrieve + cite</td><td className="py-2 px-3">Factual grounding</td><td className="py-2 px-3">Answer or unknown</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Maieutic skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">Maieutic skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`Q: <question>
1) Draft answer.
2) Claims: Claim: ... Because: ...
3) Expand depth N.
4) Label SUPPORT / CONTRADICT.
5) Prune contradictions.
6) Output { answer, explanation_tree }.`}</pre>
      </div>
      {/* Self-Refine skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">Self-Refine skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`GEN: produce draft.
CRITIQUE: issues by category + checklist.
REFINE: apply checklist + CHANGELOG.
STOP: if 'NO MATERIAL ISSUES' or max_rounds.`}</pre>
      </div>
      {/* Least-to-Most skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">Least-to-Most skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`DECOMPOSE: S1..Sn (easiest->hardest).
SOLVE: S_i referencing previous.
RETURN: final answer + steps JSON.`}</pre>
      </div>
      {/* Self-Consistency skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">Self-Consistency skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`FOR i in 1..K: sample reasoning (temp>0).
COLLECT answers.
SELECT majority / best-scored.`}</pre>
      </div>
      {/* RAG skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">RAG skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`EMBED + INDEX docs.
RETRIEVE top k.
PROMPT with passages + cite requirement.
ANSWER or unknown.`}</pre>
      </div>
    </section>
  )
}
