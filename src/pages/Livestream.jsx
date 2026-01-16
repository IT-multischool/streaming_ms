import { useEffect } from 'react'
import './Livestream.css'

const Livestream = () => {
  useEffect(() => {
    document.title = 'Live Streaming | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Live Streaming</h1>
          <p>Página de live streaming será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Livestream





