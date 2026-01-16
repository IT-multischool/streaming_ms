import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email) {
      setError('Por favor, insira o seu email')
      setLoading(false)
      return
    }

    // Simulação de recuperação de password (substituir por chamada de API real)
    try {
      // Aqui você faria a chamada à API
      // const response = await fetch('/api/forgot-password', { ... })
      
      setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Erro ao enviar email. Tente novamente.')
      setLoading(false)
    }
  }

  if (success) {
    return (

        <div className="sign__container">
          <div className="sign__form-wrapper">
            <div className="sign__form sign__form--bg">
              <Link to="/" className="sign__logo">
                <img src="/stream/img/logotipo.png" alt="Multischool Angola" />
              </Link>

              <h1 className="sign__title sign__title--center">Email Enviado</h1>

            <div className="sign__success">
              <p>Enviamos um email para <strong>{email}</strong> com instruções para redefinir a sua password.</p>
              <p>Por favor, verifique a sua caixa de entrada.</p>
            </div>

            <Link to="/login" className="sign__btn sign__btn--modal" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
              <span>Voltar ao Login</span>
            </Link>
          </div>
        </div>
        
        <div className="sign__image-wrapper">
          <img 
            src="/stream/img/bg/auth-bg.jpg" 
            alt="Recuperar Password"
            className="sign__image"
            onError={(e) => {
              e.target.src = '/stream/img/bg/bg-1.png';
            }}
          />
        </div>
      </div>
    )
  }

  return (

      <div className="sign__container">
        <div className="sign__form-wrapper">
          <div className="sign__form sign__form--bg">
          
          <p className="sign__text" style={{ textAlign: 'center', marginBottom: '20px' }}>
            Insira o seu email e enviaremos instruções para redefinir a sua password.
          </p>

          {error && (
            <div className="sign__error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="sign__form--comments">
            <div className="sign__group">
              <label htmlFor="email" className="sign__label">
                Email <b>*</b>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="sign__input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="sign__btn sign__btn--modal"
              disabled={loading}
            >
              <span>{loading ? 'A enviar...' : 'Enviar'}</span>
            </button>

            <p className="sign__text">
              <Link to="/login">Voltar ao Login</Link>
            </p>
          </form>
        </div>
      </div>
      
      <div className="sign__image-wrapper">
        <img 
          src="/stream/img/bg/auth-bg.jpg" 
          alt="Recuperar Password"
          className="sign__image"
          onError={(e) => {
            e.target.src = '/stream/img/bg/bg-1.png';
          }}
        />
      </div>
    </div>
  )
}

export default ForgotPassword



