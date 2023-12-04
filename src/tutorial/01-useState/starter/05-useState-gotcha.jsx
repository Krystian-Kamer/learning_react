import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <>
      <h2>{value}</h2>
      <button onClick={increase}>more</button>
    </>
  );
};

export default UseStateGotcha;
