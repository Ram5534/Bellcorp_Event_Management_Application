import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="home-page">
      <h1>Welcome to EventApp 🎉</h1>

      <p>
        Discover events, register easily, and manage your event journey
        all in one place.
      </p>

      <div>
        {!user ? (
          <>
            <Link to="/register">
              <button>Get Started</button>
            </Link>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/events">
              <button >Explore Events</button>
            </Link>

            <Link to="/dashboard">
              <button >My Dashboard</button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
