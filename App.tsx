import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Routes from './src/Routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes />
  </QueryClientProvider>
);

export default App;
