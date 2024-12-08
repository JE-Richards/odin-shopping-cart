import fetchData from '../fetchData';
import { vi, beforeEach, describe, it, expect } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn();
});

describe('Testing the fetchData function', () => {
  describe('Testing successful responses', () => {
    it('only calls fetch once', async () => {
      const result = await fetchData();
      expect(fetch).toBeCalledTimes(1);
    });

    it('successfully returns data upon a successful fetch', async () => {
      const mockData = { value: 'some mock value' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({ data: mockData, error: null });
    });

    it('handles the api returning empty data', async () => {
      let mockData;
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({ data: mockData, error: null });
    });
  });

  describe('Testing number of products returned', () => {
    it('fetches 20 products by default', async () => {
      const result = await fetchData();
      expect(fetch).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products?limit=20'
      );
    });

    it('fetches the target number of products based on input', async () => {
      const result = await fetchData(5);
      expect(fetch).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products?limit=5'
      );
    });

    it('fetches 20 products if the input is greater than 20', async () => {
      const result = await fetchData(30);
      expect(fetch).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products?limit=20'
      );
    });

    it('returns 1 product if the input number is less than 0', async () => {
      const result = await fetchData(-10);
      expect(fetch).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products?limit=1'
      );
    });

    it('returns 1 product if the input number is 0', async () => {
      const result = await fetchData(0);
      expect(fetch).toHaveBeenCalledWith(
        'https://fakestoreapi.com/products?limit=1'
      );
    });
  });

  describe('Testing error handling', () => {
    it('returns the 404 error message when resource is not found', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({
        data: null,
        error: 'Resource not found (404).',
      });
    });

    it('returns the 500 error message when experiencing a server error', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({
        data: null,
        error: 'Server error (500). Please try again later.',
      });
    });

    it('returns the 503 error when service is unavailable', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 503,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({
        data: null,
        error: 'Service unavailable (503). Please try again later.',
      });
    });

    it('returns a default error for other status values', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 0,
      });

      const result = await fetchData();
      expect(result).toStrictEqual({
        data: null,
        error: 'Unexpected error when fetching product data (status 0)',
      });
    });

    it('returns an error message when fetch throws an error', async () => {
      fetch.mockImplementationOnce(() => {
        throw new Error('Network error');
      });

      const result = await fetchData();
      expect(result).toStrictEqual({
        data: null,
        error: 'Unexpected error: Network error',
      });
    });
  });
});
