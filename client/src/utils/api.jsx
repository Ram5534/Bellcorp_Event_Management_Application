const BASE_URL = "https://bellcorp-event-management-application-2.onrender.com"

export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token")

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || data.message || "Request failed")
  }

  return data
}
