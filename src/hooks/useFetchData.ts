import { useQuery } from 'react-query';
import { HuntType } from '@/types/HuntType';

export const useFetchData = () => {
  const { data, isLoading, error } = useQuery<HuntType[]>(
    'tenants',
    async () => {
      const response = await fetch('http://localhost:3000/tenants');
      const apiData = await response.json();
      return apiData;
    },
  );

  console.log(data);

  return { data, isLoading, error };
};
