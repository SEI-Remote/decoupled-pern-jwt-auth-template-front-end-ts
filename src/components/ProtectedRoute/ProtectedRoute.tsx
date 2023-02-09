import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { User } from '../../types/models'

interface ProtectedRouteProps {
  user: User | null,
  children: ReactNode
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) { return <Navigate to="/login" /> }
  return <> { children } </>
}

export default ProtectedRoute
