// COMPONENTS
import SearchBar from '@/components/SearchBar/SearchBar';
import DashboardTable from '@/components/DashboardTable/AssetDataTable';
import DashboardTitle from '../features/Dashboard/DashboardTitle';
import CasesHuntedCard from '@/components/DashboardCards/CasesHuntedCard';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main>
      <DashboardTitle />
      <div className="flex">
        <CasesHuntedCard />
        <SearchBar />
      </div>
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
