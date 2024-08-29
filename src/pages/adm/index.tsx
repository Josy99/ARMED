import { Footer } from '../../components/Footer'
import { HeaderProfile } from '../components/Header'
import { AdmContainer } from './styele'
import { useNavigate } from 'react-router-dom'

export function Admin() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')

    navigate('/login')
  }
  return (
    <>
    <HeaderProfile/>
        <AdmContainer>
          <div>
            <h2>Admin</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </AdmContainer>
      <Footer/>
    </>   
  )
}
