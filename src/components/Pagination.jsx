import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setCurrentPage } from '../redux/slices/filterSlice'
import ReactPaginate from 'react-paginate'

import '../scss/app.scss'

const Pagination = () => {
   const pageCount = useSelector((state) => state.filterSlice.pageCount)
   const dispatch =  useDispatch()
   const onChangePage = (number) => { dispatch(setCurrentPage(number)) }
   return (
      <div className='pageCount'>
         <ReactPaginate
            breakLabel='...'
            nextLabel='>'
            previousLabel='<'
            onPageChange={(event )=> onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            
            renderOnZeroPageCount={null}
            forcePage={pageCount - 1}

         />
      </div>
   )
}
export default Pagination