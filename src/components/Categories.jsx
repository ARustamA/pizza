import React from 'react'
import { Link } from 'react-router-dom'


import '../scss/app.scss'


const Categories = () => {
   const [activeIndex, setActiveIndex] = React.useState(0)
   const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые"
   ]
   const onClickActive = (index) => {
      setActiveIndex(index)
   }
   return (
      <>
         <div className="categories" >
            <ul>
               {
                  categories.map((name, index) => (<li key={index} onClick={() => onClickActive(index)}
                     className={activeIndex === index  ? 'active' : ''}>
                     {name}
                  </li>)
                  )}
            </ul>
         </div>
      </>
   )

}
export default Categories