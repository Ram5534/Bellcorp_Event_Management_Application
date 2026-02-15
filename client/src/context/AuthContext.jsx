import { createContext, useState } from "react"
import { apiFetch } from "../utils/api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    return storedUser ? JSON.parse(storedUser) : null
  })

  const register = async (formData) => {
    const res = await apiFetch("/user/add-user", {
      method: "POST",
      body: JSON.stringify(formData)
    })

    localStorage.setItem("token", res.token)
    localStorage.setItem("user", JSON.stringify({ userId: res.userId }))
    setUser({ userId: res.userId })
  }

  const login = async (formData) => {
    const res = await apiFetch("/user/login", {
      method: "POST",
      body: JSON.stringify(formData)
    })

    localStorage.setItem("token", res.token)
    localStorage.setItem("user", JSON.stringify({ userId: res.userId }))
    setUser({ userId: res.userId })
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
