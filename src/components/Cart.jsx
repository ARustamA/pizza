import React from 'react'

import { AppContext } from '../App'

import '../scss/app.scss'



function Cart () {
   const{ pizzaItems} = React.useContext(AppContext)
   return(
      <>
         <h2 className="content__title">Корзина</h2>
         <div className="content__items">
            
         </div>
      </>
   )
}
   export default Cart