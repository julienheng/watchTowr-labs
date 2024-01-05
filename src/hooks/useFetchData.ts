import { useQuery } from 'react-query';

export const useFetchData = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/hunts');
      const apiData = await response.json();
      return apiData;
    },
  });

  console.log(data);

  return { data, isLoading, error };
};
