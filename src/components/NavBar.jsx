import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">Fleet Dashboard</div>
      <nav className="navbar__links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}>
          Fleet
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}>
          About
        </NavLink>
      </nav>
    </header>
  )
}
