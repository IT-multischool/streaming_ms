import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (!formData.fullname || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Por favor, preencha todos os campos')
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As passwords não coincidem')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('A password deve ter pelo menos 6 caracteres')
      setLoading(false)
      return
    }

    // Simulação de registro (substituir por chamada de API real)
    try {
      // Aqui você faria a chamada à API
      // const response = await fetch('/api/register', { ... })
      
      // Por enquanto, apenas simula um registro bem-sucedido
      setTimeout(() => {
        // Salvar token ou informações do usuário (exemplo)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('userEmail', formData.email)
        localStorage.setItem('userName', formData.fullname)
        
        // Redirecionar para a aplicação principal
        navigate('/app')
      }, 1000)
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.')
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
              <label htmlFor="fullname" className="sign__label">
                Nome Completo <b>*</b>
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                className="sign__input"
                placeholder="Seu nome completo"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

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
                minLength={6}
              />
            </div>

            <div className="sign__group">
              <label htmlFor="confirmPassword" className="sign__label">
                Confirmar Password <b>*</b>
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                className="sign__input"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="sign__group">
              <div className="sign__checkbox">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  required
                />
                <label htmlFor="terms" className="sign__label sign__label--pl">
                  Aceito os <Link to="/terms">Termos e Condições</Link> e a <Link to="/privacy">Política de Privacidade</Link> <b>*</b>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="sign__btn sign__btn--modal"
              disabled={loading}
            >
              <span>{loading ? 'A criar conta...' : 'Criar Conta'}</span>
            </button>

            <p className="sign__text">
              Já tens conta? <Link to="/login">Entrar aqui</Link>
            </p>
          </form>
        </div>
      </div>
      
      <div className="sign__image-wrapper">
        <img 
          src="/stream/img/bg/auth-bg.jpg" 
          alt="Registro"
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

export default Register



