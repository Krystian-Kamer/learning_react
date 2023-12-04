import { useState } from 'react';

const ErrorExample = () => {
  const [num, setNum] = useState(0);
  const handleCount = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={handleCount} className='btn' style={{padding: '10px 40px', fontSize : '40px'}}>
        +
      </button>
      <h2>{num}</h2>
    </>
  );
};

export default ErrorExample;
