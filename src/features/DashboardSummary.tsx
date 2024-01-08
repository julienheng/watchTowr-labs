import CardLayout from '../components/CardLayout';
import {
  useAssetAffectedStore,
  useAssetHuntedStore,
  useAssetStore,
} from '@/stores/assetCaseStore';
import { Icon } from '@iconify/react';
import { Card, CardBody } from '@nextui-org/react';
import { useAssetData } from '@/hooks/useFetchData';
import { useEffect } from 'react';

interface CasesHuntedCardProps {}

const CasesHuntedCard: React.FC<CasesHuntedCardProps> = () => {
  const { data: assetData } = useAssetData();
  const { asset, setAsset } = useAssetStore();
  const totalAffected = useAssetAffectedStore((state) => state.case);
  const totalHunted = useAssetHuntedStore((state) => state.case);

  useEffect(() => {
    if (assetData) {
      setAsset(assetData?.length); // Update case based on fetched total asset in data
    }
  }, [assetData, setAsset]);

  const data = [
    {
      title: 'Total Assets',
      icon: 'game-icons:human-target',
      number: asset,
      textColor: 'text-blue-500',
      iconColor: 'blue',
    },
    {
      title: 'Asset Affected',
      icon: 'solar:danger-circle-broken',
      number: totalAffected,
      textColor: 'text-red-500',
      iconColor: 'red',
    },
    {
      title: 'Asset Assigned',
      icon: 'material-symbols-light:assignment-turned-in-outline',
      number: totalHunted,
      textColor: 'text-orange-500',
      iconColor: 'orange',
    },
  ];

  return (
    <>
      <CardLayout>
        <Card className="p-2">
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

export default CasesHuntedCard;
