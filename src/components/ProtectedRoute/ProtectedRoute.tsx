// npm modules
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface ProtectedRouteProps {
  user: User | null;
  children: ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps): JSX.Element => {
  const { user, children } = props

  if (!user) return <Navigate to="/login" />
  return <> { children } </>
}

export default ProtectedRoute
