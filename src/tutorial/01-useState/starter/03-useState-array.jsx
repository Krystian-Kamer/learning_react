import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => removeItem(person.id)}>
              remove
            </button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear items</button>
    </>
  );
};

export default UseStateArray;
