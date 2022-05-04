
import './App.css';
import HeaderComponent from './Header';
import ContentComponent from './Content';
import FooterComponent from './Footer';

function App() {
  return (
    <div className="App" style={{backgroundColor:"pink", height: 250, width: "100vw"}}>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
