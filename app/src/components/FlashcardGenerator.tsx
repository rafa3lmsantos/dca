import { useState } from 'react'
import type { Module } from '../data/modules'
import { generateFlashcards } from '../lib/gemini'
import type { Flashcard } from '../hooks/useFlashcards'

interface Props {
  module: Module
  onGenerate: (cards: Omit<Flashcard, 'id' | 'correct' | 'wrong'>[]) => Promise<void>
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function FlashcardGenerator({ module, onGenerate }: Props) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)

  const handleGenerate = async () => {
    if (!text.trim()) return
    setStatus('loading')
    setError('')
    try {
      const cards = await generateFlashcards(text, module.title)
      await onGenerate(cards)
      setCount(cards.length)
      setStatus('success')
      setText('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao gerar flashcards.')
      setStatus('error')
    }
  }

  return (
    <div className="py-6 max-w-2xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="doc-text" className="text-xs font-semibold text-dt-muted uppercase tracking-widest">
          Conteúdo da documentação
        </label>
        <textarea
          id="doc-text"
          value={text}
          onChange={e => setText(e.target.value)}
          rows={10}
          placeholder="Cole aqui o texto da documentação oficial..."
          className="w-full rounded-lg border border-dt-border bg-[#0d1117] px-4 py-3 text-sm text-dt-text placeholder:text-zinc-600 focus:outline-none focus:border-dt-blue/60 focus:ring-1 focus:ring-dt-blue/30 resize-y transition-colors duration-150"
          disabled={status === 'loading'}
        />
      </div>

      {/* Docs link */}
      <a
        href={module.docsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-dt-blue hover:text-blue-300 transition-colors duration-150 self-start"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Abrir documentação oficial
      </a>

      {/* Error */}
      {status === 'error' && (
        <p className="text-xs text-red-400 bg-red-900/20 border border-red-800/50 rounded-md px-3 py-2">
          {error}
        </p>
      )}

      {/* Success */}
      {status === 'success' && (
        <p className="text-xs text-green-400 bg-green-900/20 border border-green-800/50 rounded-md px-3 py-2">
          {count} flashcard{count !== 1 ? 's' : ''} gerado{count !== 1 ? 's' : ''} com sucesso — disponíveis na aba Flashcards.
        </p>
      )}

      <button
        onClick={handleGenerate}
        disabled={!text.trim() || status === 'loading'}
        className="self-end flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-dt-blue text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Gerando flashcards...
          </>
        ) : (
          <>
            <span aria-hidden>✦</span>
            Gerar Flashcards com Gemini
          </>
        )}
      </button>

      <p className="text-[11px] text-dt-muted leading-relaxed">
        O Gemini atuará como especialista Dynatrace em arquitetura e implantação para gerar questões relevantes ao exame DCA.
      </p>
    </div>
  )
}
