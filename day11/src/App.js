import { Routes, Route, Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/protected" 
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>} 
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <ul>
        <li><Link to="/">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

function PublicPage() {
  return <h3>Public Page</h3>;
}

function ProtectedPage() {
  let navigate = useNavigate();
  let auth = React.useContext(AuthContext);

  const onLogoutFunc = () => {
    auth.signout()
    navigate('/protected')
  }
  return <><h3>Protected Page</h3><input type="button" value="Logout" onClick={onLogoutFunc} /></>;
}

function LoginPage() {
  let navigate = useNavigate();
  let auth = React.useContext(AuthContext);

  const onClickFunc = () => {
    auth.signin()
    navigate('/protected')
  }
  return <input type="button" value="Login" onClick={onClickFunc} />
}

let AuthContext = React.createContext();

function AuthProvider(props) {
  let [isLogin, setIsLogin] = React.useState(false);
  let signin = () => { 
    setIsLogin(true); 
  };
  let signout = (callback) => { 
    setIsLogin(false); 
  };
  return <AuthContext.Provider value={{ isLogin, signin, signout }}>{props.children}</AuthContext.Provider>;
}

function RequireAuth(props) {
  let auth = React.useContext(AuthContext)
  return !auth.isLogin ? <Navigate to="/login" replace /> : props.children;
}




// import './App.css';
// import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";

// function App() {      
//   return (
//     <div>
//       <h1>Example</h1>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           {/* <Route path="name" element={<Name />}></Route> */}
//           <Route path="product" element={<Product />} />
//           <Route path="product/:id/:name" element={<ProductDetail />} />
//           {/* <Route path="catalog" element={<Catalog />} />
//           <Route path="catalog/:id" element={<CatalogDetail />} /> */}
//           <Route path="noodle" element={<Noodle />} />
//           <Route path="noodle/detail" element={<NoodleDetail />} />

//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//       <hr />
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           {/* <li><Link to="/name">My Name</Link></li> */}
//           <li><Link to="/product">Product</Link></li>
//           {/* <li><Link to="/catalog">Catalog</Link></li> */}
//           <li><Link to="/noodle">Noodle</Link></li>
//           <li><Link to="/nothing-here">Nothing Here</Link></li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (<h2>Home</h2>);
// }

// function About() {
//   return (<h2>About</h2>);
// }

// function Dashboard() {
//   return (<h2>Dashboard</h2>);
// }

// // function Name(){
// //   return (<h2>Inarm Sansutnanont</h2>);
// // }

// function NoMatch() {
//   return (
//     <>
//       <h2>Nothing to see here!</h2>
//       <p>You might do something wrong!</p>
//       <p><Link to="/">Go to the home page</Link></p>
//     </>
//   );
// }

// function Product() {
//   const productList = [
//     { id: '01', name: 'iPhone 11' },
//     { id: '02', name: 'iPhone 12' },
//     { id: '03', name: 'iPhone 13' }
//   ]
//   return (<><h2>Product</h2>
//     <ul>
//     {productList.map(x => (
//       <li key={x.id}>
//         <Link to={`${x.id}/${x.name}`}>{x.name}</Link>
//       </li>
//     ))}
//     </ul></>
//   );
// }

// // function Catalog () {
// //   const items = [
// //     {id: '01', name: 'Spring Gate'},
// //     {id: '02', name: 'Window'}
// //   ]
// //   return (<>
// //     <h2>Catalog Page</h2>
// //     <ul>
// //       {items.map(y => (
// //         <li key={y.id}>
// //           <Link to={`${y.id}`}>{y.name}</Link>
// //         </li>
// //       ))}
// //     </ul>
// //   </>);
// // }

// function ProductDetail() {
//   let param = useParams();
//   console.log(param);
//   return (<><h2>Product Detail</h2><p>You open product {param.id} : {param.name}</p></>);
// }

// // function CatalogDetail(){
// //   let catalogParam = useParams();
// //   console.log(catalogParam);
// //   return (<><h2>Ctalog Details</h2><p>Your product is {catalogParam.id}</p></>);
// // }

// function Noodle() {
//   let navigate = useNavigate();

//   function handleChange(e) {
//     e.preventDefault()
//     let form = e.currentTarget;
//     let formData = new FormData(form);
//     let data = { 
//       topping: formData.getAll('toppings'), 
//       noodle: formData.get('noodle'), 
//       soup: formData.getAll('soup') 
//     }
//     navigate('/noodle/detail', { replace: true, state: { data } })
//   }
//   return (<>
//   <form onSubmit={handleChange}>
//     <p>What would you like?</p>
//     <p>
//       <label>
//         <input type="radio" name="noodle" value="small" />
//         เส้นเล็ก
//       </label>
//       <br />
//       <label>
//       <input type="radio" name="noodle" value="big" />
//         เส้นใหญ่
//       </label>
//       <br />
//     </p>

//     <p>
//       <label>
//         <input type="checkbox" name="toppings" value="meatBall" />
//         ลูกชิ้น
//       </label>
//       <br />
//       <label>
//         <input type="checkbox" name="toppings" value="meat" />
//         เนื้อ
//       </label>
//       <br />
//       <label>
//         <input type="checkbox" name="toppings" value="vegetable" />
//         ผัก
//       </label>
//     </p>
//     <p>
//       <label>
//         <input type="radio" name='soup' value="plain" />
//           น้ำใส 
//       </label>
//       <br />
//       <label>
//         <input type="radio" name='soup' value="extra" />
//           น้ำข้น
        
//       </label>
//       <br />
//     </p>
//     <input type='submit' />
//     </form>
//     </>
//     );}

// function NoodleDetail() {
//   const location = useLocation();
//   console.log(location)
//   let order = location.state.data
//   return (<><h2>Noodel Detail</h2>
//     <h3>คุณสั่งเส้น {order.noodle}</h3>
//     <h3>คุณสั่ง Topping {order.topping.map((x,i)=> <span key={i}>{x} - </span>)}</h3>
//     <h3>คุณสั่ง Soup {order.soup}</h3>
//   </>);
// }

export default App;
