import axios from 'axios';
import { BASE_URL } from './baseUrl'

export const signUp = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/auth/user`, payload);
    return response;
};

export const signIn = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, payload)
    return response
};


export const getAllFaqs = async () => {
    const response = await axios.get(`${BASE_URL}/api/faqs`)
    return response.data
};


export const getAllCards = async() => {
    const response = await axios.get(`${BASE_URL}/api/cards`)
    return response.data
};