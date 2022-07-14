import React from 'react'

import ReactPaginate from 'react-paginate'

import '../scss/app.scss'

const Pagination = ({ onChangePage}) => {
   return (
      <div className='pageCount'>
         <ReactPaginate 
               breakClassName='...'
               nextLabel=' >'
               onPageChange={event => onChangePage(event.selected + 1)}
               pageRangeDisplayed={4}
               pageCount={3}
               previousLabel='< '
               renderOnZeroPageCount={null}

            />
      </div>
   )
}
export default Pagination