export async function hashPassword(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function checkPassword(input: string): Promise<boolean> {
  const stored = import.meta.env.VITE_APP_PASSWORD_HASH
  if (!stored) return true // dev mode: no password configured
  return (await hashPassword(input)) === stored
}

export function isAuthed(): boolean {
  const stored = import.meta.env.VITE_APP_PASSWORD_HASH
  if (!stored) return true // dev mode
  return localStorage.getItem('dca_authed') === 'true'
}

export function setAuthed(): void {
  localStorage.setItem('dca_authed', 'true')
}

export function clearAuthed(): void {
  localStorage.removeItem('dca_authed')
}
