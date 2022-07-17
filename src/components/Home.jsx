import React from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'

import Skeleton from './Skeleton'
import PizzaCart from './PizzaCard'
import Categories from './Categories'
import Sort from './Sort'
import Pagination from './Pagination'
import { setCategoriesId} from '../redux/slices/filterSlice'
import { AppContext } from '../App'

import '../scss/app.scss' 

function Home() {
   const {categoriesId, sortIndex } = useSelector((state) => state.filterSlice)
   const dispatch =  useDispatch()
   const onClickCategories = (id) => { dispatch(setCategoriesId(id)) }
      
   const [pizzaItems, setPizzaItems] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(true)
   const [currentPage, setCurrentPage] = React.useState(1)
   const { searchValue } = React.useContext(AppContext)
   React.useEffect(() => {
      async function generalData() {
         try {
            setIsLoading(true)
            const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
            const sorty = sortIndex.sortProperty.replace('-', '')
            const category = categoriesId > 0 ? `category=${categoriesId}` : ''
            const search = searchValue ? `&search=${searchValue}` : ''
            const { data } = await axios.get(`https://62cbce7d8042b16aa7c2c215.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sorty}&order=${order}${search}`)

            setPizzaItems(data)
            setIsLoading(false)
         } catch (error) {
            console.log(error)
            alert('Не удалось выгрузить данные с сервера')
         }
      }
      generalData()
      // window.scrollTo(0, 0)
   }, [categoriesId, sortIndex.sortProperty, searchValue, currentPage])

   const pizzasAr = pizzaItems.map((obj) => (<PizzaCart key={obj.id} {...obj} />))
   const skeletons = [... new Array(currentPage)].map((_, i) => (<Skeleton key={i} />))

   return (
      <>
         <div className="container">
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__top">
               <Categories check={categoriesId}
                  onClickCategories={onClickCategories} />
               <Sort />
            </div>
            <div className="content__items">
               {(isLoading ? skeletons : pizzasAr)}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
         </div>
      </>
   )
}
export default Home