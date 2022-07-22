import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {pageCountSlice, setCurrentPage } from '../redux/slices/filterSlice'
import ReactPaginate from 'react-paginate'

import '../scss/app.scss'

const Pagination:React.FC = () => {
   const pageCount = useSelector(pageCountSlice)
   const dispatch =  useDispatch()
   const onChangePage = (number: number) => { dispatch(setCurrentPage(number)) }
   return (
      <div className='pageCount'>
         <ReactPaginate
            breakLabel='...'
            nextLabel='>'
            previousLabel='<'
            onPageChange={(event )=> onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={pageCount - 1}

         />
      </div>
   )
}
export default Pagination