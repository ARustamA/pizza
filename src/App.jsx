import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';


import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';


import styles from './scss/app.scss';
export const AppContext = React.createContext({})
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
    <AppContext.Provider value={{ pizzaItems }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          
            <Routes>
              <Route path="/"
                element={<Home isLoading={isLoading} />} />
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
