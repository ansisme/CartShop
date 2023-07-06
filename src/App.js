import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Todo from "./components/Todo";
import About from "./components/About";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./components/CardContext";
import APIFetch from "./components/APIFetch";
function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/api" element={<APIFetch />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
