import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '../api/properties';

export const useProperties = () => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
    staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh
    gcTime: 10 * 60 * 1000, // 10 minutes - cache garbage collection time
  });
};
