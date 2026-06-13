import { useState, useCallback, useEffect } from 'react'

export interface Flashcard {
  id: string
  front: string
  back: string
  topic: string
  correct: number
  wrong: number
}

export function useFlashcards(moduleId: string) {
  const [cards, setCards] = useState<Flashcard[]>([])

  useEffect(() => {
    fetch(`/api/flashcards/${moduleId}`)
      .then(r => r.json())
      .then(setCards)
      .catch(() => {})
  }, [moduleId])

  const addCards = useCallback((incoming: Omit<Flashcard, 'id' | 'correct' | 'wrong'>[]) => {
    const withIds = incoming.map(c => ({
      ...c,
      id: crypto.randomUUID(),
      correct: 0,
      wrong: 0,
    }))
    setCards(prev => [...prev, ...withIds])
    fetch(`/api/flashcards/${moduleId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(withIds),
    }).catch(() => {})
  }, [moduleId])

  const markResult = useCallback((id: string, result: 'correct' | 'wrong') => {
    setCards(prev => prev.map(c => c.id === id ? { ...c, [result]: c[result] + 1 } : c))
    fetch(`/api/flashcards/${id}/result`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correct: result === 'correct' }),
    }).catch(() => {})
  }, [])

  const removeCard = useCallback((id: string) => {
    setCards(prev => prev.filter(c => c.id !== id))
    fetch(`/api/flashcards/${id}`, { method: 'DELETE' }).catch(() => {})
  }, [])

  const clearCards = useCallback(() => {
    setCards([])
    fetch(`/api/flashcards/${moduleId}/all`, { method: 'DELETE' }).catch(() => {})
  }, [moduleId])

  return { cards, addCards, markResult, removeCard, clearCards }
}
