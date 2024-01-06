
const columns = ['Client ID', 'Client', 'Asset ID', 'Asset Name', 'Asset Type'];

const AssetDataTableHeader = () => {
  return (
    <div className="grid grid-cols-6 p-4">
      {columns.map((column, index) => (
        <div
          className={` bg-neutral-300 p-4 text-sm font-semibold  ${
            index === 4 && 'col-span-2 '
          } `}
          key={column}
        >
          {column}
        </div>
      ))}
    </div>
  );
};

export default AssetDataTableHeader;
