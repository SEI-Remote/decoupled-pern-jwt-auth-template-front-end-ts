import styles from './Landing.module.css'
import { User } from '../../interfaces/user.model'

interface LandingProps {
  user: User
}

const Landing = ({ user }: LandingProps) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
