import { useQuery } from 'react-query';
import { HuntType } from '@/types/HuntType';
import { AssetType } from '@/types/AssetType';
import { TenantType } from '@/types/TenantType';
import { useThreatStore } from '@/stores/threatStateStore';

export const useFetchData = () => {
  const { data, isLoading, error } = useQuery<HuntType[]>(
    'tenants',
    async () => {
      const response = await fetch('http://localhost:3000/tenants');
      const apiData = await response.json();
      return apiData;
    },
  );

  // console.log(data);

  return { data, isLoading, error };
};

export const useAssetData = () => {
  const setThreatValue = useThreatStore((state) => state.setThreatValue);

  const { data, isLoading, error } = useQuery<AssetType[]>(
    'assets',
    async () => {
      const response = await fetch('http://localhost:3000/assets');
      const apiData = await response.json();
      return apiData;
    },
  );

  // Find the number of affected assets
  const affectedNum = data?.filter((item) => item.status === 'vulnerable')?.length;

  setThreatValue(affectedNum || 0);


  return { data, isLoading, error };
};

export const useTenantData = () => {
  const { data, isLoading, error } = useQuery<TenantType[]>(
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
