import { useState } from 'react'
import { LoginContainer, Form } from './style'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email === 'josegomes@gmail.com' || password === '123') {
      window.localStorage.setItem('token', `123`)
      window.localStorage.setItem('perfil', `user`)
      navigate('/user')
    } else {
      if (email === 'joao123@gmail.com' || password === '123456') {
        window.localStorage.setItem('token', `123456`)
        window.localStorage.setItem('perfil', `admin`)
        navigate('/admin')
      } else {
        window.alert('Utilizador não existe')
      }
    }
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
    </LoginContainer>
  )
}
