import { useFilteredItemsStore } from '@/stores/filterStore';
import { HuntType } from '@/types/HuntType';

const Table = () => {
  const data = useFilteredItemsStore((state) => state.filteredItems);

  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Industry</th>
        </tr>
        {data?.map((item: HuntType) => (
          <tr key={item.name} className="text-center">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.industry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
