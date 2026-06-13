import { useState, useCallback } from 'react'

export interface Flashcard {
  id: string
  front: string
  back: string
  topic: string
  correct: number
  wrong: number
}

function storageKey(moduleId: string) {
  return `dca_flashcards_${moduleId}`
}

function load(moduleId: string): Flashcard[] {
  try {
    return JSON.parse(localStorage.getItem(storageKey(moduleId)) ?? '[]')
  } catch {
    return []
  }
}

export function useFlashcards(moduleId: string) {
  const [cards, setCards] = useState<Flashcard[]>(() => load(moduleId))

  const save = useCallback((next: Flashcard[]) => {
    localStorage.setItem(storageKey(moduleId), JSON.stringify(next))
    setCards(next)
  }, [moduleId])

  const addCards = useCallback((incoming: Omit<Flashcard, 'id' | 'correct' | 'wrong'>[]) => {
    setCards(prev => {
      const next = [
        ...prev,
        ...incoming.map(c => ({
          ...c,
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          correct: 0,
          wrong: 0,
        })),
      ]
      localStorage.setItem(storageKey(moduleId), JSON.stringify(next))
      return next
    })
  }, [moduleId])

  const markResult = useCallback((id: string, result: 'correct' | 'wrong') => {
    setCards(prev => {
      const next = prev.map(c =>
        c.id === id ? { ...c, [result]: c[result] + 1 } : c
      )
      localStorage.setItem(storageKey(moduleId), JSON.stringify(next))
      return next
    })
  }, [moduleId])

  const removeCard = useCallback((id: string) => {
    setCards(prev => {
      const next = prev.filter(c => c.id !== id)
      localStorage.setItem(storageKey(moduleId), JSON.stringify(next))
      return next
    })
  }, [moduleId])

  const clearCards = useCallback(() => {
    save([])
  }, [save])

  return { cards, addCards, markResult, removeCard, clearCards }
}
