import { useEffect } from 'react'
import './Cursos.css'

const Cursos = () => {
  useEffect(() => {
    document.title = 'Cursos | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Cursos</h1>
          <p>Página de cursos será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Cursos





