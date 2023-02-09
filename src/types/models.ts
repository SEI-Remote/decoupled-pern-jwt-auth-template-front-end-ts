export interface Profile {
  name: string,
  photo: string,
  id: number
}

export interface User {
  name: string,
  email: string,
  password: string,
  profile: { id: number },
  id: number
}