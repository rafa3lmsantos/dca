import { GoogleGenerativeAI } from '@google/generative-ai'
import type { Flashcard } from '../hooks/useFlashcards'

const SYSTEM_PROMPT = `Você é um Especialista Dynatrace certificado com foco em arquitetura e implantação da plataforma.
Seu objetivo é criar flashcards de estudo para a certificação Dynatrace Associate (DCA) baseados na documentação oficial.

Gere flashcards objetivos e precisos, focados em conceitos que podem cair em questões de múltipla escolha e na seção prática do exame.
Use terminologia técnica correta: OneAgent, Grail, Smartscape, Davis AI, AutomationEngine, ActiveGate, DQL, PurePath, etc.

IMPORTANTE: Retorne SOMENTE JSON válido, sem markdown, sem texto adicional, no formato:
[{ "front": "pergunta objetiva", "back": "resposta concisa e precisa", "topic": "nome do tópico" }]

Gere entre 8 e 15 flashcards por chamada.`

function getApiKey(): string {
  const fromLocalStorage = localStorage.getItem('dca_gemini_key')
  if (fromLocalStorage) return fromLocalStorage
  const fromEnv = import.meta.env.VITE_GEMINI_API_KEY
  if (fromEnv) return fromEnv
  throw new Error('API key do Gemini não configurada. Acesse Configurações para adicionar sua chave.')
}

export async function generateFlashcards(
  content: string,
  topic: string
): Promise<Omit<Flashcard, 'id' | 'correct' | 'wrong'>[]> {
  const apiKey = getApiKey()
  const genAI = new GoogleGenerativeAI(apiKey)

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: SYSTEM_PROMPT,
  })

  const prompt = `Tópico: ${topic}

Documentação:
${content}

Gere flashcards para o exame DCA baseados neste conteúdo.`

  const result = await model.generateContent(prompt)
  const text = result.response.text().trim()

  const jsonText = text.startsWith('[') ? text : text.replace(/^```json?\n?/, '').replace(/\n?```$/, '')

  const parsed = JSON.parse(jsonText) as Array<{ front: string; back: string; topic: string }>

  return parsed.map(c => ({
    front: c.front,
    back: c.back,
    topic: c.topic ?? topic,
  }))
}
