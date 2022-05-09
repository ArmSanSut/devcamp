import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Portfolio from './Portfolio';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Homework -1- </h1>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav style={{display: "flex", }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/nothing-here">Wrong Process</Link></li> */}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p><Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}



export default App;
