import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import "./Recipes.css"
import {NavLink} from "react-router-dom"
import RecipeEditForm from "./RecipeEditForm"

const Recipe = (props) => {
   let category = props.categoryList.map((c) => {
      return <NavLink  key={c._id} to={`/category/${c._id}`}> / {c.title}</NavLink>
   })

   const onSubmit = (formData) =>{

      let createObj = {
         _id: props.id,
         title: formData.title || props.title,
         text: formData.text || props.text,
         categoryId: props.categoryId
      }

      props.updateRecipeTC(createObj)
      setEditMode(false)
   }

   let [editMode, setEditMode] = useState(false)

   const modeEdit = () =>{
      props.loadAC({
         title: props.title,
         text: props.text
      })
      setEditMode(true)
    }

    let [status, setStatus] = useState(true)
    const statusEdit = () =>{
       setStatus(false)
    }


   const statusDelete = () => {
      props.delResipeTC(props.id)
      statusEdit()
   }

   if(!status)return <Redirect to={"/recipes"} />
   return (<>
      {editMode ?
         <RecipeEditForm
            id={props.id}
            title={props.title}
            text={props.text}
            date={props.date}
            onSubmit={onSubmit}
            initialValues={props.initFormRecipe}
         /> :
         <div className="recipe">
         <h2>{props.title}</h2>
         <div>{props.text}</div>
         <br />
         <div><b>Категории к которым относится рецепт</b></div>
         <div>{category}</div><br />
         <div><b>Дата последнего изменения</b></div>
         <div>{props.date}</div>

         <button onClick={modeEdit}>Редактировать</button>
         <button onClick={statusDelete}>Удалить</button>
         </div>
      }</>)

}

export default Recipe
