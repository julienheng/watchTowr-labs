import CardLayout from '../components/CardLayout';
import {
  useAssetAffectedStore,
  useAssetAssignedStore,
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
  const { affectedCase, setAffectedCase } = useAssetAffectedStore();
  const totalAssigned = useAssetAssignedStore((state) => state.assignedCase);

  useEffect(() => {
    if (assetData) {
      setAsset(assetData?.length);
      const initialAffectedAsset = assetData?.filter(
        (item) => item.status === 'vulnerable',
      )?.length;
      setAffectedCase(initialAffectedAsset);
    }
  }, [assetData, setAsset, setAffectedCase]);

  const data = [
    {
      title: 'Total Assets',
      icon: 'game-icons:human-target',
      number: asset,
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

export default CasesHuntedCard;
