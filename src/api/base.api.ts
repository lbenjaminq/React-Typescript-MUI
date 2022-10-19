import axios from "axios"

const BASE_URL = "https://newsapi.org/v2/"

export const instance = axios.create({
  baseURL:BASE_URL
})