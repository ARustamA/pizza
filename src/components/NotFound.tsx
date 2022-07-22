import React from 'react'
import '../scss/app.scss'
const NotFound:React.FC = () => {

   return (
      <div className="m404">
         <img src='/img/404.png' alt='404' />
         <h1>Ничего не найдено!</h1>
         <p>К сожалению данная страница не найдена</p>
      </div>

   )
}
export default NotFound