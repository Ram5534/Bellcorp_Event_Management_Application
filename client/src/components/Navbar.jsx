import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="nav">
      <h3>EventApp</h3>

      <div className="links">
        <Link to="/events" className="page-links">Events</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="page-links">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="page-links">Login</Link>
            <Link to="/register" className="page-links">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

