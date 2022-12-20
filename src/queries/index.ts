import {useQuery} from '@tanstack/react-query';
import api from '../api';

export const useGetProducts = () =>
  useQuery({queryKey: ['products'], queryFn: api.getProducts});
