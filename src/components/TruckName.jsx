// Renders "<Brand> <Model>" with each half colored separately.
// Colors live in src/App.css (.truck-name__brand / .truck-name__model).
export default function TruckName({ brand, model }) {
  return (
    <>
      <span className="truck-name__brand">{brand}</span>{' '}
      <span className="truck-name__model">{model}</span>
    </>
  )
}
