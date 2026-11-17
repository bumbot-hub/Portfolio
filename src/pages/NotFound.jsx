import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page side-pad">
      <h1 className="page-title pixel">404</h1>
      <p className="page-lead">This page doesn't exist.</p>
      <Link to="/" className="btn-hard mono page-btn">← Back home</Link>
    </main>
  )
}
