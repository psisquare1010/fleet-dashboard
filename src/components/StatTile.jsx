// A single number with a label. Used for both fleet-wide stats and per-truck stats.
export default function StatTile({ label, value, unit }) {
  return (
    <div className="stat-tile">
      <div className="stat-tile__label">{label}</div>
      <div className="stat-tile__value">
        {value}
        {unit ? <span className="stat-tile__unit">{unit}</span> : null}
      </div>
    </div>
  )
}
