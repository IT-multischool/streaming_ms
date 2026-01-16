import { useEffect } from 'react'
import './Chatbot.css'

const Chatbot = () => {
  useEffect(() => {
    document.title = 'Chatbot | Multischool Angola'
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Chatbot</h1>
          <p>Página do chatbot será implementada em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbot





