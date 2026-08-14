import { Link, useParams } from 'react-router-dom'
import { getTruckById } from '../data/trucks'
import StatusBadge from '../components/StatusBadge'
import StatTile from '../components/StatTile'
import InfoRow from '../components/InfoRow'
import TruckName from '../components/TruckName'

export default function TruckDetail() {
  const { id } = useParams()
  const truck = getTruckById(id)

  if (!truck) {
    return (
      <div className="page">
        <p>No truck found with ID "{id}".</p>
        <Link to="/">&larr; Back to fleet</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">&larr; Back to fleet</Link>

      <div className="page__title-row">
        <h1 className="page__title">
          <TruckName brand={truck.brand} model={truck.model} />
        </h1>
        <StatusBadge status={truck.status} />
      </div>
      <p className="page__subtitle">{truck.id}</p>

      <div className="stat-tile-row">
        <StatTile label="Mileage" value={truck.mileage.toLocaleString()} unit="mi" />
        <StatTile label="Fuel level" value={truck.fuelLevel} unit="%" />
      </div>

      {/* To add another info line: add one more <InfoRow /> here. */}
      <div className="info-card">
        <InfoRow label="Driver" value={truck.driver} />
        <InfoRow label="Location" value={truck.location} />
        <InfoRow label="VIN" value={truck.vin} />
        <InfoRow label="Last service" value={truck.lastService} />
        <InfoRow label="Next service due" value={truck.nextServiceDue} />
      </div>
    </div>
  )
}
