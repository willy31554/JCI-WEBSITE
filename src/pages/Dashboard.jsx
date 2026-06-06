export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="dashboard-profile">
          <div className="profile-avatar">MJ</div>
          <div>
            <strong>Mary Wanjiru</strong>
            <span>Student</span>
          </div>
        </div>
        <ul>
          <li className="active">Dashboard</li>
          <li>My Courses</li>
          <li>Results</li>
          <li>Payments</li>
          <li>Announcements</li>
          <li>Logout</li>
        </ul>
      </aside>
      <section className="dashboard-main container">
        <div className="dashboard-hero">
          <div>
            <span className="eyebrow">Student Portal</span>
            <h1>Welcome back, Mary.</h1>
            <p>Manage your studies, view announcements, and stay on track with upcoming deadlines.</p>
          </div>
          <div className="dashboard-summary">
            <div>
              <span>Active Courses</span>
              <strong>3</strong>
            </div>
            <div>
              <span>Fees Due</span>
              <strong>Ksh 12,450</strong>
            </div>
            <div>
              <span>Messages</span>
              <strong>2</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="panel-card">
            <h3>Recent Announcements</h3>
            <p>New intake registration opens next week. Please complete all required forms.</p>
          </div>
          <div className="panel-card">
            <h3>Upcoming Events</h3>
            <ul>
              <li>Graduation Prep - June 20</li>
              <li>Orientation - July 4</li>
              <li>Retreat Session - Sept 2</li>
            </ul>
          </div>
          <div className="panel-card panel-calendar">
            <h3>Calendar</h3>
            <div className="calendar-grid">
              <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
              <div>24</div><div>25</div><div>26</div><div className="today">27</div><div>28</div><div>29</div><div>30</div>
            </div>
          </div>
        </div>

        <div className="quick-links">
          <button className="btn btn-secondary">Pay Fees</button>
          <button className="btn btn-secondary">Course Registration</button>
          <button className="btn btn-secondary">Downloads</button>
          <button className="btn btn-primary">Apply for Leave</button>
        </div>
      </section>
    </div>
  )
}
