const { DatabaseSync } = require('node:sqlite')
const path = require('path')
const fs = require('fs')

const dataDir = path.join(__dirname, 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

const db = new DatabaseSync(path.join(dataDir, 'dca.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS progress (
    module_id  TEXT PRIMARY KEY,
    status     TEXT NOT NULL DEFAULT 'not_started',
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS flashcards (
    id         TEXT PRIMARY KEY,
    module_id  TEXT NOT NULL,
    front      TEXT NOT NULL,
    back       TEXT NOT NULL,
    topic      TEXT,
    correct    INTEGER NOT NULL DEFAULT 0,
    wrong      INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );
`)

module.exports = db
