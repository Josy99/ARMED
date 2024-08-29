import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { User } from '../pages/user'
import { Login } from '../pages/login'
import { PrivateRoute } from './PrivateRoute'
import { Admin } from '../pages/adm'
import { Layout } from './layout'



export function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout/>}>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        </Route>
       
        <Route
          path="/admin"
          element={
            <PrivateRoute requiredRole="admin">
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute requiredRole="user">
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
