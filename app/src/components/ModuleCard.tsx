import type { Module, ModuleStatus } from '../data/modules'

const STATUS_CONFIG = {
  not_started: { dot: 'bg-zinc-600', label: 'Não iniciado' },
  in_progress:  { dot: 'bg-amber-400', label: 'Em progresso' },
  done:         { dot: 'bg-green-400', label: 'Concluído' },
} as const

interface Props {
  module: Module
  status: ModuleStatus
  onClick: () => void
}

export function ModuleCard({ module, status, onClick }: Props) {
  const cfg = STATUS_CONFIG[status]

  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-lg border border-dt-border bg-dt-surface p-5 transition-all duration-150 hover:border-dt-blue/60 hover:bg-[#1c2128] hover:shadow-[0_0_0_1px_rgba(26,140,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-dt-blue focus-visible:outline-offset-2"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-xs font-semibold text-dt-muted bg-[#21262d] px-2 py-0.5 rounded select-none">
          {module.id}
        </span>
        <span
          className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${cfg.dot}`}
          title={cfg.label}
          aria-label={cfg.label}
        />
      </div>

      <h3 className="text-sm font-semibold text-[#e6edf3] leading-snug mb-1.5 group-hover:text-white transition-colors duration-150">
        {module.title}
      </h3>

      <p className="text-xs text-dt-muted leading-relaxed line-clamp-2 mb-3">
        {module.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {module.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="text-[10px] font-medium text-dt-muted bg-[#21262d] px-1.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
