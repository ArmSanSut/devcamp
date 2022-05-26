import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { showComponent: true }
  }

  render() {
    return (
      <>
      <input type="button" value="SHOW / HIDE" onClick={() => this.setState({ showComponent: !this.state.showComponent })} />
        {
          this.state.showComponent ? <Data name="THIS IS TEST" /> :
          <h1>Component is HIDE</h1>
        }
      </>
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { value: 1 }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    alert('component is unmount')
  }


  render() {
    console.log('render');
    return <>
      <h1>{this.props.name}</h1>
      <h3>{this.state.value}</h3>
      <input type="button" value="click" onClick={() => this.setState({ value: this.state.value + 1 })} />
    </>
  }
}

export default App;
