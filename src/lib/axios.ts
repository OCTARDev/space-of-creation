import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://life-env-back.adgrouptech.com/api',
})