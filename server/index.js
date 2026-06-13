const express = require('express')
const db = require('./db')

const app = express()
app.use(express.json())

// ── Progress ──────────────────────────────────────────────────────────────────

app.get('/api/progress', (_req, res) => {
  const rows = db.prepare('SELECT module_id, status FROM progress').all()
  const result = {}
  rows.forEach(r => { result[r.module_id] = r.status })
  res.json(result)
})

app.put('/api/progress/:moduleId', (req, res) => {
  const { moduleId } = req.params
  const { status } = req.body
  db.prepare(`
    INSERT INTO progress (module_id, status) VALUES (?, ?)
    ON CONFLICT(module_id) DO UPDATE SET status = excluded.status, updated_at = datetime('now')
  `).run(moduleId, status)
  res.json({ ok: true })
})

// ── Flashcards ────────────────────────────────────────────────────────────────

app.get('/api/flashcards/:moduleId', (req, res) => {
  const rows = db.prepare(
    'SELECT * FROM flashcards WHERE module_id = ? ORDER BY created_at ASC'
  ).all(req.params.moduleId)
  res.json(rows)
})

app.post('/api/flashcards/:moduleId', (req, res) => {
  const { moduleId } = req.params
  const cards = req.body
  const insert = db.prepare(
    'INSERT OR IGNORE INTO flashcards (id, module_id, front, back, topic) VALUES (?, ?, ?, ?, ?)'
  )
  db.exec('BEGIN')
  try {
    for (const c of cards) insert.run(c.id, moduleId, c.front, c.back, c.topic ?? null)
    db.exec('COMMIT')
  } catch (e) {
    db.exec('ROLLBACK')
    return res.status(500).json({ error: e.message })
  }
  res.json({ ok: true })
})

app.patch('/api/flashcards/:id/result', (req, res) => {
  const { correct } = req.body
  const field = correct ? 'correct' : 'wrong'
  db.prepare(`UPDATE flashcards SET ${field} = ${field} + 1 WHERE id = ?`).run(req.params.id)
  res.json({ ok: true })
})

app.delete('/api/flashcards/:id', (req, res) => {
  db.prepare('DELETE FROM flashcards WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})

app.delete('/api/flashcards/:moduleId/all', (req, res) => {
  db.prepare('DELETE FROM flashcards WHERE module_id = ?').run(req.params.moduleId)
  res.json({ ok: true })
})

// ─────────────────────────────────────────────────────────────────────────────

const PORT = 3001
app.listen(PORT, () => console.log(`DCA server → http://localhost:${PORT}`))
