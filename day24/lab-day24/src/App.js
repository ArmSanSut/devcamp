import React, { useState } from 'react'

import useStateObj from './useObject';

function App() {
  let [value, setValue] = useStateObj({ 
    firstname: 'Steve', 
    lastname: 'Roger', 
    age: 50 })

  const onClickFunc = () => {
    setValue({ age: 2000})
  }
  return (
  <>
    <h1>{JSON.stringify(value)}</h1>
    <input type='button' value='Click' onClick={onClickFunc} />
  </>
  );
}




export default App;
