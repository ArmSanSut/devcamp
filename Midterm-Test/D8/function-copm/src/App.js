import './App.css';
import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div style={{"textAlign": "center", height: 1500}}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
