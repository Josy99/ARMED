
import { useNavigate } from 'react-router-dom'
import { UserContainer } from './style'
import { Footer } from '../../components/Footer'
import { HeaderProfile } from '../components/Header'

export function User() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')

    navigate('/login')
  }
  return (
    <>
      <HeaderProfile/>
        <UserContainer>
        <div>
            <h2>User</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </UserContainer>
      <Footer/>
   </>
  )
}
