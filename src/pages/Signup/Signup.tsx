// npm packages
import { useState } from 'react'

// components
import SignupForm from '../../components/SignupForm/SignupForm'

// stylesheets
import styles from './Signup.module.css'

// types
interface SignupProps {
  handleAuthEvt: () => void;
}

const Signup = (props: SignupProps): JSX.Element => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
