// COMPONENTS
import SearchBar from '@/components/SearchBar/SearchBar';
import DataTable from '@/components/DataTable/DataTable';
import DashboardTitle from './DashboardTitle';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main>
      <DashboardTitle />
      <SearchBar />
      <DataTable />
    </main>
  );
};

export default Dashboard;
