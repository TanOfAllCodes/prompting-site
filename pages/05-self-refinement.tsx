/* Section 05.06: 05 — Self-Refinement */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 05 — Self-Refinement</h1>
      </div>
      {/* Overview (replaces simple sentence) */}
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">Self-Refinement is an internal loop where the model critiques and iteratively improves its own output until quality converges or a round limit is reached.</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Pros:</strong> Improves quality without external labels.</li>
          <li><strong>Cons:</strong> May reinforce errors; increased latency.</li>
        </ul>
      </div>
      {/* Loop pattern */}
      <div className="card">
        <h2 className="text-xl font-semibold">Loop pattern</h2>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li>Generate initial draft.</li>
            <li>Critique: list categorized issues + prioritized checklist.</li>
            <li>Refine: apply checklist + provide change summary.</li>
            <li>Terminate if no material issues OR max rounds reached.</li>
        </ol>
      </div>
      {/* Code example expanded */}
      <div className="card">
        <h2 className="text-xl font-semibold">Code evolution example (palindrome)</h2>
        <pre className="code whitespace-pre-line mt-2">{`# Round 0
 def is_palindrome(s):
     return s == s[::-1]

 # Critique:
 # - Case sensitive
 # - Punctuation unaffected
 # - No docstring or examples

 # Round 1
 def is_palindrome(s):
     """Return True if s is a palindrome ignoring case & non-alphanumerics."""
     cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
     return cleaned == cleaned[::-1]

 # Round 1 critique:
 # - Add type hints
 # - Add test example(s)

 # Round 2
 def is_palindrome(s: str) -> bool:
     """Check palindrome ignoring case & non-alphanumerics.
     Example: 'Racecar!' -> True"""
     filtered = ''.join(c.lower() for c in s if c.isalnum())
     return filtered == filtered[::-1]`}</pre>
      </div>
      {/* Prompt skeleton */}
      <div className="card">
        <h2 className="text-xl font-semibold">Prompt skeleton</h2>
        <pre className="code whitespace-pre-line mt-2">{`[TASK]
 Produce initial draft for: <spec>.

 [CRITIQUE]
 List issues under: correctness, completeness, style, edge cases.
 Provide a MAX 6 item improvement checklist (actionable, ordered).

 [REFINE]
 Apply checklist fully. Output revised draft + CHANGELOG.
 If no improvements possible, emit: NO MATERIAL ISSUES.`}</pre>
      </div>
      {/* Failure modes */}
      <div className="card">
        <h2 className="text-xl font-semibold">Failure modes & mitigations</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Echoing flaws:</strong> Introduce external tests / validators.</li>
          <li><strong>Over-processing:</strong> Stop after N stable rounds.</li>
          <li><strong>Vague checklist items:</strong> Enforce verb + object + constraint.</li>
          <li><strong>Imaginary improvements:</strong> Require change summary diff.</li>
        </ul>
      </div>
      {/* Checklist */}
      <div className="card">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Round cap set?</li>
          <li>Rubric categories defined?</li>
          <li>External validator present?</li>
          <li>Actionable checklist enforced?</li>
          <li>Stop condition logged?</li>
        </ul>
      </div>
      {/* Link */}
      <div className="card">
        <h2 className="text-xl font-semibold">Link</h2>
        <p className="text-gray-700 mt-2"><a href="https://arxiv.org/abs/2303.17651" target="_blank">Self-Refine (paper)</a></p>
      </div>
    </section>
  )
}
