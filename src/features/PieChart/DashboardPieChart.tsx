import CardLayout from '@/components/CardLayout';
import PieChartContent from './PieChartContent';

interface DashboardPieChartProps {}

const DashboardPieChart: React.FC<DashboardPieChartProps> = () => {
  return (
    <CardLayout>
      <div className="w-[450px] p-2">
        <h1 className="text-center font-oswald text-2xl font-semibold uppercase tracking-wide">
          Security Progress
        </h1>
        <PieChartContent />
      </div>
    </CardLayout>
  );
};

export default DashboardPieChart;
