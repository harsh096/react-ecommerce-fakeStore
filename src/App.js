import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/product/:category" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
