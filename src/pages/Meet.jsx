import { useEffect } from 'react'
import './Meet.css'

const Meet = () => {
  useEffect(() => {
    document.title = 'Criar Sala | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Criar Sala de Reunião</h1>
          <p>Página de criação de sala será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Meet





