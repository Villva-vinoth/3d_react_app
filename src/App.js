import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/others/testimonials/Testimonial";
import Careers from "./components/careers/Careers";
import Blogs from "./components/Blogs/Blog";
import Gallery from "./components/others/Gallery/Gallery";
import WhyTorus from "./components/whyTorus/WhyTorus";
import Login from "./components/Admin/login/Login";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/admin/Admin";
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
          {!loginRoute ? <Header /> : ('')}
          <Routes>
            <Route path="" element={<Home set={setLoginRoute}/>} />
            <Route path="/product/*" element={<Products set={setLoginRoute}/>} />
            <Route path="/contact" element={<Contact set={setLoginRoute} />} />
            <Route path="/testimonials" element={<Testimonial set={setLoginRoute} />} />
            <Route path="/careers" element={<Careers set={setLoginRoute} />} />
            <Route path="/blogs/*" element={<Blogs set={setLoginRoute} />} />
            <Route path="/gallery" element={<Gallery  set={setLoginRoute}/>} />
            <Route path="/why-torus" element={<WhyTorus set={setLoginRoute}/>} />
            <Route path="/login" element={<Login set={setLoginRoute}/>} />
            <Route path="/admin/*" element={<Admin set={setLoginRoute}/>} />
          </Routes>
          {!loginRoute ? <Footer /> : ('')}

        </Router>


      </div>


    </div>
  );
}

export default App;
