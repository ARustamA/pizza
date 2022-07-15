import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

export const AppContext = React.createContext()
function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <AppContext.Provider value={{searchValue, setSearchValue}}>
      <div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
              <Route path="/"
                element={<Home />} />
              <Route path="cart"
                element={<Cart />} />
              <Route path="*"
                element={<NotFound />} />
            </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
