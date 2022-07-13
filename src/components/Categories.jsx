import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'


import '../scss/app.scss'


function Categories () {
   const [activeIndex, setActiveIndex] = React.useState(0)
   const{ pizzaItems} = React.useContext(AppContext)
   const categories = [
      {name: "Все", id:1},
      {name: "Мясные", id:2},
      {name:"Вегетарианская", id:3},
      {name:"Гриль", id:4},
      {name:"Острые", id:5},
      {name:"Закрытые",id:6},
   ]
   
   return (
      <>
         <div className="categories" >
            <ul>
               {
                  categories.map((obj) => (<li key={obj.id} onClick={() => setActiveIndex(obj.id)}
                     className={activeIndex === obj.id  ? 'active' : ''}>
                     {obj.name}
                  </li>)
                  )}
            </ul>
         </div>
      </>
   )

}
export default Categories