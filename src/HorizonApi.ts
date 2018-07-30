import axios from 'axios';

export const createHorizonInstance = (
  base: string = 'https://horizon.stellar.org'
) => axios.create({ baseURL: base });
