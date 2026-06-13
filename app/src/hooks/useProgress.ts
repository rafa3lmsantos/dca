import { useState, useCallback } from 'react'
import type { ModuleStatus } from '../data/modules'

const KEY = 'dca_progress'

function load(): Record<string, ModuleStatus> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, ModuleStatus>>(load)

  const setStatus = useCallback((id: string, status: ModuleStatus) => {
    setProgress(prev => {
      const next = { ...prev, [id]: status }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const completedCount = Object.values(progress).filter(s => s === 'done').length

  return { progress, setStatus, completedCount }
}
