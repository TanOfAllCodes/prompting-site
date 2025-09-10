/* Section 05.04: 03 — Advanced Strategies */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 03 — Advanced Strategies</h1>
      </div>
      {/* Overview */}
      <div className="card">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700 mt-2">These strategies compound core styles (Chapter 02) to increase reliability, factual grounding, or exploration depth. Use them selectively—each adds latency, cost, or complexity.</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Self‑Consistency:</strong> Majority voting across sampled reasoning traces.</li>
          <li><strong>ReAct:</strong> Alternating natural language reasoning with external tool calls.</li>
          <li><strong>Tree‑of‑Thoughts:</strong> Search over branching reasoning states, pruning weak ones.</li>
          <li><strong>RAG:</strong> Inject retrieved context before generation to constrain hallucination.</li>
          <li><strong>Adversarial / Debate:</strong> Force perspectives to surface blind spots.</li>
        </ul>
      </div>
      {/* Self-Consistency */}
      <div className="card">
        <h2 className="text-xl font-semibold">Self‑Consistency</h2>
        <p className="text-gray-700 mt-2">Run the same structured reasoning prompt K times with temperature &gt; 0, collect answers + rationales, then select by majority, scoring, or aggregation.</p>
        <pre className="code whitespace-pre-line mt-2">{`# Pseudocode
answers = []
for i in range(K):
  r = call_model(prompt, temperature=0.7)
  answers.append(parse_answer(r))
final = majority(answers)`}</pre>
        <p className="text-gray-700 mt-2"><strong>Tradeoff:</strong> Linear cost; diminishing returns after ~7 samples.</p>
      </div>
      {/* ReAct */}
      <div className="card">
        <h2 className="text-xl font-semibold">ReAct (Reason + Act)</h2>
        <p className="text-gray-700 mt-2">Model emits alternating Thought / Action / Observation steps calling tools.</p>
        <pre className="code whitespace-pre-line mt-2">{`You are an agent. Use Thought / Action / Observation.
Tools: search(query), calc(expr)
Question: How many hours between local noon in Paris and 3pm in Tokyo next Friday?
Thought: Need time difference. I'll search.
Action: search("Paris Tokyo time difference")
Observation: Paris UTC+1, Tokyo UTC+9.
Thought: Tokyo 15:00 vs Paris ? 15 - (9-1) = 7.
Final Answer: 7 hours.`}</pre>
        <p className="text-gray-700 mt-2"><strong>Key:</strong> Enforce strict action schema; server must supply real observations.</p>
      </div>
      {/* Tree-of-Thoughts */}
      <div className="card">
        <h2 className="text-xl font-semibold">Tree‑of‑Thoughts (ToT)</h2>
        <p className="text-gray-700 mt-2">Generalizes Chain‑of‑Thought to search. Branches = alternative partial solutions; controller keeps top B.</p>
        <pre className="code whitespace-pre-line mt-2">{`frontier = [root]
for depth in range(D):
  pool = []
  for state in frontier:
    children = propose_next(state, N)   # model call
    scored = score(children)
    pool.extend(scored)
  frontier = select_top(pool, B)
return best(frontier)`}</pre>
        <p className="text-gray-700 mt-2"><strong>Heuristics:</strong> constraint satisfaction, numerical plausibility, partial reward models.</p>
      </div>
      {/* RAG */}
      <div className="card">
        <h2 className="text-xl font-semibold">Retrieval‑Augmented Generation (RAG)</h2>
        <p className="text-gray-700 mt-2">Retrieves external passages to ground generation and cite sources.</p>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li>Index documents (embeddings + metadata).</li>
          <li>Rewrite / condense user query (optional).</li>
          <li>Retrieve top k (diversify with MMR).</li>
          <li>Assemble constrained prompt with citations.</li>
          <li>Generate; fallback if insufficient evidence.</li>
        </ol>
        <pre className="code whitespace-pre-line mt-2">{`[SYSTEM] Cite only from provided sources as [S#]. If unknown, say you cannot answer.
S1: ...
S2: ...
Question: ...
Answer:`}</pre>
        <p className="text-gray-700 mt-2"><strong>Common issue:</strong> Query drift → add query expansion or multi-vector retrieval.</p>
      </div>
      {/* Debate */}
      <div className="card">
        <h2 className="text-xl font-semibold">Adversarial / Debate prompting</h2>
        <p className="text-gray-700 mt-2">Opposing roles enumerate strongest arguments, then a synthesis phase reconciles.</p>
        <pre className="code whitespace-pre-line mt-2">{`Topic: Adopt Rust for backend?
Role A (Advocate): list 3 strongest benefits.
Role B (Skeptic): list 3 strongest risks.
Synthesis: Balanced recommendation citing each side.`}</pre>
        <p className="text-gray-700 mt-2"><strong>Tip:</strong> Seed explicit divergent priors to avoid echoing.</p>
      </div>
      {/* Strategy selection table */}
      <div className="card">
        <h2 className="text-xl font-semibold">Strategy selection table</h2>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 border-b">Need</th>
                <th className="py-2 px-3 border-b">Strategy</th>
                <th className="py-2 px-3 border-b">Why</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Reduce stochastic error</td><td className="py-2 px-3 font-medium">Self‑Consistency</td><td className="py-2 px-3">Majority dampens outliers</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Need tools / APIs</td><td className="py-2 px-3 font-medium">ReAct</td><td className="py-2 px-3">Structured tool invocation</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Branching reasoning</td><td className="py-2 px-3 font-medium">Tree‑of‑Thoughts</td><td className="py-2 px-3">Explores alternatives</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Factual grounding</td><td className="py-2 px-3 font-medium">RAG</td><td className="py-2 px-3">Inject external sources</td></tr>
              <tr className="odd:bg-white even:bg-gray-50"><td className="py-2 px-3">Surface bias</td><td className="py-2 px-3 font-medium">Debate</td><td className="py-2 px-3">Contrasting priors</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Failure modes */}
      <div className="card">
        <h2 className="text-xl font-semibold">Failure modes & mitigations</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><strong>Latency inflation:</strong> Too many calls → baseline first.</li>
          <li><strong>Tool hallucination:</strong> Model fabricates outputs → strict server substitution.</li>
          <li><strong>Branch explosion:</strong> Exponential ToT growth → cap depth & beam.</li>
          <li><strong>Context stuffing:</strong> Low-quality retrieval → passage re-ranking.</li>
          <li><strong>Homogeneous perspectives:</strong> Debate agents agree → seed divergence.</li>
        </ul>
      </div>
      {/* Checklist */}
      <div className="card">
        <h2 className="text-xl font-semibold">Mini checklist</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Baseline core prompt measured?</li>
          <li>Added cost justified by accuracy / safety gain?</li>
          <li>Automated verifier or tests in loop?</li>
          <li>Can sampling / branches be parallelized?</li>
          <li>Logging reasoning artifacts for audit?</li>
        </ul>
      </div>
    </section>
  )
}
