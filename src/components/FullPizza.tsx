import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../scss/app.scss'

const FullPizza: React.FC = () => {
   const [pizza, setPizza] = useState<{
      imageUrl:string
      title:string
      price:number
   }>()
   const navigate = useNavigate()
   const { id } = useParams()
   useEffect(()=>{
      async function fetchPizza(){
         try {
            const {data} = await axios.get('https://62cbce7d8042b16aa7c2c215.mockapi.io/items/'+id)
            setPizza(data)
         } catch (error) {
            console.log(error)
            alert('ошибка при получении пиццы с базы данных')
            navigate('/')
         }
      }   
      fetchPizza()
   },[])
   
   if(!pizza){
      return <>"Loading..."</>
   }

   return (
      <div className='container'>
         <div className="full__pizza">
            <div className="full__pizza-title">
               <h2>{pizza.title}</h2>
               <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
               <p>Цена: {pizza.price} ₽</p>
            </div>
         
            <div className='descrip'>
               <h2>Пицца "{pizza.title}"</h2>
               <i>Описание и ингредиенты:</i>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iure nam. Eos eius facilis suscipit. Ullam, nemo. A autem ipsa nesciunt magnam sint cumque. Veritatis illo ipsum animi magnam id.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iure nam. Eos eius facilis suscipit. Ullam, nemo. A autem ipsa nesciunt magnam sint cumque. Veritatis illo ipsum animi magnam id.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iure nam. Eos eius facilis suscipit. Ullam, nemo. A autem ipsa nesciunt magnam sint cumque. Veritatis illo ipsum animi magnam id.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iure nam. Eos eius facilis suscipit. Ullam, nemo. A autem ipsa nesciunt magnam sint cumque. Veritatis illo ipsum animi magnam id.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iure nam. Eos eius facilis suscipit. Ullam, nemo. A autem ipsa nesciunt magnam sint cumque. Veritatis illo ipsum animi magnam id.
                  </p>
                  <Link to='/' className="button button--outline button--add go-back-btn">
                     <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                     </svg>
                     <span>Вернуться назад</span>
                     </Link>
            </div>   
         </div>
      </div>
   )
}

export default FullPizza