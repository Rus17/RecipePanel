import React from "react"
import {NavLink} from "react-router-dom"
import "./Categories.css"

const Categories = (props) => {



   const showCategories = props.categories.map((e) => {
      return <div key={e._id}>
               <span key={e._id}>{e.title} </span>
               <span>
                  <span onClick={() => {console.log("Priver")}}> Редактировать </span>
                  <span onClick={() => {}}> Удалить</span>
               </span>
            </div>
   })

   return <div className="categories">
            <h2>Категории рецептов и статей</h2>

            <NavLink to="/categories/addCateg">Добавить категорию</NavLink><br />

            <div>{showCategories}</div>
   </div>
}

export default Categories
