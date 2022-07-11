import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Categories from './components/Categories';
import Header from './components/Header';
import PizzaCart from './components/PizzaCart';
import Sort from './components/Sort';

import styles from './scss/app.scss';
export const AppContext = React.createContext({ })
function App() {

const [pizzaItems, setPizzaItems] = React.useState([])


React.useEffect(() => {
  async function generalData() {
    try {
      const { data } = await axios.get('https://62cbce7d8042b16aa7c2c215.mockapi.io/items')
      setPizzaItems(data)
    } catch (error) {
      console.log(error)
      alert('Не удалось выгрузить данные с сервера')
    }
  }
  generalData()
}, [])



  return (
    <AppContext.Provider value={{pizzaItems }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            <Routes>
              <Route path=""
                element={<PizzaCart /> } />

            </Routes>

              
            </div>
          </div>
        </div>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;
