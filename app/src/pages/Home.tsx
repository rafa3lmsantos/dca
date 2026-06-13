import { MODULES } from '../data/modules'
import { useProgress } from '../hooks/useProgress'
import { ModuleCard } from '../components/ModuleCard'

interface Props {
  onNavigate: (id: string) => void
}

export function Home({ onNavigate }: Props) {
  const { progress, completedCount } = useProgress()
  const total = MODULES.length
  const pct = Math.round((completedCount / total) * 100)

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#e6edf3] tracking-tight" style={{ textWrap: 'balance' }}>
          DCA Study Guide
        </h1>
        <p className="text-sm text-dt-muted mt-1">Dynatrace Associate Certification — 13 módulos</p>
      </div>

      {/* Progress */}
      <div className="mb-8 p-4 rounded-lg border border-dt-border bg-dt-surface">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-medium text-dt-muted">Progresso geral</span>
          <span className="text-xs font-semibold text-dt-text font-mono">
            {completedCount} / {total}
          </span>
        </div>
        <div className="h-1.5 w-full bg-[#21262d] rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full bg-dt-blue rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-[11px] text-zinc-600 mt-2">{pct}% concluído</p>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {MODULES.map(mod => (
          <ModuleCard
            key={mod.id}
            module={mod}
            status={progress[mod.id] ?? 'not_started'}
            onClick={() => onNavigate(mod.id)}
          />
        ))}
      </div>
    </main>
  )
}
