import * as tokenService from './tokenService'
import { addPhoto as addProfilePhoto } from './profileService'
const BASE_URL = `${import.meta.env.VITE_REACT_APP_BACK_END_SERVER_URL}/api/auth`

interface signUpFormData {
  name: string,
  email: string,
  password: string,
  passwordConf: string,
}

interface loginFormData {
  name?: string,
  pw: string,
  email?: string,
  newPwConf?: string,
}

async function signup(user: signUpFormData, photo: any) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()
    if (json.err) {
      throw new Error(json.err)
    } else if (json.token) {
      tokenService.setToken(json.token)
      const user = tokenService.getUserFromToken()
      if (photo && user) {
        const photoData = new FormData()
        photoData.append('photo', photo)
        return await addProfilePhoto(
          photoData,
          user.profile.id
        )
      }
    }
  } catch (err) {
    throw err
  }
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

async function login(credentials: loginFormData) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

async function changePassword(credentials: loginFormData) {
  try {
    const res = await fetch(`${BASE_URL}/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.removeToken()
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

export { signup, getUser, logout, login, changePassword }
