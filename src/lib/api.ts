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
export interface contact {
  name: number
  email: string
  phone: string
  organization:string
  interested:string
  description:string
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

export const getVr = async (
    page: number,
  search = ""
) => {
  const res = await api.get(`/vr-categories?search=${search}&page=${page}`)  
  return res.data.data
}

export const getPlanetarium = async (
  page: number,
  search = ""
) => {
  const res = await api.get(
    `/planetarium-categories?search=${search}&page=${page}`
  );

  
  return res.data.data;
};

/* ========== POST API ========== */

export const bookLife = async (data: book) => {
  const res = await api.post('/booking/store', data)
  return res.data.data
}
export const contactus = async (data: contact) => {
  const res = await api.post('/contact-us/send', data)
  return res.data.data
}