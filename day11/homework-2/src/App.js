import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home';
import {Stock,StockDetail} from './Stock';
import {Location, LocationDetail} from './Location'
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Homework -2- </h1>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stock" element={<Stock />} />
            <Route path="stock/:id/:product" element={<StockDetail />} />
            <Route path="location" element={<Location />} />
            <Route path="location/detail" element={<LocationDetail />} />
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
          <li><Link to="/stock">Shop Stock</Link></li>
          <li><Link to="/location">Warehouse Location</Link></li>
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
