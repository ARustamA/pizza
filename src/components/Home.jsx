import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Skeleton from './Skeleton'
import PizzaCart from './PizzaCard'
import Categories from './Categories'
import Sort, { sortArr } from './Sort'
import Pagination from './Pagination'
import { setCategoriesId, setFilters } from '../redux/slices/filterSlice'
import { AppContext } from '../App'

import '../scss/app.scss'
// import { inRange } from 'lodash'

function Home() {
   const navigate = useNavigate()
   const { categoriesId, sortIndex, pageCount } = useSelector((state) => state.filterSlice)
   const dispatch = useDispatch()
   const onClickCategories = (id) => { dispatch(setCategoriesId(id)) }

   const [pizzaItems, setPizzaItems] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(true)
   const { searchValue } = React.useContext(AppContext)
   const isSearch = React.useRef(false)
   const isMounted = React.useRef(false);

   const fetchPizzas = () => {
      setIsLoading(true);

      const sortBy = sortIndex.sortProperty.replace('-', '');
      const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoriesId > 0 ? `category=${categoriesId}` : '';
      const search = searchValue ? `search=${searchValue}` : '';

      axios
         .get(
            `https://626d16545267c14d5677d9c2.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
         )
         .then((res) => {
            setPizzaItems(res.data);
            setIsLoading(false);
         });
   };

   // Если изменили параметры и был первый рендер
   React.useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortProperty: sortIndex.sortProperty,
            categoriesId,
            pageCount,
         });

         navigate(`?${queryString}`);
      }
      isMounted.current = true;
   }, [categoriesId, sortIndex.sortProperty, pageCount]);

   // Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе
   React.useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));

         const sort = sortArr.find((obj) => obj.sortProperty === params.sortProperty);
         dispatch(
            setFilters({
               ...params,
               sort,
            }),
         );
         isSearch.current = true;
      }
   }, []);

   // Если был первый рендер, то запрашиваем пиццы
   React.useEffect(() => {
      window.scrollTo(0, 0);

      if (!isSearch.current) {
         fetchPizzas();
      }

      isSearch.current = false;
   }, [categoriesId, sortIndex.sortProperty, searchValue, pageCount]);

   const pizzasAr = pizzaItems.map((obj) => (<PizzaCart key={obj.id} {...obj} />))
   const skeletons = [... new Array(pageCount)].map((_, i) => (<Skeleton key={i} />))
// console.log(sortIndex)
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