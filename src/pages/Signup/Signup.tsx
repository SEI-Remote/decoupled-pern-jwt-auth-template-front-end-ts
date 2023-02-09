import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

interface SignupProps {
  handleSignupOrLogin: () => void
}

const Signup = (props: SignupProps) => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string) => setMessage(msg)

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
