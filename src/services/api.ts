// src/services/api.ts

export interface ApiRestaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/efood'

export const getRestaurants = async (): Promise<ApiRestaurant[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurantes`)

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Falha ao carregar restaurantes:', error)
    throw error
  }
}

export const getRestaurantById = async (id: string): Promise<ApiRestaurant> => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurantes/${id}`)

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Falha ao carregar restaurante com ID ${id}:`, error)
    throw error
  }
}

export const getRestaurantDetails = async (id: string): Promise<ApiRestaurant> => {
  const response = await fetch(`${API_BASE_URL}/restaurantes/${id}`)
  if (!response.ok) throw new Error('Restaurante não encontrado')
  return await response.json()
}
