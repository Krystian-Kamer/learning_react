import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 3000);
  };
  return (
    <>
      <h2>{value}</h2>
      <button onClick={handleClick}>more</button>
      <button></button>
    </>
  );
};

export default UseStateGotcha;

