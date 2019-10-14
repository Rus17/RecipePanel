
import {NavLink} from "react-router-dom"
import "./Categories.css"
import React from "react"

const Categories = (props) => {

   const showCategories = props.categories.map((e) => {
      return <div key={e._id} className="container">

            <NavLink to={`/category/${e._id}`}>
              <span key={e._id}>{e.title} </span>
            </NavLink>
              
            </div>
   })

   return <div className="categories">
            <h2>Категории рецептов и статей</h2>

            <NavLink to="/categories/addCateg">Добавить категорию</NavLink>
            <br /><br />
            <div>{showCategories}</div>
   </div>
}

export default Categories
