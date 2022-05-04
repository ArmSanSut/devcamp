import React from 'react'
import HeaderComponent from "./Header";
import ContentComponent from './Content';
import FooterComponent from './Footer';
import './App.css';


class App extends React.Component {
    render() {
      return(
        <>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
        </>
      );
     
    }
}
export default App;


