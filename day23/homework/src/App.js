import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = { username : "Unknown User"}
    
  }

  componentDidMount() {    
    let name = prompt("Please Enter Your Name");
    this.setState({username: name});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.username);
    console.log(nextState.username)
    
    if(nextState.username) {
      
      if (nextState.username === this.state.username) {
        alert("Repeated Name, Please Change Your Name")
        return false
      }
      else {
        const date = new Date();
        const result =document.getElementById('result');
        result.innerHTML += `<li> 
          Previous Name : ${this.state.username} </br>
          Current Name : ${nextState.username}  </br>
          Date : ${date}
        </li>`
        return true
      }

    } else {

      return this.setState({username: "Unknown User"})
    }   
  }
  render () {
    return <>
      <h1>{this.state.username}</h1>
      <input type='text' id='btn-user'/>
      <button 
        onClick={() => {

          const submit = document.getElementById('btn-user').value;
          this.setState({username: submit })  

        }}
      >
          Change Your Name</button>
      <ul id='result'></ul>
    </>
  }
}

export default App;
