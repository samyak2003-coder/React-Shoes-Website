import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import ProductView from "./ProductView";
import Login from "./routes/login/Login"
import Signup from "./routes/signup/Signup"
import Contact from "./routes/contact/Contact"
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
