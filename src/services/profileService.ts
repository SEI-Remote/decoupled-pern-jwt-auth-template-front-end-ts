// services
import * as tokenService from './tokenService'

// types
import { PhotoFormData } from '../types/forms'
import { Profile } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles(): Promise<Profile[]> {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json() as Profile[]
}

async function addPhoto(photoData: PhotoFormData): Promise<string> {
  if (!photoData.photo) throw new Error("No photo found.")
  
  const photoFormData = new FormData()
  photoFormData.append('photo', photoData.photo)

  const user = tokenService.getUserFromToken()
  if (!user) throw new Error("No user.")
  
  const profileId = user.profile.id
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoFormData
  })
  return await res.json() as string
}

export { getAllProfiles, addPhoto }
