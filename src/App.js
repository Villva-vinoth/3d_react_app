import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/products/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/home/MainDisplay/Landing";
function App() {
  return (
   <div className="app-display">
    <Header />
    
    <div className="app-content">
    <Router >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
      
      {/* <Footer /> */}
   </div>
  );
}

export default App;
