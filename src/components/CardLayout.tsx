import { Card, CardProps, CardBody } from '@nextui-org/react';


export interface CardLayoutProps extends CardProps {
}

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <Card className="p-2">
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default CardLayout;
