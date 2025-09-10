/* Section 05.05: 04 — Maieutic Prompting */
// File renamed to 04-maieutic.tsx
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 04 — Maieutic Prompting</h1>
      </div>
      {/* Overview (replaces Definition) */}
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">Maieutic prompting expands an initial answer into a tree of explanatory claims via iterative 'Why?' probing, then filters contradictions to produce a consistent justification.</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Goal:</strong> Transparent reasoning + internal consistency.</li>
          <li><strong>Shape:</strong> Branching explanation tree vs linear chain.</li>
          <li><strong>Output:</strong> Final answer + pruned explanation tree.</li>
        </ul>
      </div>
      {/* Algorithm */}
      <div className="card">
        <h2 className="text-xl font-semibold">Algorithm (practical)</h2>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li>Draft concise answer.</li>
          <li>Extract atomic claims + immediate 'Because'.</li>
          <li>Expand each 'Because' to depth N (2–3 typical).</li>
          <li>Label SUPPORT / CONTRADICT / IRRELEVANT edges.</li>
          <li>Prune contradictions; return consistent subtree.</li>
        </ol>
      </div>
      {/* Worked example */}
      <div className="card">
        <h2 className="text-xl font-semibold">Worked example (abridged)</h2>
        <pre className="code whitespace-pre-line mt-2">{`Q: Is it safe for dogs to eat grapes?
Answer: No; risk of acute kidney injury.
Claims L1:
 C1: Grapes linked to canine AKI. (Because case reports.)
 C2: Mechanism uncertain. (Because toxin identity unclear.)
 C3: Risk outweighs nutritional value. (Because no essential nutrients.)
Expand C1:
 C1a: Veterinary clusters show ingestion -> AKI.
 C1b: Some dogs unaffected (variability) -> encourages caution.
Labels:
 C1 SUPPORTS answer.
 Any claim contradicting C1 pruned.
Output: { answer, explanation_tree }`}</pre>
      </div>
      {/* Template */}
      <div className="card">
        <h2 className="text-xl font-semibold">Template</h2>
        <pre className="code whitespace-pre-line mt-2">{`Q: <question>
1) Draft answer.
2) Claims: Claim: ... Because: ...
3) Expand to depth N.
4) Label edges.
5) Prune contradictions.
6) Return { answer, explanation_tree }.`}</pre>
      </div>
      {/* When to use */}
      <div className="card">
        <h2 className="text-xl font-semibold">When to use</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Safety / policy justification.</li>
          <li>Explainable tutoring answers.</li>
          <li>Risk assessments needing traceability.</li>
        </ul>
      </div>
      {/* Failure modes */}
      <div className="card">
        <h2 className="text-xl font-semibold">Failure modes & mitigations</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Shallow tree:</strong> Force depth parameter, re‑expand leaves below threshold.</li>
          <li><strong>Contradictions unpruned:</strong> Add verification pass summarizing conflicts.</li>
          <li><strong>Redundancy:</strong> Deduplicate by cosine similarity & semantic hash.</li>
          <li><strong>Unsupported claims:</strong> Pair with retrieval; remove uncited nodes.</li>
        </ul>
      </div>
      {/* Comparison */}
      <div className="card">
        <h2 className="text-xl font-semibold">Quick comparison</h2>
        <table className="w-full text-sm text-left border border-gray-200 mt-2">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-3 border-b">Aspect</th>
              <th className="py-2 px-3 border-b">Maieutic</th>
              <th className="py-2 px-3 border-b">Chain-of-Thought</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Structure</td><td className="py-2 px-3">Tree</td><td className="py-2 px-3">Linear</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Primary Aim</td><td className="py-2 px-3">Consistency & audit</td><td className="py-2 px-3">Answer derivation</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Cost</td><td className="py-2 px-3">Higher</td><td className="py-2 px-3">Lower</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Use when</td><td className="py-2 px-3">Need justification</td><td className="py-2 px-3">Straight reasoning</td></tr>
          </tbody>
        </table>
      </div>
      {/* Checklist */}
      <div className="card">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Depth limit applied?</li>
          <li>Conflicts labeled & removed?</li>
          <li>Claims atomic & concise?</li>
          <li>Unsupported claims flagged?</li>
          <li>Tree machine-readable (JSON)?</li>
        </ul>
      </div>
      {/* Links */}
      <div className="card">
        <h2 className="text-xl font-semibold">Links</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><a href="https://arxiv.org/abs/2205.11822" target="_blank">Maieutic (paper)</a></li>
          <li><a href="https://learnprompting.org/" target="_blank">Learn Prompting</a></li>
        </ul>
      </div>
    </section>
  )
}
