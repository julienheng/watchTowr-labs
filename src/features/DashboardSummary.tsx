import CardLayout from '../components/CardLayout';
import {
  useAssetAffectedStore,
  useAssetAssignedStore,
  useTotalAssetStore,
} from '@/stores/assetCaseStore';
import { Icon } from '@iconify/react';
import { Card, CardBody } from '@nextui-org/react';

interface DashboardSummaryProps {}

const DashboardSummary: React.FC<DashboardSummaryProps> = () => {
  const totalAsset = useTotalAssetStore((state) => state.totalAsset);
  const affectedCase = useAssetAffectedStore((state) => state.affectedCase);
  const totalAssigned = useAssetAssignedStore((state) => state.assignedCase);

  const data = [
    {
      title: 'Total Assets',
      icon: 'game-icons:human-target',
      number: totalAsset,
      textColor: 'text-blue-500',
      iconColor: '#3b82f6',
    },
    {
      title: 'Asset Affected',
      icon: 'solar:danger-circle-broken',
      number: affectedCase,
      textColor: 'text-orange-500',
      iconColor: '#f97316',
    },
    {
      title: 'Asset Assigned',
      icon: 'material-symbols-light:assignment-turned-in-outline',
      number: totalAssigned,
      textColor: 'text-pink-500',
      iconColor: '#ec4899',
    },
  ];

  return (
    <>
      <CardLayout>
        <Card className="p-3">
          <CardBody className="flex flex-row gap-8">
            {data.map(
              ({ title, icon, number, textColor, iconColor }, index) => (
                <div key={index}>
                  <h1 className="font-playfair font-semibold">{title}</h1>
                  <div className="flex items-center justify-around">
                    <Icon
                      className="text-5xl"
                      icon={icon}
                      style={{ color: iconColor }}
                    />
                    <p className={`text-4xl ${textColor}`}>{number}</p>
                  </div>
                </div>
              ),
            )}
          </CardBody>
        </Card>
      </CardLayout>
    </>
  );
};

export default DashboardSummary;
