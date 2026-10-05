import { NextResponse } from 'next/server'
import { createSessionToken, SESSION_COOKIE, SESSION_COOKIE_OPTIONS } from '@/lib/session'

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const { email, password } = body || {}

  if (
    !email ||
    !password ||
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ ok: false, error: 'Invalid email or password.' }, { status: 401 })
  }

  const token = await createSessionToken({ email })

  const response = NextResponse.json({ ok: true })
  response.cookies.set(SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS)
  return response
}
