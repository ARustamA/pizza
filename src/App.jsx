import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

import Categories from './components/Categories';
import Header from './components/Header';
import Home from './components/Home';
import PizzaCart from './components/PizzaCard';
import Skeleton from './components/Skeletone';
import Sort from './components/Sort';

import styles from './scss/app.scss';
export const AppContext = React.createContext({ })
function App() {

const [pizzaItems, setPizzaItems] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)


React.useEffect(() => {
  async function generalData() {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://62cbce7d8042b16aa7c2c215.mockapi.io/items')
      
      setPizzaItems(data)
      setIsLoading(false)
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
            {/* <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {(isLoading ? [... new Array(8)].map((_,i)=>(<Skeleton key={i} />)) 
                        : pizzaItems.map((obj)=>(<PizzaCart key={obj.id} {...obj}/>))) }
                </div>       */}
            <Routes>

              <Route path=""
                element= {<Home  isLoading={isLoading}/>}/>

              <Route path="cart"
                element= {<Cart />}/>

            </Routes>

              
            
          </div>
        </div>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;
