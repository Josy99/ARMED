import { ReactNode } from 'react '
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  children: ReactNode
  requiredRole?: string
}

export function PrivateRoute({ children, requiredRole }: PrivateRouteProps) {
  const auth = window.localStorage.getItem('token')
  const role = window.localStorage.getItem('perfil')

  const isAuthenticated = auth !== '' ? true : false
  const userRole = role

  console.log(role)
  console.log(auth)

  if (!isAuthenticated) return <Navigate to="/login" />
  if (requiredRole && userRole !== requiredRole) return <Navigate to="/" />

  return children
}
