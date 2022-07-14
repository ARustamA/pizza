import React from 'react'

import '../scss/app.scss'

function Categories({ check, onClickCategories }) {
   const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
   // const categories = [
   //    {name: "Все", id:1},
   //    {name: "Мясные", id:2},
   //    {name:"Вегетарианская", id:3},
   //    {name:"Гриль", id:4},
   //    {name:"Острые", id:5},
   //    {name:"Закрытые",id:6},
   // ]

   return (
      <>
         <div className="categories" >
            <ul>
               {
                  categories.map((name, index) => (<li key={index} onClick={() => onClickCategories(index)}
                     className={check === index ? 'active' : ''}>
                     {name}
                  </li>)
                  )}
            </ul>
         </div>
      </>
   )

}
export default Categories