import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import {Navbar, Footer, Home, About, ContractWork, MYOG, Products, Product } from './components/index.js';



function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
          <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About />} />
            <Route path="contractwork" element={<ContractWork />} />
            <Route path="MYOG" element={<MYOG />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
