import { instance } from "./base.api";

const API_KEY = "7167e81d831c4995b1bec0d6e09ba836"
const endpoint = "character";
const apple = "everything?q=apple&from=2022-10-18&to=2022-10-18&sortBy=popularity&apiKey=";

export const characters = {
  getAll:function(){
    return instance.get(`${apple}${API_KEY}`)
  },
  getById:function({id}:{id:number}){
    return instance.get(`${endpoint}/${id}`)
  }
}

