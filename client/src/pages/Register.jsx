import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" })
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    await register(form)
    navigate("/login")
  }

  return (
    <div className="register-page">
    <form onSubmit={submit}>
      <input placeholder="username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />
      <button>Register</button>
    </form>
    </div>
  )
}

export default Register
