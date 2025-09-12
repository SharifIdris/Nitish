import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

export function useSanityData<T>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Check if Sanity is properly configured
        if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
          throw new Error('Sanity project ID not configured. Please set VITE_SANITY_PROJECT_ID in your environment variables.');
        }
        
        const result = await client.fetch(query);
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Sanity fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}