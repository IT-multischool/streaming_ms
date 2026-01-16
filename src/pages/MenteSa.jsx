import { useEffect } from 'react'
import './MenteSa.css'

const MenteSa = () => {
  useEffect(() => {
    document.title = 'Mente Sã | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Mente Sã</h1>
          <p>Página Mente Sã será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default MenteSa





