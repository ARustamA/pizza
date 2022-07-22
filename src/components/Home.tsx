import React from 'react'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Skeleton from './Skeleton'
import PizzaCart from './PizzaCard'
import Categories from './Categories'
import Sort from './Sort'
import Pagination from './Pagination'
import { setCategoriesId, selectSort } from '../redux/slices/filterSlice'
import { fetchPizza, pizzaState } from '../redux/slices/pizzaSlice'

import '../scss/app.scss'



const Home:React.FC = () => {
   const navigate = useNavigate()
   const { categoriesId, sortIndex, pageCount, searchValue } = useSelector(selectSort)
   const { items, status } = useSelector(pizzaState)
   const dispatch = useDispatch()
   const onClickCategories = (index:number) => { dispatch(setCategoriesId(index)) }

   //получение пицц
   const generalData = async () => {
      const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
      const sorty = sortIndex.sortProperty.replace('-', '')
      const category = categoriesId > 0 ? `category=${categoriesId}` : ''
      const search = searchValue ? `&search=${searchValue}` : ''

      dispatch(
         //@ts-ignore
      fetchPizza({
         order, sorty, category, search, pageCount,
      }))
   }
   React.useEffect(() => {
      generalData()
      //  window.scrollTo(0, 0)
   }, [categoriesId, sortIndex.sortProperty, searchValue, pageCount])


   React.useEffect(() => {
      const queryString = qs.stringify({
         sortProperty: sortIndex.sortProperty,
         categoriesId,
         pageCount
      })
      navigate(`?${queryString}`)
      // console.log(queryString)
   }, [categoriesId, sortIndex.sortProperty, pageCount])


   const pizzasAr = items.map((obj:any) => (<PizzaCart key={obj.id} {...obj} />))
   const skeletons = [...new Array(pageCount)].map((_, i) => (<Skeleton key={i} />))

   return (
      <>
         <div className="container">
            <h2 className="content__title">Мир пицц</h2>
            <div className="content__top">
               <Categories check={categoriesId}
                  onClickCategories={onClickCategories} />
               <Sort />
            </div>
            <div className="content__items">
               {
                  status === 'error' ?
                     (<div className='content__error'>
                        <h2> Произошла ошибка😕</h2>
                        <p>
                           Проверьте соединение с инетернетом, перезагрузите страницу.<br />
                           Попробуйте зайти позже.
                        </p>
                     </div>) : (
                        <>
                           {status === 'loading' ? skeletons : pizzasAr}
                        </>
                     )


               }

            </div>
            <Pagination />
         </div>
      </>
   )
}
export default Home