const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_q73VBaRHKVF6SZN99amO4B1AerhylDDwvZesq98yVMEWg4sIjUpNZSPWmATT4yNu';
axios.defaults.headers.common['x-api-key'] = API_KEY;

import axios from 'axios';

export async function fetchBreeds() {
  const response = await axios.get(`${BASE_URL}/breeds`);
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(
    `${BASE_URL}/images/search?breed_ids=${breedId}`
  );
  return response.data;
}
