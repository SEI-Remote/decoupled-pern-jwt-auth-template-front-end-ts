import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

interface LoginPageProps {
  handleSignupOrLogin: () => void,
} 

const LoginPage = (props: LoginPageProps) => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string) => setMessage(msg)

  return (
    <main className={styles.container}>
      <h1>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  )
}

export default LoginPage
