export interface Profile {
  name: string;
  photo: string;
  id: number;
  avatar?: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
}