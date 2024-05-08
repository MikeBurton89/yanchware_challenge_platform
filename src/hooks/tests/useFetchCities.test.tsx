import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';
import useFetchCities from '../useFetchCities';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useFetchCities', () => {
  it('should return an array of cities with details', async () => {
    const { result, waitFor } = renderHook(() => useFetchCities(), { wrapper });
    await waitFor(
      () => {
        return !!result.current.data;
      },
      { timeout: 15000 }
    );
    expect(result.current.data).toBeDefined();
  });
});
