import jwt_decode from 'jwt-decode'

interface payload {
  exp: number,
  iat: number,
}

function setToken(token: string) {
  localStorage.setItem('token', token)
}

function getToken() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload: payload = jwt_decode(token)
    if (payload.exp < Date.now() / 1000) {
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
  return token ? jwt_decode(token).user : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }
