// Status is always shown as icon + label, never color alone (accessibility rule).
const STATUS_META = {
  active: { label: 'Active', icon: '●', className: 'status-badge--good' },
  maintenance: { label: 'Maintenance', icon: '▲', className: 'status-badge--warning' },
  idle: { label: 'Idle', icon: '■', className: 'status-badge--muted' },
}

export default function StatusBadge({ status }) {
  const meta = STATUS_META[status] ?? { label: status, icon: '?', className: 'status-badge--muted' }
  return (
    <span className={`status-badge ${meta.className}`}>
      <span aria-hidden="true">{meta.icon}</span>
      {meta.label}
    </span>
  )
}
