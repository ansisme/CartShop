import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import About from "./components/About";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./components/CardContext";

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
