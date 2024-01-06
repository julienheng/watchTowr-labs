/* eslint-disable @typescript-eslint/no-explicit-any */
// COMPONENTS
import SearchBar from '@/components/SearchBar/SearchBar';
import DashboardTable from '@/components/DashboardTable/DataTable';
import DashboardTitle from '../features/Dashboard/DashboardTitle';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {



  
  return (
    <main>
      <DashboardTitle />
      <SearchBar
     
      />
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
