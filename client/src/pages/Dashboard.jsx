import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api"

const Dashboard = () => {
  const [upcoming, setUpcoming] = useState([])
  const [past, setPast] = useState([])

  useEffect(() => {
    apiFetch("/user/my-events").then(res => {
      const today = new Date()
      setUpcoming(res.filter(e => new Date(e.date) > today))
      setPast(res.filter(e => new Date(e.date) <= today))
    })
  }, [])

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

      <h3>Upcoming Events</h3>
      <h4>Event Name</h4>
      {upcoming.map(e => <p key={e._id}> {e.name}</p>)}

      <h3>Past Events</h3>
      <h4>Event Name :-</h4>
      {past.map(e => <p key={e._id}>{e.name}</p>)}
    </div>
  )
}

export default Dashboard
