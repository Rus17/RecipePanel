import React, {useState} from "react"
import {Redirect} from 'react-router-dom'
import EditCategory from "./EditCategory"
import {NavLink} from "react-router-dom"
import "./Categories.css"


const Category = (props) => {

   let parents = props.parentsCategory.map((c) => {
      return (
         <NavLink  key={c._id} to={`/category/${c._id}`}> / {c.title}</NavLink>
      )
   })

   let recipes = props.recipeByCategory.map((c) => {
      return (
         <NavLink  key={c._id} to={`/recipe/${c._id}`}> / {c.title}</NavLink>
      )
   })

   let articles = props.articlesCategory.map((c) => {
      return (
         <NavLink  key={c._id} to={`/article/${c._id}`}> / {c.title}</NavLink>
      )
   })




   let [status, setStatus] = useState(true)
   const delCat = (categoryId) => {
      props.delCategoryTC(categoryId)
      setStatus(false)
   }

   let [editMode, setEditMode] = useState(false)
   const editCat = (id, title) => {
      // props.updateCategoryTC()
      setEditMode(true)
   }

if(!status)return <Redirect to={"/categories"} />
if(editMode)return <EditCategory id={props.id} title={props.title}/>
else
   return <div className="category">
           {}
           <div><b>Название категории:</b></div>
           <div>{props.title}</div><br />
           <div><b>Родительские категории:</b></div>
           <div>{parents}</div><br />
           <div><b>Дата последнего изменения:</b></div>
           <div>{props.updatedAt}</div><br />
           <div><b>Рецепты данной категории:</b></div>
           <div>{recipes}</div><br />
           <div><b>Статьи данной категории:</b></div>
           <div>{articles}</div>

           <button onClick={() => editCat(props.id, props.title)}>Редактировать</button>
           <button onClick={() => delCat(props.id)}>Удалить</button>
   </div>
}


export default Category
