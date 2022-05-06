
import './App.css';
import React, { useState } from 'react';

// const TodoList = (props) => {
//   return (
//     <div>
//       <p>{list.map (x => "To do List :" {x.list})}</p>
//       <p>{list.map (y => "Date :" {y.time.toString()})}</p>
//     </div>
//   );
// }

function App() {
  const times = new Date();
  const [list, setList] = useState ([{
    list: "list1",
    time: times
  },
  {
    list: "list2",
    time: times
  }])

  const AddList = (e) => {
    if (e.which === 13 && e.target.value !== "") {
      let newList = [...list];
      newList.push({list: e.target.value, time: new Date()})
      setList(newList);
      console.log("Addlist");
      e.target.value = "";
    } 
    else if (e.which === 13 && e.target.value === ""){
      alert("Type your list");
    }
    
  } 
  // const RemoveFunc = (e) => {
  //   newList.remove();
  //   setList(newList);
  // }
  console.log(typeof list.list)
  return (
    // <TodoList 
    // list = {list.list}
    // time = {list.time}
    // />
    <>
        {list.map(x => (
        <p>{x.list} <span>{x.time.toString()}</span><span><input type="button" value="Click to remove" style={{margin: 20}}></input></span></p>
        ))}
        <input type="text" onKeyPress={AddList}></input>

    </>
    
  );
}

export default App;
