import axios from 'axios';
import { BASE_URL } from './baseUrl'

export const signUp = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user`, payload);
    return response;
}

export const signIn = async (payload) => {
    const response = await axios.post(`${BASE_URL}/login`, payload)
    return response
}