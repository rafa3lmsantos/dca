import { useState } from 'react'
import { Home } from './pages/Home'
import { ModulePage } from './pages/ModulePage'
import { Settings } from './pages/Settings'

type Page =
  | { name: 'home' }
  | { name: 'module'; id: string }
  | { name: 'settings' }

export default function App() {
  const [page, setPage] = useState<Page>({ name: 'home' })

  return (
    <div className="min-h-screen bg-dt-dark flex flex-col">
      {/* Top nav */}
      <nav className="sticky top-0 z-10 border-b border-dt-border bg-dt-dark/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <button
            onClick={() => setPage({ name: 'home' })}
            className="font-mono text-sm font-bold text-[#e6edf3] hover:text-dt-blue transition-colors duration-150 flex items-center gap-2"
            aria-label="Ir para página inicial"
          >
            <span className="text-dt-blue opacity-70">[</span>
            DCA
            <span className="text-dt-blue opacity-70">]</span>
          </button>

          <button
            onClick={() => setPage({ name: 'settings' })}
            className="flex items-center gap-1.5 text-xs text-dt-muted hover:text-dt-text transition-colors duration-150 px-2 py-1 rounded hover:bg-dt-surface"
            aria-label="Configurações"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Configurações
          </button>
        </div>
      </nav>

      {/* Page content */}
      {page.name === 'home' && (
        <Home onNavigate={id => setPage({ name: 'module', id })} />
      )}
      {page.name === 'module' && (
        <ModulePage
          moduleId={page.id}
          onBack={() => setPage({ name: 'home' })}
        />
      )}
      {page.name === 'settings' && (
        <Settings onBack={() => setPage({ name: 'home' })} />
      )}
    </div>
  )
}
