import './App.css';
import React, { useRef, useState } from 'react';

function FormComp (props) {

  let firstname = useRef();
  let lastname = useRef();
  let gender = useRef();

  const submitForm = ()=> {
    props.getValue({
      firstname: firstname.current.value,
      lastname : lastname.current.value,
      gender : gender.current.value
     })
  }

  return (
    <div style={{margin : 20}}>
      <input type="text" ref={firstname}/> <br />
      <input type="text" ref={lastname}/> <br />
      <select ref={gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="na">N/A</option>
      </select> <br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );

}

function App() {
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);
  const [na, setNA] = useState([]);



  const getValue = (value) => {
    console.log(male.length+1)
    if(value.gender === "male") {
      return setMale([...male,value]);
    } else if (value.gender === "female") {
      return setFemale([...female,value]);
    } else {
      return setNA([...na,value]);
    }
  }

return (
  <div style={{margin : 20}}>
    <h1>Form Filling</h1>
    <FormComp getValue = {getValue}/>
    
    
    <hr />
    <h3>Male List</h3>
    <ul>
      {male.map(x => <li>Name: {x.firstname} Lastname : {x.lastname} Gender : {x.gender}</li>)}
    </ul>
    <p>Total : {male.length}</p>
    <h3>Female List</h3>
    <ul>
      {female.map(y => <li>Name: {y.firstname} Lastname : {y.lastname} Gender : {y.gender}</li>)}
    </ul>
    <p>Total : {female.length}</p>
    <h3>N/A List</h3>
    <ul>
      {na.map(z => <li>Name: {z.firstname} Lastname : {z.lastname} Gender : {z.gender}</li>)}
    </ul>
    <p>Total : {na.length}</p>
  </div>

)
  
}

export default App;
