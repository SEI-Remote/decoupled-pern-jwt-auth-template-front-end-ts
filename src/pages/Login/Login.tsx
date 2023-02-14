// npm modules
import { useState } from 'react'

// components
import LoginForm from '../../components/LoginForm/LoginForm'

// stylesheets
import styles from './Login.module.css'

// types
interface LoginPageProps {
  handleAuthEvt: () => void;
} 

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className={styles.container}>
      <h1>Log In</h1>
      <p>{message}</p>
      <LoginForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default LoginPage
