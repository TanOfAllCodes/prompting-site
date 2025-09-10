/* Section 05.07: 06 — Least-to-Most Prompting */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 06 — Least-to-Most Prompting</h1>
      </div>
      {/* Overview (expanded) */}
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">Least-to-Most (LtM) decomposes a complex task into a sequence of subproblems ordered from easiest to hardest so earlier solutions scaffold later reasoning.</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Vs Chain-of-Thought:</strong> LtM externalizes structure; CoT is a single monologue.</li>
          <li><strong>Benefit:</strong> Reduces cognitive load; improves compositional generalization.</li>
        </ul>
      </div>
      {/* Decomposition guidelines */}
      <div className="card">
        <h2 className="text-xl font-semibold">Decomposition guidelines</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Each step adds exactly one new transformation or concept.</li>
          <li>Later steps only reference prior outputs explicitly.</li>
          <li>Avoid over-splitting (merge steps that always co-occur).</li>
        </ul>
      </div>
      {/* Worked example */}
      <div className="card">
        <h2 className="text-xl font-semibold">Worked example</h2>
        <pre className="code whitespace-pre-line mt-2">{`Problem: A library has 480 books. 35% are fiction. Of the remainder, 25% are science. How many are neither fiction nor science?
Steps (easiest -> hardest):
 S1: Compute fiction count.
 S2: Compute remaining after fiction.
 S3: Compute science count from remainder.
 S4: Compute remainder after science.
Solutions:
 S1: 0.35 * 480 = 168
 S2: 480 - 168 = 312
 S3: 0.25 * 312 = 78
 S4: 312 - 78 = 234
Answer: 234`}</pre>
      </div>
      {/* Template */}
      <div className="card">
        <h2 className="text-xl font-semibold">Template</h2>
        <pre className="code whitespace-pre-line mt-2">{`Task: <problem>
1) List ordered subproblems (easiest -> hardest).
2) For each i: Solve S_i referencing only S_1..S_{i-1}.
3) Return final answer + JSON breakdown {"steps": [ {"id": "S1", "desc": "...", "value": ... } ]}.`}</pre>
      </div>
      {/* Failure modes */}
      <div className="card">
        <h2 className="text-xl font-semibold">Failure modes & mitigations</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Over-decomposition:</strong> Too many trivial steps → enforce max step count.</li>
          <li><strong>Dependency leak:</strong> Step uses value not yet computed → validate forward-only references.</li>
          <li><strong>Error cascade:</strong> Early mistake propagates → resample first K steps, keep majority.</li>
          <li><strong>Vague steps:</strong> Require verb + object + constraint pattern.</li>
        </ul>
      </div>
      {/* Checklist */}
      <div className="card">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Necessary minimal steps only?</li>
          <li>No backward references?</li>
          <li>Max step limit enforced?</li>
          <li>JSON breakdown included?</li>
        </ul>
      </div>
      {/* Link */}
      <div className="card">
        <h2 className="text-xl font-semibold">Link</h2>
        <p className="text-gray-700 mt-2"><a href="https://arxiv.org/abs/2205.10625" target="_blank">Least-to-Most (paper)</a></p>
      </div>
    </section>
  )
}
