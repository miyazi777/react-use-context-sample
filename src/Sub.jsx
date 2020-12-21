import react, {useContext} from 'react';
import {CountContext} from './App';

export const Sub = () => {
  const count = useContext(CountContext);
  return (
    <>
      <div>sub module</div>
      <div>{count}</div>
    </>
  );
}
