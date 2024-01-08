import { Card, CardProps } from '@nextui-org/react';


export interface CardLayoutProps extends CardProps {
}

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <Card className="p-6">
        {children}
    </Card>
  );
};

export default CardLayout;
