import { useMoveBack } from '@/hooks/useMoveBack';
import { Button } from '@nextui-org/react';

const PageNotFound = () => {
  const moveback = useMoveBack();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 mobile:h-dvh">
      <h1 className="text-3xl font-semibold">
        The page you are looking for could not be found
      </h1>
      <Button onClick={moveback} color="danger">
        Go back
      </Button>
    </div>
  );
};

export default PageNotFound;
