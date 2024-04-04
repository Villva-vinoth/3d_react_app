import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Login from "./components/Admin/login/Login";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/admin/Admin";
import UserRoutes from "./userRoutes";
function App() {

  const [loginRoute, setLoginRoute] = useState(false);

  const [select,setSelect] =useState(true);

  // useEffect(() => {
  //   console.log(window.location.pathname)
  //   if (window.location.pathname === '/login') {
  //     setLoginRoute(true)
  //   }
  //   if (window.location.pathname === '/admin') {
  //     setLoginRoute(true)
  //   }
  //   else {
  //     setLoginRoute(false)
  //   }
  // },[loginRoute])

  return (
    <div className="app-display">


      <div className="app-content">
        <Router >
          {/* {!loginRoute ? <Header /> : ('')} */}
          <Routes>
           
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/login" element={<Login set={setLoginRoute}/>} />
            <Route path="/admin/*" element={<Admin set={setLoginRoute}/>} />
          </Routes>
          {/* {!loginRoute ? <Footer /> : ('')} */}

        </Router>


      </div>


    </div>
  );
}

export default App;
