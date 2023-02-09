import jwt_decode, { JwtPayload } from 'jwt-decode'

interface payload extends JwtPayload {
  user?: { 
    name: string, 
    email: string, 
    profile: {
      id: number 
    }
  },
}

function setToken(token: string) {
  localStorage.setItem('token', token)
}

function getToken() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload: payload = jwt_decode(token)
    if (payload.exp && payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  return token ? jwt_decode<payload>(token).user : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }
