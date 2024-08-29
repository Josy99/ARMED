import axios from "axios";

export const api =  axios.create({
  baseURL:  ""
})

export const useApi = () =>({
  validateToken:  async (token: string) => {

  },
  
  login:  async (email: string, password: string) => {
  },

  logout:  async () => {

  },
})