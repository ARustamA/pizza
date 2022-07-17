import React from 'react'

import '../scss/app.scss'

function Categories({ check, onClickCategories }) {
   const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

   return (
      <>
         <div className="categories" >
            <ul>
               {  categories.map((name, index) => (<li key={index} onClick={() => onClickCategories(index)}
                     className={check === index ? 'active' : ''}>
                     {name}
                  </li>))}
            </ul>
         </div>
      </>
   )

}
export default Categories