import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setSortItems, selectSort, EnamSort} from '../redux/slices/filterSlice'

import '../scss/app.scss'

type SortItem = {
   name:string;
   sortProperty: EnamSort
}

export const sortArr: SortItem [] = [
      { name: "популярности(DESC)", sortProperty: EnamSort.RATING_DESC },
      { name: "популярности(ASC)", sortProperty: EnamSort.RATING_ASC},
      { name: "цене(DESC)", sortProperty: EnamSort.PRICE_DESC},
      { name: "цене(ASC)", sortProperty: EnamSort.PRICE_ASC },
      { name: "алфавиту(DESC)", sortProperty: EnamSort.TITLE_DESC },
      { name: "алфавиту(ASC)", sortProperty: EnamSort.TITLE_ASC }]
      
const Sort:React.FC = () => {

   const {sortIndex} = useSelector(selectSort)
   const dispatch =  useDispatch()
   const sortRef = React.useRef<HTMLDivElement>(null)
   const onClickSort = (obj: SortItem) => { 
      dispatch(setSortItems(obj))
      setOpen(false)   }
   
   const [open, setOpen] = React.useState(false)

   React.useEffect(() => {
      const closePopup = (event: MouseEvent) => {
         const _event = event as MouseEvent &{
            path:Node[]
         }
         if (sortRef.current && !_event.path.includes(sortRef.current)){
               setOpen(false)
            }}

      document.body.addEventListener('click', closePopup)

      return ()=> {
         document.body.removeEventListener('click', closePopup)
      }
   },[])

   return (
      <> <div className="sort" ref = {sortRef}>
            <div className="sort__label" >
               <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                     fill="#2C2C2C"
                  />
               </svg>
               <b>Сортировка по:</b>
               <span onClick={() => setOpen(!open)}>{sortIndex.name}</span>
            </div>
            {open &&
               <div className="sort__popup">
                  <ul>
                     { sortArr.map((obj, i) => (<li key={i} onClick={()=>onClickSort(obj)}
                           className={sortIndex.sortProperty === obj.sortProperty ? 'active' : ''}>
                           {obj.name}
                        </li>))}
                  </ul>
               </div>}
         </div>
      </>
   )

}
export default Sort