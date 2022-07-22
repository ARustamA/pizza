import React from 'react'
import '../scss/app.scss'

type CategoriesProps = {
   check: number;
   onClickCategories: (i:number) => void;
} 
const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const Categories: React.FC<CategoriesProps> = ({ check, onClickCategories }) => {
   return (
      <>
         <div className="categories" >
            <ul>
               {  categories.map((name, index) => (
                  <li key={index} onClick={() => onClickCategories(index)}
                     className={check === index ? 'active' : ''}>
                     {name}
                  </li>))}
            </ul>
         </div>
      </>
   )
}
export default Categories