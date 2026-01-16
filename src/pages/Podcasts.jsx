import { useEffect } from 'react'
import './Podcasts.css'

const Podcasts = () => {
  useEffect(() => {
    document.title = 'Podcasts | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Podcasts</h1>
          <p>Página de podcasts será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Podcasts





