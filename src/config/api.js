/**
 * Configuração da API
 * 
 * Aqui está definida a URL base da API. 
 * Para mudar o ambiente, basta alterar o valor de API_BASE_URL.
 */

// URL base da API Laravel
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'

// Configurações adicionais
export const API_CONFIG = {
  timeout: 30000, // 30 segundos
  retryAttempts: 3,
  retryDelay: 1000, // 1 segundo
}

