import { instance } from "./base.api";

const API_KEY = "7167e81d831c4995b1bec0d6e09ba836"
const endpoint = "everything?q=bitcoin&apiKey=";

export const characters = {
  getAll:function(){
    return instance.get(`${endpoint}${API_KEY}`)
  },
}

