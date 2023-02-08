import { Types } from 'mongoose'

export interface Profile {
  name: string,
  photo: string,
  _id: Types.ObjectId
}