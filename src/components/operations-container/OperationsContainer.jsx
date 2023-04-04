import { useSelector } from 'react-redux';

export const OperationsContainer = () => {
  const history = useSelector((state) => state.math.mathHistory);
  return <div style={{ fontSize: '20px' }}>{history}</div>;
};
