import { useState } from 'react'
import { MODULES, type ModuleStatus } from '../data/modules'
import { MODULE_CONTENT } from '../data/content'
import { useProgress } from '../hooks/useProgress'
import { useFlashcards } from '../hooks/useFlashcards'
import { ModuleViewer } from '../components/ModuleViewer'
import { FlashcardDeck } from '../components/FlashcardDeck'
import { FlashcardGenerator } from '../components/FlashcardGenerator'

type Tab = 'content' | 'flashcards' | 'generate'

const TABS: { id: Tab; label: string }[] = [
  { id: 'content',    label: 'Conteúdo' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'generate',   label: 'Gerar' },
]

const STATUS_OPTIONS: { value: ModuleStatus; label: string }[] = [
  { value: 'not_started', label: 'Não iniciado' },
  { value: 'in_progress', label: 'Em progresso' },
  { value: 'done',        label: 'Concluído' },
]

interface Props {
  moduleId: string
  onBack: () => void
}

export function ModulePage({ moduleId, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('content')
  const module = MODULES.find(m => m.id === moduleId)!
  const content = MODULE_CONTENT[moduleId] ?? ''

  const { progress, setStatus } = useProgress()
  const { cards, addCards, markResult, removeCard } = useFlashcards(moduleId)
  const currentStatus = progress[moduleId] ?? 'not_started'

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 w-full">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-dt-muted hover:text-dt-text transition-colors duration-150 flex items-center gap-1.5"
            aria-label="Voltar para módulos"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Módulos
          </button>
          <span className="text-dt-border">/</span>
          <span className="font-mono text-xs text-dt-muted bg-[#21262d] px-2 py-0.5 rounded">{module.id}</span>
          <h1 className="text-base font-semibold text-[#e6edf3]">{module.title}</h1>
        </div>

        {/* Status selector */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {STATUS_OPTIONS.map(opt => {
            const active = currentStatus === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => setStatus(moduleId, opt.value)}
                className={`text-xs font-medium px-2.5 py-1 rounded-md border transition-colors duration-150 ${
                  active
                    ? opt.value === 'done'
                      ? 'border-green-700 bg-green-900/25 text-green-400'
                      : opt.value === 'in_progress'
                      ? 'border-amber-700 bg-amber-900/25 text-amber-400'
                      : 'border-dt-border bg-[#21262d] text-dt-muted'
                    : 'border-transparent text-zinc-600 hover:text-dt-muted hover:border-dt-border'
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-dt-border mb-6">
        <div className="flex gap-0" role="tablist">
          {TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                tab === t.id ? 'text-[#e6edf3]' : 'text-dt-muted hover:text-dt-text'
              }`}
            >
              {t.label}
              {t.id === 'flashcards' && cards.length > 0 && (
                <span className="ml-1.5 text-[10px] font-semibold text-dt-muted bg-[#21262d] px-1.5 py-0.5 rounded-full">
                  {cards.length}
                </span>
              )}
              {tab === t.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dt-blue rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div role="tabpanel">
        {tab === 'content' && <ModuleViewer content={content} />}

        {tab === 'flashcards' && (
          <FlashcardDeck
            cards={cards}
            onCorrect={id => markResult(id, 'correct')}
            onWrong={id => markResult(id, 'wrong')}
            onDelete={removeCard}
          />
        )}

        {tab === 'generate' && (
          <FlashcardGenerator
            module={module}
            onGenerate={async newCards => {
              addCards(newCards)
              setTab('flashcards')
            }}
          />
        )}
      </div>
    </main>
  )
}
