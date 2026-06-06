import { useEffect, useMemo, useState } from 'react'

const sampleEvents = [
  { type: 'success', title: 'New Announcement', message: 'Chaplaincy week schedule posted.' },
  { type: 'info', title: 'Course update', message: 'Business Management intake now open.' },
  { type: 'warning', title: 'Payment reminder', message: 'Tuition fee deadline is 3 days away.' },
  { type: 'success', title: 'Certificate available', message: 'Your verification report is ready.' },
]

const upcomingEvents = [
  { title: 'Graduation Ceremony', message: 'Join us for the 2026 graduation service.', date: 'June 20' },
  { title: 'Orientation Week', message: 'New student orientation begins.', date: 'July 4' },
  { title: 'Open Day', message: 'Invite friends and family to campus.', date: 'Aug 10' },
  { title: 'Retreat Session', message: 'Register for the leadership retreat.', date: 'Sept 2' },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome', message: 'You will receive event notifications here.', time: 'Just now', read: true },
  ])
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('live')

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.read).length,
    [notifications],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const nextEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)]
      setNotifications((current) => [
        {
          id: Date.now(),
          title: nextEvent.title,
          message: nextEvent.message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false,
        },
        ...current,
      ])
    }, 13000)

    return () => clearInterval(interval)
  }, [])

  function markAllRead() {
    setNotifications((items) => items.map((item) => ({ ...item, read: true })))
  }

  return (
    <div className="notification-widget">
      <button className="notification-button" onClick={() => setOpen((s) => !s)} aria-label="Toggle notifications">
        <span className="notification-icon">🔔</span>
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {open && (
        <div className="notification-panel">
          <div className="notification-header">
            <h4>Notifications</h4>
            <button className="text-button" onClick={markAllRead}>Mark all read</button>
          </div>
          <div className="notification-tabs">
            <button className={activeTab === 'live' ? 'tab active' : 'tab'} onClick={() => setActiveTab('live')}>
              Live Events
            </button>
            <button className={activeTab === 'upcoming' ? 'tab active' : 'tab'} onClick={() => setActiveTab('upcoming')}>
              Upcoming Events
            </button>
          </div>
          {activeTab === 'live' ? (
            <ul>
              {notifications.map((item) => (
                <li key={item.id} className={item.read ? 'notification-item read' : 'notification-item'}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.message}</p>
                  </div>
                  <small>{item.time}</small>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {upcomingEvents.map((event) => (
                <li key={event.title} className="notification-item upcoming">
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.message}</p>
                  </div>
                  <small>{event.date}</small>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
