import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validação básica
    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos')
      setLoading(false)
      return
    }

    // Simulação de login (substituir por chamada de API real)
    try {
      // Aqui você faria a chamada à API
      // const response = await fetch('/api/login', { ... })
      
      // Por enquanto, apenas simula um login bem-sucedido
      setTimeout(() => {
        // Salvar token ou informações do usuário (exemplo)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('userEmail', formData.email)
        
        // Redirecionar para a aplicação principal
        navigate('/app')
      }, 1000)
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.')
      setLoading(false)
    }
  }

  return (

      <div className="sign__container">
        <div className="sign__form-wrapper">
          <div className="sign__form sign__form--bg">
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="sign__group">
                <label htmlFor="password" className="sign__label">
                  Password <b>*</b>
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="sign__input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="sign__group">
                <div className="sign__checkbox">
                  <input
                    id="remember"
                    type="checkbox"
                    name="remember"
                  />
                  <label htmlFor="remember" className="sign__label sign__label--pl">
                    Lembrar-me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="sign__btn sign__btn--modal"
                disabled={loading}
              >
                <span>{loading ? 'A entrar...' : 'Entrar'}</span>
              </button>

              <p className="sign__text">
                Não tens conta? <Link to="/register">Regista-te aqui</Link>
              </p>

              <p className="sign__text">
                <Link to="/forgot-password">Esqueceu-se da password?</Link>
              </p>
            </form>
          </div>
        </div>
        
        <div className="sign__image-wrapper">
          <img 
            src="/stream/img/bg/auth-bg.jpg" 
            alt="Login"
            className="sign__image"
            onError={(e) => {
              // Fallback se a imagem não existir
              e.target.src = '/stream/img/bg/bg-1.png';
            }}
          />
        </div>
      </div>
  )
}

export default Login


