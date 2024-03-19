import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/others/testimonials/Testimonial";
function App() {
  return (
   <div className="app-display">
    <Header />
    
    <div className="app-content">
    <Router >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/product/*" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonial />} />



        </Routes>
      </Router>
    </div>
      
      <Footer />
   </div>
  );
}

export default App;
