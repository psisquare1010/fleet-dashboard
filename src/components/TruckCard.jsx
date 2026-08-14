import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import TruckName from './TruckName'

export default function TruckCard({ truck }) {
  return (
    <Link to={`/truck/${truck.id}`} className="truck-card">
      <div className="truck-card__header">
        <span className="truck-card__id">{truck.id}</span>
        <StatusBadge status={truck.status} />
      </div>
      <div className="truck-card__name">
        <TruckName brand={truck.brand} model={truck.model} />
      </div>
      <div className="truck-card__meta">
        <span>{truck.driver}</span>
        <span aria-hidden="true">·</span>
        <span>{truck.location}</span>
      </div>
    </Link>
  )
}
