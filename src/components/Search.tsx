import React from 'react'
import debounce from 'lodash.debounce'
import { setSearchValue } from '../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

import '../scss/app.scss'


const Search:React.FC = () => {
   const dispatch = useDispatch()
   const [value, setValue] = React.useState('')

   const inputRef = React.useRef<HTMLInputElement>(null)

   const onClickClear = ()=>{
      dispatch(setSearchValue(''))
      setValue('')
      inputRef.current ?.focus()
   }
   const updateSearchValue = React.useCallback
   (  debounce((value) => { 
      dispatch(setSearchValue(value))
      }, 150),
   [],)

   const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      updateSearchValue(event.target.value)
   }

   return (
      <div className='search'>
         <svg className='searchIcon'
            enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_1" />
            <g id="Layer_2"><g>
               <path d="M295.7,125.6C275.3,99.8,244.6,85,211.6,85c-24.4,0-47.4,8-66.6,23.2c-22.5,17.8-36.6,43.3-39.9,71.7s4.7,56.5,22.5,79    c20.5,25.8,51.1,40.6,84.1,40.6c15.8,0,31.1-3.4,45-9.9l22.8,28.8l-6.7,5.3c-3.1,2.4-3.8,6.9-1.5,10.1l49.8,72.7    c8.8,12.9,23.5,20.6,39.1,20.6c10.8,0,20.9-3.5,29.4-10.2c10.3-8.1,16.7-20.3,17.8-33.3s-3.4-26.1-12.2-35.7l-59.4-65.1    c-2.7-2.9-7.1-3.3-10.2-0.8l-6.7,5.3l-22.8-28.8C326,220.2,327.1,165.2,295.7,125.6z M139.4,249.5c-15.3-19.3-22.2-43.4-19.3-67.9    c2.8-24.5,15-46.4,34.3-61.7c16.5-13.1,36.3-20,57.2-20c28.4,0,54.8,12.7,72.4,35c31.6,39.9,24.9,98-15,129.6    c-4.3,3.4-8.8,6.4-13.5,8.9c0,0,0,0-0.1,0c-13.4,7.2-28.2,11-43.7,11C183.3,284.5,157,271.7,139.4,249.5z M329.4,298l54.7,59.9    c6.1,6.7,9.1,15.4,8.4,24.4c-0.7,9-5,17.1-12.2,22.8c-5.8,4.6-12.7,7-20.1,7c-10.7,0-20.7-5.3-26.7-14.1L287.7,331l32.5-25.8    l2.1-1.7c0,0,0,0,0,0L329.4,298z M292.5,308.1l-1.2,0.9l-21.3-26.9c2.8-1.8,5.6-3.8,8.2-5.9c2.7-2.1,5.2-4.3,7.6-6.7l21.3,26.9    L292.5,308.1z" />
               <path d="M265.8,187.3h8c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-21.7l-6.2-19.3c-1.3-3.9-5.5-6.1-9.4-4.8    c-3.9,1.3-6.1,5.5-4.8,9.4l4.8,14.7H187l4.8-14.7c1.3-3.9-0.9-8.2-4.8-9.4c-3.9-1.3-8.2,0.9-9.4,4.8l-6.2,19.3h-21.7    c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h8l17.3,44.7c1.1,2.9,3.9,4.8,7,4.8h59.7c3.1,0,5.9-1.9,7-4.8L265.8,187.3z M236.4,221.7    H187l-13.4-34.4h3.1c0,0,0,0,0,0s0,0,0,0h69.9c0,0,0,0,0,0s0,0,0,0h3.1L236.4,221.7z" /></g></g>
         </svg>
         <input 
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            className='searchInput' placeholder='?????????? ??????????...' />
         {value && (
            <svg className='close' onClick={onClickClear}
               data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title />
               <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
               <path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
            </svg>)}
      </div>

   )
}
export default Search