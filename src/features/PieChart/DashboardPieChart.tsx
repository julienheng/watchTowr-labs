import {
  // Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface DashboardPieChartProps {}

const DashboardPieChart: React.FC<DashboardPieChartProps> = () => {
  return (
    <div>
      <h1 className="font-playfair font-semibold">Security Progress</h1>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            // data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            widths="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPieChart;
