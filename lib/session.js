const encoder = new TextEncoder()

export const SESSION_COOKIE = 'admin_session'
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

async function getKey() {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error('SESSION_SECRET is not set in the environment.')
  }
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function toBase64Url(bytes) {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(str) {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

export async function createSessionToken(payload) {
  const key = await getKey()
  const body = JSON.stringify({ ...payload, exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000 })
  const bodyB64 = toBase64Url(encoder.encode(body))
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(bodyB64))
  const sigB64 = toBase64Url(new Uint8Array(signature))
  return `${bodyB64}.${sigB64}`
}

export async function verifySessionToken(token) {
  if (!token || !token.includes('.')) return null
  const [bodyB64, sigB64] = token.split('.')
  try {
    const key = await getKey()
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      fromBase64Url(sigB64),
      encoder.encode(bodyB64)
    )
    if (!valid) return null

    const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(bodyB64)))
    if (!payload.exp || payload.exp < Date.now()) return null

    return payload
  } catch {
    return null
  }
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/',
  maxAge: SESSION_MAX_AGE_SECONDS,
}
