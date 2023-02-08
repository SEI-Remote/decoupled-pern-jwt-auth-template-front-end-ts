import { Types } from 'mongoose'

export interface User {
    name: string,
    email: string,
    password: string,
    profile: Types.ObjectId
}