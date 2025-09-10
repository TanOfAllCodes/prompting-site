/* Section 05.11: 10 — References */
import React from 'react'

export default function Page() {
  return (
    <section className="content-section space-y-6">
      <div className="card bg-blue-50 border-blue-200">
  <h1 className="text-3xl font-bold" style={{ color: '#001947' }}>Chapter 10 — References</h1>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Primary papers</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><a href="https://arxiv.org/abs/2205.10625" target="_blank">Least-to-Most Prompting</a> — decomposition for compositional reasoning.</li>
          <li><a href="https://arxiv.org/abs/2205.11822" target="_blank">Maieutic / Explanation Tree</a> — recursive explanation consistency.</li>
          <li><a href="https://arxiv.org/abs/2303.17651" target="_blank">Self-Refine</a> — iterative critique/refine loop.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Practical resources</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><a href="https://learnprompting.org/" target="_blank">Learn Prompting</a> — broad introductory coverage.</li>
          <li><a href="https://github.com/openai/openai-cookbook" target="_blank">OpenAI Cookbook</a> — implementation examples & patterns.</li>
          <li><a href="https://www.promptingguide.ai/" target="_blank">Prompt Engineering Guide</a> — curated techniques & updates.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Evaluation & safety</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li><a href="https://arxiv.org/abs/2303.08774" target="_blank">Holistic Evaluation of Language Models</a></li>
          <li><a href="https://platform.openai.com/docs/guides/moderation" target="_blank">OpenAI Moderation</a> — content filtering guidance.</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Suggested reading progression</h2>
        <ol className="list-decimal ml-5 mt-2 text-gray-700 space-y-1">
          <li>Core prompting styles (Chapter 02)</li>
          <li>Advanced orchestration (Chapters 03–06)</li>
          <li>Pitfalls & guardrails (Chapter 08)</li>
          <li>Cheat sheets (Chapter 09)</li>
          <li>Primary papers (this chapter)</li>
        </ol>
      </div>
    </section>
  )
}
