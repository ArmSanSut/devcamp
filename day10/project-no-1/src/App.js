
import './App.css';
import 'antd/dist/antd.css';

// import LayoutFunc from './WebDesign';
import FormComp from './Form';
import ContentComp from './Content';


//Lab1 
//Nested without children
// function App() {
//   return (<TodoListComp/>)
// }

// function TodoListComp() {
//  return (<><p>Todo List No.1</p>
//  <p>Todo List No.2</p>
//  <p>Todo List No.3</p>
//  <MemberComp/></>)
// }

// function MemberComp() {
//  return (<>
//     <h3>Member Detail</h3>
//     <ul>
//       <li>Member 1: John, Dev, id:1</li>
//       <li>Member 2: Pete, Dev, id:2</li>
//       <li>Member 3: Paul, Dev, id:2</li>
//     </ul>
  
//   <input type="text" name="todoForm" /> 
//  </>

//   )
// }

// //Nested with children
// function App() {
//   return (<TodoListComp><TodoFormComp /></TodoListComp>)
// }

// function TodoListComp(props) {
//   return (<><p>Todo List No.1</p>
//     <p>Todo List No.2</p>
//     <p>Todo List No.3</p>
//     {props.children}
//   </>)
// }

// function TodoFormComp() {
//   return (<input type="text" name="todoForm" />)
// }

//Nested using props
// function App() {
//   return (<TodoListComp 
//     form={TodoFormComp} 
//     />
//   )
// }


// function TodoListComp(props) {
//   return (<><p>Todo List No.1</p>
//     <p>Todo List No.2</p>
//     <p>Todo List No.3</p> 
//     <MemberList />
//     <props.form/>
//   </>)
// }

// function TodoFormComp() {
//   return (<input type="text" name="todoForm" />)
// }
// function RoutineComp (props){
//   return (
//     <ul>
//       <li>Wake up</li>
//       <li>Go to school</li>
//     </ul>
//   )
// }
// function MemberList (){
//   return (
//     <ul>
//       <li>Member 1: John</li>
//       <li>Member 2: Pete</li>
//       <li>Member 3: Paul</li>
//     </ul>
//   )
// }

function App (){
  return ( <>
    <ContentComp />
    <FormComp />
  </>
    // <LayoutFunc />
    
  );
}



export default App;
