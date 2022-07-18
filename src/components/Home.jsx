import React from 'react'
import axios from 'axios'
import qs from 'qs'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import Skeleton from './Skeleton'
import PizzaCart from './PizzaCard'
import Categories from './Categories'
import Sort, { sortArr } from './Sort'
import Pagination from './Pagination'
import { setCategoriesId, setFilters } from '../redux/slices/filterSlice'
import { AppContext } from '../App'

import '../scss/app.scss' 


function Home() {
   const navigate = useNavigate()
   const {categoriesId, sortIndex, pageCount } = useSelector((state) => state.filterSlice)
   const dispatch =  useDispatch()
   const onClickCategories = (id) => { dispatch(setCategoriesId(id)) }

   const [pizzaItems, setPizzaItems] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(true)
   const { searchValue } = React.useContext(AppContext)


   // React.useEffect(() => {
   //    if (window.location.search) {
   //       const params = qs.parse(window.location.search.substring(1))
         
   //       const sortFind = sortArr.find((obj) => obj.sortProperty === params.sortProperty)
   //       // console.log('1',sortFind)
         
         
   //       // dispatch(setFilters({
   //       //    ...params, sortFind
   //       //    })
   //       // )
   //    }
   // },[])

//получение пицц
   
React.useEffect(() => {
      async function generalData() {
         try {
            setIsLoading(true)
            const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
            const sorty = sortIndex.sortProperty.replace('-', '')
            const category = categoriesId > 0 ? `category=${categoriesId}` : ''
            const search = searchValue ? `&search=${searchValue}` : ''
            const { data } = await axios.get(`https://62cbce7d8042b16aa7c2c215.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sorty}&order=${order}${search}`)

            setPizzaItems(data)
            setIsLoading(false)
         } catch (error) {
            console.log(error)
            alert('Не удалось выгрузить данные с сервера')
         }
      }
      generalData()
      // window.scrollTo(0, 0)
   }, [categoriesId, sortIndex.sortProperty, searchValue, pageCount])


   React.useEffect(()=>{
      const queryString = qs.stringify({
         sortProperty: sortIndex.sortProperty,
         categoriesId,
         pageCount
      })
   navigate(`?${queryString}`)
      // console.log(queryString)
   }, [categoriesId, sortIndex.sortProperty, pageCount])


   
   const pizzasAr = pizzaItems.map((obj) => (<PizzaCart key={obj.id} {...obj} />))
   const skeletons = [... new Array(pageCount)].map((_, i) => (<Skeleton key={i} />))

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
            <Pagination />
         </div>
      </>
   )
}
export default Home