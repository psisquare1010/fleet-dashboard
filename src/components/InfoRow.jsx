// One label/value line. This is the building block for "add another info
// line" requests — render another <InfoRow /> wherever the list is built.
export default function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span className="info-row__label">{label}</span>
      <span className="info-row__value">{value}</span>
    </div>
  )
}
