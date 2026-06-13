import { useState } from 'react'
import type { Flashcard } from '../hooks/useFlashcards'

interface Props {
  cards: Flashcard[]
  onCorrect: (id: string) => void
  onWrong: (id: string) => void
  onDelete: (id: string) => void
}

export function FlashcardDeck({ cards, onCorrect, onWrong, onDelete }: Props) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="text-4xl opacity-30">🗂</div>
        <p className="text-dt-muted text-sm max-w-xs">
          Nenhum flashcard ainda. Vá até a aba <span className="text-dt-text font-medium">Gerar</span> para criar flashcards com Gemini a partir da documentação oficial.
        </p>
      </div>
    )
  }

  if (done) {
    const correct = cards.reduce((s, c) => s + c.correct, 0)
    const wrong   = cards.reduce((s, c) => s + c.wrong, 0)
    const total   = correct + wrong || 1
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
        <p className="text-dt-muted text-xs uppercase tracking-widest font-semibold">Sessão concluída</p>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-green-400">{correct}</span>
            <span className="text-xs text-dt-muted">corretas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-red-400">{wrong}</span>
            <span className="text-xs text-dt-muted">incorretas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-dt-text">{Math.round((correct / total) * 100)}%</span>
            <span className="text-xs text-dt-muted">acerto</span>
          </div>
        </div>
        <button
          onClick={() => { setIndex(0); setFlipped(false); setDone(false) }}
          className="mt-2 px-4 py-2 text-sm font-medium rounded-md border border-dt-border text-dt-text hover:bg-dt-surface transition-colors duration-150"
        >
          Rever todos
        </button>
      </div>
    )
  }

  const card = cards[index]

  const handleNext = (result: 'correct' | 'wrong') => {
    if (result === 'correct') onCorrect(card.id)
    else onWrong(card.id)

    if (index + 1 >= cards.length) {
      setDone(true)
    } else {
      setIndex(i => i + 1)
      setFlipped(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="flex items-center justify-between w-full max-w-lg">
        <span className="text-xs text-dt-muted font-mono">
          Card {index + 1} de {cards.length}
        </span>
        <button
          onClick={() => { onDelete(card.id); if (index >= cards.length - 1) setIndex(Math.max(0, index - 1)) }}
          className="text-xs text-dt-muted hover:text-red-400 transition-colors duration-150"
          aria-label="Remover este card"
        >
          remover
        </button>
      </div>

      {/* Card */}
      <div
        className="fc-container w-full max-w-lg cursor-pointer"
        style={{ height: 220 }}
        onClick={() => setFlipped(f => !f)}
        role="button"
        aria-pressed={flipped}
        aria-label={flipped ? 'Clique para ver a pergunta' : 'Clique para ver a resposta'}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? setFlipped(f => !f) : undefined}
      >
        <div className={`fc-inner ${flipped ? 'is-flipped' : ''}`} style={{ height: 220 }}>
          {/* Front */}
          <div className="fc-face absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-dt-border bg-dt-surface p-8 text-center">
            <p className="text-[10px] text-dt-muted font-semibold uppercase tracking-widest mb-4">Pergunta</p>
            <p className="text-[#e6edf3] text-base leading-relaxed font-medium">{card.front}</p>
            <p className="text-[10px] text-dt-muted mt-6">clique para revelar</p>
          </div>

          {/* Back */}
          <div className="fc-back fc-face absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-dt-blue/40 bg-[#0d1f33] p-8 text-center">
            <p className="text-[10px] text-dt-muted font-semibold uppercase tracking-widest mb-4">Resposta</p>
            <p className="text-[#e6edf3] text-base leading-relaxed">{card.back}</p>
            <span className="mt-5 text-[10px] font-medium text-dt-muted bg-[#21262d] px-2 py-0.5 rounded">
              {card.topic}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons — only show when flipped */}
      <div className={`flex gap-3 transition-opacity duration-150 ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={() => handleNext('wrong')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-red-800 text-red-400 hover:bg-red-900/20 transition-colors duration-150"
        >
          <span aria-hidden>✗</span> Errei
        </button>
        <button
          onClick={() => handleNext('correct')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-green-800 text-green-400 hover:bg-green-900/20 transition-colors duration-150"
        >
          <span aria-hidden>✓</span> Acertei
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1" aria-hidden>
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-1 rounded-full transition-colors duration-150 ${i === index ? 'bg-dt-blue' : 'bg-dt-border'}`}
          />
        ))}
      </div>
    </div>
  )
}
