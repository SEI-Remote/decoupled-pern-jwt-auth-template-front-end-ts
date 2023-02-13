import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

interface LoginPageProps {
  handleSignupOrLogin: () => void,
} 

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const [message, setMessage] = useState<string>('')

  const updateMessage = (msg: string): void => setMessage(msg)

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
