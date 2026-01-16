import { useEffect } from 'react'
import './Profile.css'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Meu Perfil</h1>
          <p>Página de perfil será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile





