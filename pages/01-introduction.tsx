/* Section 05.02: 01 — Introduction */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 01 — Introduction</h1>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">What is prompting?</h2>
        <p className="text-gray-700 mt-2">Prompting is the deliberate craft of shaping the input you give a large language model (LLM) so that its output is <em>reliable</em>, <em>useful</em>, and <em>aligned with your intent</em>. A prompt can include: an instruction, role/persona framing, style constraints, examples (few‑shot), formatting requirements, evaluation criteria, and optional external context (retrieved documents, user data, structured facts).</p>
        <p className="text-gray-700 mt-3">Good prompting reduces downstream editing, lowers cost (fewer retries), and makes later automation (post‑processing, validation, programmatic chaining) easier.</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Core principles</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Explicit over implicit:</strong> State format, perspective, style, success criteria.</li>
          <li><strong>Constrain output surface:</strong> JSON keys, bullet limits, token caps, schema expectations.</li>
          <li><strong>Progressive disclosure:</strong> Decompose complex goals into smaller sequential calls.</li>
          <li><strong>Grounding:</strong> Provide authoritative context (retrieval, domain facts) to lower hallucination risk.</li>
          <li><strong>Iterate with feedback:</strong> Use critique → refine loops for higher factual + stylistic quality.</li>
          <li><strong>Determinism where needed:</strong> Lower temperature for evaluation / parsing; higher for ideation.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">When prompting fails</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Ambiguity:</strong> The model guesses (often confidently) when goals or constraints are underspecified.</li>
          <li><strong>Format drift:</strong> Free‑form natural language instead of machine‑readable JSON / tables.</li>
          <li><strong>Reasoning shortcuts:</strong> The model jumps to an answer without unpacking steps (use CoT / LtM).</li>
          <li><strong>Context dilution:</strong> Long, unordered dumps push key facts past the attention budget.</li>
          <li><strong>Hallucination:</strong> Unsupported claims when retrieval / grounding is absent.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Prompt lifecycle</h2>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Frame:</strong> Clarify task, audience, output channel, success definition.</li>
          <li><strong>Draft:</strong> Produce a minimal but explicit instruction (baseline zero‑shot).</li>
          <li><strong>Enrich:</strong> Add examples (few‑shot) or structure (schema) as failure modes appear.</li>
          <li><strong>Instrument:</strong> Add evaluation prompts (critique / self‑refine) or automated tests.</li>
          <li><strong>Scale:</strong> Externalize variable parts (placeholders) and template safely.</li>
          <li><strong>Monitor:</strong> Track drift (format error rate, hallucination rate, latency, cost).</li>
        </ol>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Quick taxonomy (preview)</h2>
        <p className="text-gray-700 mt-2">You will encounter these categories throughout the guide:</p>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Foundational styles:</strong> Zero‑shot, Few‑shot, Role / Persona.</li>
          <li><strong>Reasoning enhancers:</strong> Chain‑of‑Thought, Decomposition, Self‑Consistency.</li>
          <li><strong>Structural / control:</strong> JSON schemas, delimiters, function / tool specs.</li>
          <li><strong>Advanced orchestration:</strong> Maieutic, Self‑Refinement, Least‑to‑Most, ReAct, Tree‑of‑Thoughts, RAG.</li>
        </ol>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">Evaluation mindsets</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Precision vs. Coverage:</strong> Tight constraints reduce creativity; loosen for ideation phases.</li>
          <li><strong>Factuality vs. Novelty:</strong> Retrieval + low temp for accuracy; diversify when exploring.</li>
          <li><strong>Latency vs. Depth:</strong> Rich reasoning chains improve reliability but increase cost/time.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold">A minimal quality checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Does the prompt state the <em>task</em>, <em>constraints</em>, and <em>output format</em> explicitly?</li>
          <li>Is any required context included or retrieved (no hidden dependencies)?</li>
          <li>Can a machine validator decide pass/fail on the output?</li>
          <li>Are reasoning steps requested when correctness depends on logic?</li>
          <li>Is temperature / sampling appropriate for the goal?</li>
        </ul>
      </div>
    </section>
  )
}
