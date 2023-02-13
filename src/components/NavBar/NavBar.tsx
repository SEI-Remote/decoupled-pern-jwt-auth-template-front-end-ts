import { Link } from 'react-router-dom'
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = ({ user, handleLogout }: NavBarProps): JSX.Element => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
