import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 28,
    sex: 'male',
  });
  const updateMe = () => {
    // setPerson({...person, name: 'Jonasz'});
    setPerson({name: 'Susan', sex: 'female'});
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.sex}</h2>
      <button type='button' className='btn' onClick={updateMe}>
        Show Janusz
      </button>
    </>
  );
};
export default UseStateObject;
