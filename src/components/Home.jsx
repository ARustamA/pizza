import React from 'react'
import axios from 'axios'

import Skeleton from './Skeletone'
import PizzaCart from './PizzaCard'
import Categories from './Categories';
import Sort from './Sort';

import '../scss/app.scss'

function Home() {
   const [categoriesId, setCategoriesId] = React.useState(0)
   const [sortIndex, setSortItems]=React.useState({name:"популярности", sortProperty:'rating'})
   const [pizzaItems, setPizzaItems] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(true)


   React.useEffect(() => {
      async function generalData() {
         try {
            setIsLoading(true)
            const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
            const sorty = sortIndex.sortProperty.replace('-','')
            const category = categoriesId > 0 ? `category=${categoriesId}` : ''
            const { data } = await axios.get(`https://62cbce7d8042b16aa7c2c215.mockapi.io/items?${
               category}&sortBy=${sorty}&order=${order}`)
            
            setPizzaItems(data)
            setIsLoading(false)
         } catch (error) {
            console.log(error)
            alert('Не удалось выгрузить данные с сервера')
         }
      }
      generalData()
      window.scrollTo(0, 0)
   }, [categoriesId, sortIndex])

   return (
      <>
         <div className="container">
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__top">
               <Categories check={categoriesId} 
                           onClickCategories={(id)=>setCategoriesId(id)} />
               <Sort sortIndex={sortIndex} onClickSort={(id)=>setSortItems(id)}/>
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