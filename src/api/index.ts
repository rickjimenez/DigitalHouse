import axios from 'axios';
import {GetProductsResponse} from '../types/api';
const baseUrl = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

const api = {
  getProducts: async (): Promise<GetProductsResponse[]> => {
    const {data} = await axios({
      method: 'get',
      url: `${baseUrl}/products`,
    });
    return data;
  },
};

export default api;
