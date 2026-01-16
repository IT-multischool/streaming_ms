import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import './Stream.css'

const Stream = () => {
  const { id } = useParams()

  useEffect(() => {
    document.title = `Stream ${id} | Multischool Angola`
  }, [id])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Página de Stream - ID: {id}</h1>
          <p>Esta página será implementada com o player de vídeo completo.</p>
        </div>
      </div>
    </div>
  )
}

export default Stream





