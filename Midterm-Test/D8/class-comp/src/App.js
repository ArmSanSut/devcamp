import './App.css';
import React from 'react'
import HeaderComp from './Header';
import ContentComp from './Content';
import FooterComp from './Footer';

class App extends React.Component {
  render () {
    return (
      <div style={{"textAlign": "center", height: 1500}}>
        <HeaderComp />
        <ContentComp />
        <FooterComp />
      </div>
    );
  }
}


export default App;
