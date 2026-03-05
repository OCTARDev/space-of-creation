import { api } from './axios'

/* ========== TYPES ========== */

export interface category {
  id: number
  name: string
}

export interface book {
  name: number
  email: string
  phone: string
  category_ids:Array<number>
}

/* ========== GET APIs ========== */

export const getcategorys = async (): Promise<category[]> => {
  const res = await api.get('/categories')
  return res.data.data
}
export const getTargets = async (id:number): Promise<category[]> => {
  const res = await api.get(`/categories/targets/${id}`)
  return res.data.data
}

/* ========== POST API ========== */

export const bookLife = async (data: book) => {
  const res = await api.post('/booking/store', data)
  return res.data.data
}