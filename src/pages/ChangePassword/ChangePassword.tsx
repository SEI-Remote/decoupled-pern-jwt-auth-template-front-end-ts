import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'

interface ChangePassWordProps {
  handleSignupOrLogin: () => void,
} 

const ChangePassword = (props: ChangePassWordProps) => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string) => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
