import React from 'react'

import { AppContext } from '../App'
import Skeleton from './Skeletone'
import PizzaCart from './PizzaCard'
import Categories from './Categories';
import Sort from './Sort';

import '../scss/app.scss'

function Home({ isLoading }) {
   const { pizzaItems } = React.useContext(AppContext)
   return (
      <>
         <div className="container">
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__top">
               <Categories />
               <Sort />
            </div>
            <div className="content__items">
               {(isLoading ? [... new Array(8)].map((_, i) => (<Skeleton key={i} />))
                  : pizzaItems.map((obj) => (<PizzaCart key={obj.id} {...obj} />)))}
            </div>
         </div>
      </>
   )
}
export default Home