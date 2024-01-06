import { useFetchData } from '@/hooks/useFetchData';
import { HuntType } from '@/types/HuntType';

interface AssetDataTableBodyProps {}

const AssetDataTableBody: React.FC<AssetDataTableBodyProps> = () => {
  const { data } = useFetchData();

  return (
    <>
      {data?.map(({ id, name, assets }: HuntType) => (
        <div key={id} className="px-4">
          {assets?.map(({ assetName, assetId, assetType }, index) => (
            <div className="grid grid-cols-6 py-1 text-sm" key={index}>
              <div className="px-4">{id}</div>
              <div className="px-4">{name}</div>
              <div className="px-4">{assetId}</div>
              <div className="px-4">{assetName}</div>
              <div className="col-span-2 px-4 ">
                {assetType.ip ? assetType.ip : assetType.subdomain}
              </div>
            </div>
          ))}{' '}
        </div>
      ))}
    </>
  );
};

export default AssetDataTableBody;
