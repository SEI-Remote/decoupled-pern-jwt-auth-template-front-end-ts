import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'

interface ChangePasswordProps {
  handleSignupOrLogin: () => void,
} 

const ChangePassword = (props: ChangePasswordProps): JSX.Element => {
  const [message, setMessage] = useState<string>('')

  const updateMessage = (msg: string): void => setMessage(msg)
  
  return (
    <main className={styles.container}>
      <h1>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
