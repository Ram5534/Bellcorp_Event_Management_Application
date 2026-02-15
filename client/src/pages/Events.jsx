import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api"
import EventCard from "../components/EventCard"

const Events = () => {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  const user = JSON.parse(localStorage.getItem("user"))
  const userId = user?.userId

  const fetchEvents = () => {
    apiFetch(`/event?search=${search}`)
      .then(res => setEvents(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchEvents()
  }, [search])

  return (
    <div className="events-page">
      <h2>Discover Events</h2>

      <input
        placeholder="Search events"
        onChange={e => setSearch(e.target.value)}
      />

      {events.length === 0 && <p>No events found</p>}

      {events.map(event => (
        <EventCard
          key={event._id}
          event={event}
          userId={userId}
          refreshEvents={fetchEvents}
        />
      ))}
    </div>
  )
}

export default Events
