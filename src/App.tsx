import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Cart from './components/Cart'
import FullPizza from './components/FullPizza'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
              <Route path="/"
                element={<Home />} />
              <Route path="cart"
                element={<Cart />} />
              <Route path="pizza/:id"
                element={<FullPizza />} />
              <Route path="*"
                element={<NotFound />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;
