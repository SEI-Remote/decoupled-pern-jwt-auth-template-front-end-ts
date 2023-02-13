import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import { FormProps } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'
import * as authService from '../../services/authService'

const ChangePasswordForm = ({ 
  updateMessage, 
  handleSignupOrLogin,
 }: FormProps): JSX.Element => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    updateMessage('')
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = (): boolean => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Current Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="newPassword" className={styles.label}>
          New Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPassword"
          value={newPw}
          name="newPw"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="newPasswordConf" className={styles.label}>
          Confirm New Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPasswordConf"
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Change Password
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default ChangePasswordForm
