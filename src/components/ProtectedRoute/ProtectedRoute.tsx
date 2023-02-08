import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { User } from '../../interfaces/user.model'

type ProtectedRouteProps = {
  user: User,
  children?: ReactNode
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) { return <Navigate to="/login" /> }
  return children
}

export default ProtectedRoute
