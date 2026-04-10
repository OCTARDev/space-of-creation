// src/lib/axios.ts
import axios from 'axios'

let currentLocale = 'en'

export const setApiLocale = (locale: string) => {
  currentLocale = locale
}

export const api = axios.create({
  baseURL: 'https://life-env-back.adgrouptech.com/api',
})

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.set('Accept', 'application/json')
    config.headers.set('X-App-Locale', currentLocale)
  }
  return config
})