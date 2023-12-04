import { useState } from "react";

useState

const UseStateBasics = () => {
const value = useState('1')[0]
const func = useState('1')[1]
  console.log(value);
  console.log(func);

   return <h2>useState basics</h2>;
  ;
};

export default UseStateBasics;
