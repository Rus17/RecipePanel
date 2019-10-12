import {Field, reduxForm} from 'redux-form'
import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import "./Recipes.css"
import {Input, TextArea} from './../FormsControl/FormsControl'

const Recipe = (props) => {

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
         <ReduxRecipeForm
            id={props.id}
            title={props.title}
            text={props.text}
            date={props.date}
            onSubmit={onSubmit}
         /> :
         <div className="recipe">
         <h2>{props.title}</h2>id = {props.id}<br />
         <br />
         <div>{props.text}</div>
         <br />
         <div>{props.categoryId}</div>
         <div>{props.date}</div>

         <button onClick={modeEdit}>Редактировать</button>
         <button onClick={statusDelete}>Удалить</button>
         </div>
      }</>)

}

//----------------------------------------------

const RecipeForm = (props) => {

   return ( <><form onSubmit={props.handleSubmit} className="recipe">
      <div>Название рецепта</div>
         <Field
           name="title"
           type="text"
           component="TextArea">{props.title}
         </Field>

      <div>Текст рецепта</div>
         <Field
           name="text"
           type="text"
           component="TextArea">{props.text}
         </Field><br />

      <button>Сохранить изменения</button>
   </form>

   {/*   <div className="recipe">
      <div>Название рецепта</div>
      <textarea defaultValue={props.title}></textarea>
      <br />
      <div>Текст</div>
      <textarea defaultValue={props.text}></textarea>
      <br />
      <div>{props.date}</div>

      <button>Сохранить изменения</button>
   </div>*/}
   </>)

}


const ReduxRecipeForm = reduxForm ({form: "editRecipe"}) (RecipeForm)

export default Recipe
