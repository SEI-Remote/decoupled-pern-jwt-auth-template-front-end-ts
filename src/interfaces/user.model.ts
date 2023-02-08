import { Types } from 'mongoose'

export interface User {
    name: string,
    email: string,
    password: string,
    profile: Types.ObjectId
    _id: Types.ObjectId
}

export interface LoginSignupFormProps {
    handleSignupOrLogin: () => void,
    updateMessage: (msg: string) => void
}