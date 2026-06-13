import { useState } from 'react'

const STORAGE_KEY = 'dca_gemini_key'

interface Props {
  onBack: () => void
}

export function Settings({ onBack }: Props) {
  const saved = localStorage.getItem(STORAGE_KEY) ?? ''
  const [value, setValue] = useState(saved ? '••••••••••••••••••••••••' : '')
  const [editing, setEditing] = useState(!saved)
  const [rawValue, setRawValue] = useState('')
  const [saved2, setSaved2] = useState(false)

  const handleSave = () => {
    const key = editing ? rawValue : value
    if (!key || key.startsWith('•')) return
    localStorage.setItem(STORAGE_KEY, rawValue || value)
    setSaved2(true)
    setEditing(false)
    setValue('••••••••••••••••••••••••')
    setTimeout(() => setSaved2(false), 3000)
  }

  const handleClear = () => {
    localStorage.removeItem(STORAGE_KEY)
    setValue('')
    setRawValue('')
    setEditing(true)
  }

  const handleEdit = () => {
    setEditing(true)
    setValue('')
    setRawValue('')
  }

  return (
    <main className="max-w-xl mx-auto px-4 sm:px-6 py-10 w-full">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={onBack}
          className="text-sm text-dt-muted hover:text-dt-text transition-colors duration-150 flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Voltar
        </button>
        <span className="text-dt-border">/</span>
        <h1 className="text-base font-semibold text-[#e6edf3]">Configurações</h1>
      </div>

      <div className="rounded-lg border border-dt-border bg-dt-surface p-6 flex flex-col gap-5">
        <div>
          <h2 className="text-sm font-semibold text-[#e6edf3] mb-1">API Key do Gemini</h2>
          <p className="text-xs text-dt-muted leading-relaxed">
            A chave da variável de ambiente (<code className="text-[11px] bg-[#21262d] px-1 py-0.5 rounded">VITE_GEMINI_API_KEY</code>) é usada por padrão. Use este campo para sobrescrever em runtime — útil quando o app está hospedado no GitHub Pages sem a variável configurada.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="api-key" className="text-xs font-semibold text-dt-muted uppercase tracking-widest">
            Chave de override
          </label>
          <input
            id="api-key"
            type={editing ? 'text' : 'password'}
            value={editing ? rawValue : value}
            onChange={e => editing ? setRawValue(e.target.value) : undefined}
            readOnly={!editing}
            placeholder={editing ? 'Cole sua API key aqui...' : ''}
            className="rounded-md border border-dt-border bg-[#0d1117] px-3 py-2 text-sm text-dt-text placeholder:text-zinc-600 focus:outline-none focus:border-dt-blue/60 focus:ring-1 focus:ring-dt-blue/30 font-mono transition-colors duration-150"
          />
        </div>

        {saved2 && (
          <p className="text-xs text-green-400 bg-green-900/20 border border-green-800/50 rounded-md px-3 py-2">
            Chave salva com sucesso.
          </p>
        )}

        <div className="flex gap-2">
          {editing ? (
            <button
              onClick={handleSave}
              disabled={!rawValue.trim()}
              className="px-4 py-2 rounded-md text-sm font-semibold bg-dt-blue text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
            >
              Salvar
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 rounded-md text-sm font-medium border border-dt-border text-dt-text hover:bg-[#21262d] transition-colors duration-150"
            >
              Editar
            </button>
          )}
          {!editing && value && (
            <button
              onClick={handleClear}
              className="px-4 py-2 rounded-md text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-900/10 border border-transparent hover:border-red-800/40 transition-colors duration-150"
            >
              Remover
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
