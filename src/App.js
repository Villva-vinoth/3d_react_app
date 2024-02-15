import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/products/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
   <div className="app-display">
    <Header />
    
      <Router >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
   </div>
  );
}

export default App;
