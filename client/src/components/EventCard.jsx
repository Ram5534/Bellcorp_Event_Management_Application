import { apiFetch } from "../utils/api"

const EventCard = ({ event, userId, refreshEvents }) => {

  const isRegistered = event.registrations.includes(userId)
  const seatsLeft = event.capacity - event.registrations.length

  const registerEvent = async () => {
    await apiFetch(`/event/${event._id}/register`, { method: "POST" })
    alert("Registered successfully")
    refreshEvents()
  }

  const cancelEvent = async () => {
    await apiFetch(`/event/${event._id}/cancel`, { method: "POST" })
    alert("Registration cancelled")
    refreshEvents()
  }

  return (
    <div className="card">
      <h3>{event.name}</h3>

      <p><b>Organizer:</b> {event.organiser}</p>
      <p><b>Location:</b> {event.location}</p>
      <p><b>Date:</b> {new Date(event.date).toLocaleString()}</p>
      <p><b>Category:</b> {event.category}</p>
      <p><b>Description:</b> {event.description}</p>
      <p><b>Seats Left:</b> {seatsLeft}</p>

      {isRegistered ? (
        <button onClick={cancelEvent} className="cancel">
          Cancel Registration
        </button>
      ) : (
        <button
          onClick={registerEvent}
          disabled={seatsLeft === 0}
          className="register"
        >
          {seatsLeft === 0 ? "Event Full" : "Register"}
        </button>
      )}
    </div>
  )
}

export default EventCard

