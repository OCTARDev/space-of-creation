import { api } from './axios'

/* ========== TYPES ========== */

export interface category {
  id: number
  name: string
}

export interface CreateOrderDto {
  categoryId: number
  title: string
  media: string
}

/* ========== GET APIs ========== */

export const getcategorys = async (): Promise<category[]> => {
  const res = await api.get('/categories')
  return res.data.data
}

/* ========== POST API ========== */

export const createOrder = async (data: CreateOrderDto) => {
  const res = await api.post('/orders', data)
  return res.data
}