import { useSelector } from 'react-redux';

export const Result = () => {
  const result = useSelector((state) => state.math.result);
  return <div>= {result}</div>;
};
