import * as api from './api'
import { setToken, setUser, clearAuth } from '../utils/tokenStorage'

/**
 * Service específico para autenticação
 */

/**
 * Faz login
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{user: object, token: string}>}
 */
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    })

    // Salva o token e dados do usuário
    if (response.access_token) {
      setToken(response.access_token)
      if (response.user) {
        setUser(response.user)
      }
    }

    return {
      user: response.user,
      token: response.access_token,
      tokenType: response.token_type,
      expiresIn: response.expires_in,
    }
  } catch (error) {
    throw error
  }
}

/**
 * Faz registro
 * @param {object} userData - { name, email, password, password_confirmation, user_type }
 * @returns {Promise<{user: object, token: string}>}
 */
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData)

    // Salva o token e dados do usuário
    if (response.access_token) {
      setToken(response.access_token)
      if (response.user) {
        setUser(response.user)
      }
    }

    return {
      user: response.user,
      token: response.access_token,
      tokenType: response.token_type,
      expiresIn: response.expires_in,
    }
  } catch (error) {
    throw error
  }
}

/**
 * Faz logout
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    await api.post('/auth/logout')
  } catch (error) {
    // Mesmo se falhar, limpa os dados localmente
    console.error('Erro ao fazer logout na API:', error)
  } finally {
    // Sempre limpa os dados locais
    clearAuth()
  }
}

/**
 * Renova o token
 * @returns {Promise<{token: string}>}
 */
export const refreshToken = async () => {
  try {
    const response = await api.post('/auth/refresh')
    
    if (response.access_token) {
      setToken(response.access_token)
    }

    return {
      token: response.access_token,
      tokenType: response.token_type,
      expiresIn: response.expires_in,
    }
  } catch (error) {
    // Se falhar ao renovar, limpa a autenticação
    clearAuth()
    throw error
  }
}

/**
 * Obtém os dados do usuário autenticado
 * @returns {Promise<object>}
 */
export const getCurrentUser = async () => {
  try {
    const user = await api.get('/user')
    
    // Atualiza os dados do usuário no localStorage
    if (user) {
      setUser(user)
    }

    return user
  } catch (error) {
    // Se falhar, pode ser que o token seja inválido
    if (error.status === 401) {
      clearAuth()
    }
    throw error
  }
}

/**
 * Atualiza o perfil do usuário
 * @param {object} userData - Dados para atualizar
 * @returns {Promise<object>}
 */
export const updateProfile = async (userData) => {
  try {
    const response = await api.put('/user', userData)
    
    // Atualiza os dados do usuário no localStorage
    if (response.user) {
      setUser(response.user)
    }

    return response
  } catch (error) {
    throw error
  }
}

/**
 * Solicita recuperação de senha (envia email com token)
 * @param {string} email - Email do usuário
 * @returns {Promise<{message: string}>}
 */
export const forgotPassword = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', {
      email,
    })

    return response
  } catch (error) {
    throw error
  }
}

/**
 * Redefine a senha usando o token
 * @param {string} token - Token de recuperação
 * @param {string} email - Email do usuário
 * @param {string} password - Nova senha
 * @param {string} password_confirmation - Confirmação da nova senha
 * @returns {Promise<{message: string}>}
 */
export const resetPassword = async (token, email, password, password_confirmation) => {
  try {
    const response = await api.post('/auth/reset-password', {
      token,
      email,
      password,
      password_confirmation,
    })

    return response
  } catch (error) {
    throw error
  }
}

