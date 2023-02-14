// npm modules
import jwt_decode, { JwtPayload } from 'jwt-decode'

// types
import { User } from '../types/models'

interface Payload extends JwtPayload {
  user: User
}

function setToken(token: string): void {
  localStorage.setItem('token', token)
}

function getToken(): string | null {
  let token = localStorage.getItem('token')
  if (token) {
    const payload: Payload = jwt_decode(token)
    if (payload.exp && payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

function getUserFromToken(): User | null {
  const token = getToken()
  return token ? jwt_decode<Payload>(token).user : null
}

function removeToken(): void {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }
