import { trucks } from '../data/trucks'
import StatTile from '../components/StatTile'
import TruckCard from '../components/TruckCard'

export default function FleetOverview() {
  const activeCount = trucks.filter((t) => t.status === 'active').length
  const avgFuel = Math.round(trucks.reduce((sum, t) => sum + t.fuelLevel, 0) / trucks.length)

  return (
    <div className="page">
      <h1 className="page__title">Fleet Overview</h1>

      <div className="stat-tile-row">
        <StatTile label="Total trucks" value={trucks.length} />
        <StatTile label="Active" value={activeCount} />
        <StatTile label="Avg fuel level" value={avgFuel} unit="%" />
      </div>

      <div className="truck-grid">
        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </div>
    </div>
  )
}
