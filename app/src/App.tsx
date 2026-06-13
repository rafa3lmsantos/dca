import { useState } from 'react'
import { Home } from './pages/Home'
import { ModulePage } from './pages/ModulePage'

type Page =
  | { name: 'home' }
  | { name: 'module'; id: string }

export default function App() {
  const [page, setPage] = useState<Page>({ name: 'home' })

  return (
    <div className="min-h-screen bg-dt-dark flex flex-col">
      <nav className="sticky top-0 z-10 border-b border-dt-border bg-dt-dark/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center">
          <button
            onClick={() => setPage({ name: 'home' })}
            className="font-mono text-sm font-bold text-[#e6edf3] hover:text-dt-blue transition-colors duration-150 flex items-center gap-1.5"
            aria-label="Ir para página inicial"
          >
            <span className="text-dt-blue opacity-70">[</span>
            DCA
            <span className="text-dt-blue opacity-70">]</span>
          </button>
        </div>
      </nav>

      {page.name === 'home' && (
        <Home onNavigate={id => setPage({ name: 'module', id })} />
      )}
      {page.name === 'module' && (
        <ModulePage
          moduleId={page.id}
          onBack={() => setPage({ name: 'home' })}
        />
      )}
    </div>
  )
}
