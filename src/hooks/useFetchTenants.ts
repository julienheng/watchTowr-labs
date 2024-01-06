import { useQuery } from 'react-query';
import { TenantType } from '@/types/TenantType';

export const useFetchTenants = () => {
  const { data, isLoading, error } = useQuery<TenantType[]>(
    'tenants',
    async () => {
      const response = await fetch('http://localhost:3000/tenants');
      const tenantData = await response.json();
      return tenantData;
    },
  );

  console.log(data);

  return { data, isLoading, error };
};
