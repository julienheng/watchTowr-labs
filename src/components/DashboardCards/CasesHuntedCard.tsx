import CardLayout from './CardLayout';
import { useHuntedCaseStore } from '@/stores/caseHuntedStore';
import { Icon } from '@iconify/react';

interface CasesHuntedCardProps {}

const CasesHuntedCard: React.FC<CasesHuntedCardProps> = () => {
  const caseNumber = useHuntedCaseStore((state) => state.case);

  return (
    <CardLayout>
      <h1 className="font-playfair font-semibold">Cases Hunted</h1>
      <div className="flex justify-around items-center">
        <Icon className="text-6xl" icon="game-icons:human-target" />
        <p className="text-4xl">{caseNumber}</p>
      </div>
    </CardLayout>
  );
};

export default CasesHuntedCard;
