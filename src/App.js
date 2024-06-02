import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductView from "./ProductView";
import Login from "./Login"
import Signup from "./Signup"
import Contact from "./Contact"
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productTitle" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
