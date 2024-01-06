import { useQuery } from 'react-query';
// import { HuntType } from '@/types/HuntType';
import { AssetType } from '@/types/AssetType';
import { TenantType } from '@/types/TenantType';

// export const useFetchData = () => {
//   const { data, isLoading, error } = useQuery<HuntType[]>('hunts', async () => {
//     const response = await fetch('http://localhost:3000/hunts');
//     const apiData = await response.json();
//     return apiData;
//   });

//   console.log(data);

//   return { data, isLoading, error };
// };

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

export const useFetchAssets = () => {
  const { data, isLoading, error } = useQuery<AssetType[]>(
    'assets',
    async () => {
      const response = await fetch('/data/assets.json');
      const assetData = await response.json();
      return assetData;
    },
  );

  console.log(data);

  return { data, isLoading, error };
};
