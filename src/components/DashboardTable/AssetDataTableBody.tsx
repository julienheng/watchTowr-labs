// import { useFetchData } from '@/hooks/useFetchData';
import { useFilteredItemsStore } from '@/stores/filterStore';

const AssetDataTableBody = () => {
  const data = useFilteredItemsStore((state) => state.filteredItems);

  return (
    <>
      {data?.map(({ id, name, industry }) => (
        <div key={id} className="px-4">
          <div className="grid grid-cols-6 py-1 text-sm" key={id}>
            <div className="px-4">{id}</div>
            <div className="px-4">{name}</div>
            <div>{industry}</div>
          </div>
          {/* {assets?.map(({ assetName, assetId, assetType }, index) => (
            <div className="grid grid-cols-6 py-1 text-sm" key={index}>
              <div className="px-4">{id}</div>
              <div className="px-4">{name}</div>
              <div className="px-4">{assetId}</div>
              <div className="px-4">{assetName}</div>
              <div className="col-span-2 px-4 ">
                {assetType.ip ? assetType.ip : assetType.subdomain}
              </div>
            </div>
          ))}{' '} */}
        </div>
      ))}
    </>
  );
};

export default AssetDataTableBody;
