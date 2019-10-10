import React from "react"
import {NavLink} from "react-router-dom"
import "./menu.css"

const MenuCont = () => {
   return <div className="menu">
   <NavLink to="/categories" className="menuItem">Категории</NavLink>
   <NavLink to="/recipes" className="menuItem">Рецепты</NavLink>
   <NavLink to="/articles" className="menuItem">Статьи</NavLink>

   </div>
}

export default MenuCont
