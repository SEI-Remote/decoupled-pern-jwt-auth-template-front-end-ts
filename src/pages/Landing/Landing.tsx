import styles from './Landing.module.css'
import { User } from '../../types/models'

const Landing = ({ user }: {user: User | null}) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
