import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      username : "Unknown User",
      history : [],
    }
    
  }

  componentDidMount() {    
    let name = prompt("Please Enter Your Name");
    this.setState({
      username: name
    });
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
        
          this.setState({
            username : submit? submit : "Unknown",
            history : [
              ...this.state.history,
              {
                previous : [this.state.username],
                current : [submit? submit : "Unknown"],
                date : Date(),
              }
            ]
          })  

        }}
      >
          Change Your Name</button>

      <p> {this.state.history.map((x) => {
            return (
              <div>
              
                <p>
                  Current: {x.previous}, Next: {x.current}, Date : {x.date}
                </p>
            
              </div>
            );
          })}
      </p>
    </>
  }
}

export default App;
