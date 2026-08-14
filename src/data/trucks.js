// Sample fleet data. No backend, no database — this file IS the data source.
// To add a truck: append an object below. To add a new field to every truck's
// detail page, add a key here and a matching row in src/pages/TruckDetail.jsx.

export const trucks = [
  {
    id: 'T-1042',
    name: 'Peterbilt 579',
    status: 'active',
    driver: 'J. Alvarez',
    location: 'Denver, CO',
    mileage: 182430,
    fuelLevel: 72,
    vin: '1XPWD40X1ED215307',
    lastService: '2026-06-02',
    nextServiceDue: '2026-09-02',
  },
  {
    id: 'T-1077',
    name: 'Kenworth T680',
    status: 'maintenance',
    driver: 'M. Chen',
    location: 'Fort Worth, TX',
    mileage: 94211,
    fuelLevel: 18,
    vin: '1XKWD49X8LJ158204',
    lastService: '2026-08-10',
    nextServiceDue: '2026-08-17',
  },
  {
    id: 'T-1103',
    name: 'Freightliner Cascadia',
    status: 'active',
    driver: 'R. Okafor',
    location: 'Portland, OR',
    mileage: 61802,
    fuelLevel: 88,
    vin: '3AKJHHDR5LSLA9021',
    lastService: '2026-05-14',
    nextServiceDue: '2026-11-14',
  },
  {
    id: 'T-1156',
    name: 'Volvo VNL 860',
    status: 'idle',
    driver: 'Unassigned',
    location: 'Kansas City, MO',
    mileage: 143590,
    fuelLevel: 41,
    vin: '4V4NC9EJXLN273815',
    lastService: '2026-04-28',
    nextServiceDue: '2026-10-28',
  },
  {
    id: 'T-1210',
    name: 'Peterbilt 389',
    status: 'active',
    driver: 'S. Patel',
    location: 'Phoenix, AZ',
    mileage: 27114,
    fuelLevel: 95,
    vin: '1XPFD09X2NN487602',
    lastService: '2026-07-01',
    nextServiceDue: '2027-01-01',
  },
  {
    id: 'T-1288',
    name: 'Kenworth W900',
    status: 'maintenance',
    driver: 'D. Wallace',
    location: 'Laredo, TX',
    mileage: 211045,
    fuelLevel: 6,
    vin: '1XKWP40X6MJ349117',
    lastService: '2026-08-13',
    nextServiceDue: '2026-08-15',
  },
]

export function getTruckById(id) {
  return trucks.find((t) => t.id === id)
}
