import axios from 'axios';
import { BASE_URL } from './baseUrl'

export const signUp = async (payload) => {
    const response = await axios.post(`${BASE_URL}/auth/user`, payload);
    return response;
}

export const signIn = async (payload) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, payload)
    return response
}


export const getAllFaqs = async () => {
    const response = await axios.get(`${BASE_URL}/faqs`)
    return response.data
}