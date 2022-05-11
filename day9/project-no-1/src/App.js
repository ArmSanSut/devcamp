import './App.css';
// import React from 'react'
import React, { useState } from 'react';
// import ProfileFuncComp from './Funccomponent';
// import ProfileClassComp from './ClassComponent';

function App () {
  const [age, setAge] = useState({
    name: "John",
    age: 23,
    skills : [
      {id:1, name: "JS"},
      {id:2, name: "React"}
    ]
  })
  const ChangeAge = () => {
    let newAge = {...age}
    newAge.age = 30
    setAge(newAge);
  }


  const ChangeSkill =()=> {
    let newData = {...age}
    let resultForm = ['Python','Java','SQL','GO','Rust']
    
    resultForm.forEach((x)=>{
      newData.skills.push({id:newData.skills.length+1,name:x})
    })

    console.log(newData);

    // let resultTransform = resultForm.map((x,i)=> {
    //   return {id:i+1,name:x}
    // })
    // console.log(resultTransform)

    // newData.skills = resultTransform
    setAge(newData);
  }
  return (
    <>
      <p>Name : {age.name}</p>
      <p>Age: {age.age} </p>
      <ul>Skills:{age.skills.map(x=> <li>{x.name}</li>)}</ul>
      <button onClick={ChangeAge}>Change Age</button> <br/>
      <button onClick={ChangeSkill}>Change skill</button>
    </>
  
  );
}

// const onCopyFunc = (e) => {
//   e.preventDefault();
//   console.log(e)
//   alert(`YOU ARE NOT ALLOW TO COPY CONTENT`)
// }

// const onPasteFunc = (e) => {
//   e.preventDefault();
//   alert(`YOU CANNOT PASTE CONTENT HERE`)
// }
// function App(){
  
//   return (
//     <>
//       <p onCopy={onCopyFunc}>
//       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
//       Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
//       and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
//       (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
//       This book is a treatise on the theory of ethics, very popular during the Renaissance. 
//       The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//     </p>
//     <input type="text" onPaste={onPasteFunc}>
//     </input>
//     </>
    
//   );
  
// }



// function App () {
//   const [websiteName,setWebsiteName] = useState('DEVCAMP');
  
//   const menuList = [
//     {id: 1, list: 'menu 1'},
//     {id: 2, list: 'menu 2'},
//     {id: 3, list: 'menu 3'}
//   ]
//   return (
//     <>
//       <Header name={websiteName}>
//         <h3>Children</h3>  
//       </Header> 
//       <Content key='id' menu={menuList}/>
//     </> 
//   );
// }

// function Header (props) {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       {props.children}
//     </>
    
//   )
// }

// function BtnClick(e) {
//   alert(`You click the button`);
// }

// function Content (props) {
//   const TypeText = (e) => {
//     console.log(e.target.value);
//   }
//   return (
//     <>
//       <h4> This is a CONTENT</h4>
//       {props.menu.map(x => <li key= {x.id}>{x.list}</li>)}
//       <button onClick={e => {BtnClick(e)}}>Click Here</button> <br />
//       <input type="text" onChange={TypeText} />
//     </>
//   );
// }

//Example 2
// const RenderProps = (props) => {
//   return (<>{props.component}</>)
// }
// const Display = (props) => {
//   return (
//     <div>
//       <p>string: {props.myStr}</p>
//       <p>number: {props.myNumber}</p>
//       <p>false value: {props.myBool.toString()}</p>
//       <p>true value: {props.myTrueBool.toString()}</p>
//       <p>null: {props.myNull === null && 'yes'}</p>
//       <p>undefined: {props.myUndefinded === undefined && 'yes'}</p>
//       <p>object: {JSON.stringify(props.myObj)}</p>
//       <p>array: {JSON.stringify(props.myArray)}</p>
//       <p>Date: {props.myDate.toString()}</p>
//       <p>function: {props.myShowNameFunc('John')}</p>
//       <p>Component:</p>
//       <RenderProps component={(<ProfileFuncComp firstname="Hollie" lastname="Chang" />)} />
//     </div>
//   )
// }
//   const ProfileFuncComp = (props) => {
//     return (<><p>Firstname : {props.firstname}</p>
//       <p>Lastname : {props.lastname}</p></>)
//   }
//   function App() {
//     const str = 'hello react!'
//     console.log(str);
//     const number = 5
//     const bool = true
//     const nullValue = null
//     const undefinedValue = undefined
//     const obj = { name: 'somchai', b: 2, lastname: 'sudlor' }
//     const arr = ['john', 2, 'smith', 4]
//     const now = new Date()
//     const showNameFunc = (name) => {
//       return 'my name is ' + name
//     }
//     return (
//       <Display 
//         myStr={str} 
//         myNumber={number} 
//         myBool={bool} 
//         myTrueBool myNull={nullValue} 
//         myUndefinded={undefinedValue} 
//         myObj={obj} 
//         myArray={arr} 
//         myDate={now} 
//         myShowNameFunc={showNameFunc}
//     />

//     )
//   }
//Example 1
// const ProfileFuncComp = (props) => {
//   debugger
//   console.log(props)
//   return (<><p>Firstname : {props.firstname}</p>
//     <p>Lastname : {props.lastname}</p></>)
// }

// class ProfileClassComp extends React.Component {
//   render() {
//     return (<>
//       <p>Firstname : {this.props.firstname}</p>
//       <p>Lastname : {this.props.lastname}</p>
//       </>
//       )}
// }
// const SchoolName = (props)=>{
//   return <h1>School name is : {props.name}</h1>
// }

// function App() {
//   // console.log('TEST');
//   return (
//     <>
//       <SchoolName name = "Dev Camp"/>
//       <ProfileClassComp firstname="Poppie" lastname="Finney" />
//       <ProfileFuncComp firstname="Hollie" lastname="Chang" />
//     </>
//   );
// }

//Example 3
// const ProfileFuncComp = (props) => {
//   console.log(props)
//   return (<><p>Firstname : {props.firstname}</p>
//     <p>Lastname : {props.lastname}</p>
//     <div>{props.children}</div></>)
// }

// class ProfileClassComp extends React.Component {
//   render() {
//     console.log(this.props)
//     return (<><p>Firstname : {this.props.firstname}</p>
//       <p>Lastname : {this.props.lastname}</p>
//       <div>{this.props.children}</div></>)
//   }
// }

// function App() {
//   return (
//     <>
//       <ProfileClassComp firstname="Poppie" lastname="Finney" id="01">
//         <h1>Student</h1>
//         </ProfileClassComp>
//       <ProfileFuncComp firstname="Hollie" lastname="Chang" id="02">
//         <h1>Teacher</h1>
//         </ProfileFuncComp>

//     </>
//   );
// }

//Event example
// const changeForm = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.type, e.target.name);
// }

// const blurForm = (e) => {
//   alert(`You out of Focus with Firstname "${e.target.value}"`)
// }

// const onClickFunc = (e) => {
//   console.log("You clicked form!")
// }
// function App() {
//   return (
//     <><p>Firstname</p><input type="text" name="firstname" onBlur={blurForm} onChange={changeForm} /></>
//   );
// }

//Event onclick
// const people = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Somchai' },
//   { id: 3, name: 'Derp' }
// ]

// const clickButton = (e, name, id) => {
//   alert(`You click on name "${name}"`)
// }

// function App() {
//   const list = people.map(x => (<p key={x.id}> name: {x.name} <span><input type="button" value="Click" onClick={e => { clickButton(e, x.name,x.id) }}></input></span></p>))

//   return (
//     <>{list}</>
//   );
// }

//Lab3
// const data = [
//   {name : 'Arm', id : 1},
//   {name : 'Zee', id : 2},
//   {name : 'Moo', id : 3}
// ]

// const onClickFunc = (e, name, id) => {
//   alert(`You are ${name} id : ${id}`)
// }
// const onChangeFunc = (e) => {
//   console.log(e.target)
// }
// const onCopyFunc = (e) => {
//   e.preventDefault();
//   alert(`You are not allowed to copy`)
// }
// const onKeyPressFunc = (e) => {
//   console.log(e.key);
// }
// function App() {
//   const list = data.map(x => (<div key={x.id}> Your Name : {x.name} Your Id : {x.id} 
//   <span>
//     <input type="button" 
//            value="Click Here to Display" 
//            onClick={e => {onClickFunc(e, x.name, x.id)}}
//            style = {{margin:20}}>
//     </input>
//     <input type="email" 
//            name='username' 
//            onChange={onChangeFunc}
//            onKeyPress={onKeyPressFunc}>
//     </input>
//     <p onCopy={onCopyFunc}>
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
//       ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
//       aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
//       consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
//       quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
//       voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//     </p>
//   </span></div>))
//   return <>{list}</>
// }

//State as Class (constructor)
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     //console.log(props);
//     this.state = {
//       name: 'John',
//       age: 30,
//       skills: [{ id: 1, name: 'React' },
//       { id: 2, name: 'NodeJS' }]
//     }
//   }
  
//   onClickFunc = (e) => {
//     console.log("You clicked")
//     this.setState({age: 20});
//   }
//   render() {
//     // const display = this.state.skills.map(x => <li key={x.id}>{x.name}</li>))
//     return <><p>Name : {this.state.name}</p>
//       <p>Age : {this.state.age}</p>
//       <ul>
//         {this.state.skills.map(x =>
//           <li key={x.id}>{x.name}</li>)}
//         {/* {display} */}
//       </ul>
//       <input type="button" value="Click Here" onClick= {this.onClickFunc}></input>
//     </>
//   }
// }

//State as Function
// function App() {
//   const [member, setMember] = useState({  //initai value = array
//     name: 'John',
//     age: 30,
//     skills: [{ id: 1, name: 'React' },
//     { id: 2, name: 'NodeJS' }]
//   });

//   //const [number, setNumber] = useState(0); //initial value = 0

//   const onChangeAge = () => {
//     // let data = member;
//     // data.age = 20;
//     //console.log(data);
//     setMember({age:20}); //change the whole object 
//     //setMember(data); 
//   }

//    return <><p>Name : {member.name}</p>
//     <p>Age : {member.age}</p>
//     <ul>
//       {member.skills && member.skills.map(skill =>
//         <li key={skill.id}>{skill.name}</li>)}
//     </ul>
//     <button onClick={onChangeAge}>change age</button>
//   </>
// }

//Lab 4
// function App(){
//   const [number,setNumber] = useState(10);

//   const onClickFunc = (e) => {
//     // <h1>Function Display</h1>
//     console.log("function is working");
//     setNumber(number+1);
//     console.log(number)
//   }

//   return (
//     <>
//       <p>Initail Number : {number}</p>
//       <input type="button" value="Click" onClick={onClickFunc}></input>
//     </>
//   );
// }




export default App;
