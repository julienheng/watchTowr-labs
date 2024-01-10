// COMPONENTS
import DashboardTable from '@/features/DashboardTable/DashboardTable';
import DashboardTitle from '../features/DashboardTitle';
import DashboardAssetSummary from '@/features/DashboardSummary/DashboardSummary';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main className="space-y-10  py-20">
      <DashboardTitle />
      <DashboardAssetSummary />
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
