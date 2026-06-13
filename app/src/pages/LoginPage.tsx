import { useState } from 'react'
import { checkPassword, setAuthed } from '../lib/auth'

interface Props {
  onSuccess: () => void
}

export function LoginPage({ onSuccess }: Props) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return
    setLoading(true)
    setError(false)
    const ok = await checkPassword(password)
    if (ok) {
      setAuthed()
      onSuccess()
    } else {
      setError(true)
      setPassword('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-dt-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-mono text-sm font-bold text-[#e6edf3] flex items-center justify-center gap-1.5">
            <span className="text-dt-blue opacity-70">[</span>
            DCA
            <span className="text-dt-blue opacity-70">]</span>
          </p>
          <p className="text-xs text-dt-muted mt-1">Dynatrace Associate Certification</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-dt-border bg-dt-surface p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-semibold text-dt-muted uppercase tracking-widest">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false) }}
              autoFocus
              autoComplete="current-password"
              className={`rounded-md border px-3 py-2 text-sm text-dt-text bg-[#0d1117] placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors duration-150 ${
                error
                  ? 'border-red-800 focus:border-red-700 focus:ring-red-900/40'
                  : 'border-dt-border focus:border-dt-blue/60 focus:ring-dt-blue/30'
              }`}
            />
            {error && (
              <p className="text-xs text-red-400">Senha incorreta.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!password || loading}
            className="w-full py-2.5 rounded-md text-sm font-semibold bg-dt-blue text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
          >
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
