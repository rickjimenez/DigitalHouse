import 'react-native';
import {renderHook, waitFor} from '@testing-library/react-native';
import React from 'react';
import mockAxios from 'jest-mock-axios';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useGetProducts} from '../../../src/queries';

const data = {
  data: [
    {
      id: '1',
      product: 'product',
      is_redemption: false,
      createdAt: '2022-12-09T06:34:25.607Z',
      image: 'image',
      points: 100,
    },
    {
      id: '1',
      product: 'product',
      is_redemption: true,
      createdAt: '2022-12-09T06:34:25.607Z',
      image: 'image',
      points: 30,
    },
  ],
};

const queryClient = new QueryClient();
const wrapper = ({children}: {children: JSX.Element}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('test queries', () => {
  test('test get products query', async () => {
    const {result} = renderHook(() => useGetProducts(), {wrapper});
    mockAxios.mockResponse(data);
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toBe(data.data);
    });
  });
});
