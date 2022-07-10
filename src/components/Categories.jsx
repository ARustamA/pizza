import '../scss/app.scss'
import React from 'react'

const Categories = () => {
   const [activeIndex, setActiveIndex]=React.useState(0)
   const onClickActive = (index)=>{
      setActiveIndex(index)
   }
   return (
      <>
         <div className="categories">
            <ul>
               <li onClick={()=>onClickActive(0)} className={activeIndex===0 ? 'active' : ''}>Все</li>
               <li onClick={()=>onClickActive(1)} className={activeIndex===1 ? 'active' : ''}>Мясные</li>
               <li onClick={()=>onClickActive(2)} className={activeIndex===2 ? 'active' : ''}>Вегетарианская</li>
               <li onClick={()=>onClickActive(3)} className={activeIndex===3 ? 'active' : ''}>Гриль</li>
               <li onClick={()=>onClickActive(4)} className={activeIndex===4 ? 'active' : ''}>Острые</li>
               <li onClick={()=>onClickActive(5)} className={activeIndex===5 ? 'active' : ''}>Закрытые</li>
            </ul>
         </div>
      </>
   )

}
export default Categories