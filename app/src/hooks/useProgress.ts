import { useState, useCallback, useEffect } from 'react'
import type { ModuleStatus } from '../data/modules'

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, ModuleStatus>>({})

  useEffect(() => {
    fetch('/api/progress')
      .then(r => r.json())
      .then(setProgress)
      .catch(() => {})
  }, [])

  const setStatus = useCallback((id: string, status: ModuleStatus) => {
    setProgress(prev => ({ ...prev, [id]: status }))
    fetch(`/api/progress/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    }).catch(() => {})
  }, [])

  const completedCount = Object.values(progress).filter(s => s === 'done').length

  return { progress, setStatus, completedCount }
}
