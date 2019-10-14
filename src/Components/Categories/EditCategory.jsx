// import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import {TextArea} from './../FormsControl/FormsControl'
import "./Categories.css"
import {updateCategoryTC} from "./../../redux/categoriesReducer"
import React, {useState} from 'react'

const EditCategoriesForm = (props) => {
   return <form onSubmit={props.handleSubmit} className="categories">

      <div><b>Название категории</b></div>
         <Field
            name="title"
            type="text"
            component="TextArea">{props.title}
         </Field>
         <br />

      <button>Сохранить изменения</button>
   </form>
}


const ReduxEditCategoriesForm = reduxForm ({form: "editCategories"}) (EditCategoriesForm)


const EditCategories = (props) => {
  let [editMode, setEditMode] = useState(false)

   const onSubmit = (formData) =>{
      props.updateCategoryTC(props.id, formData.title)
      setEditMode(true)
   }

  if(editMode) return <Redirect to={"/categories"} />
   return <ReduxEditCategoriesForm
              onSubmit={onSubmit}
              id={props.id}
              title={props.title}
              />
}


const MapDispatchToProps = (dispatch) => {
  return {
    updateCategoryTC: (_id, title) => {
      dispatch(updateCategoryTC(_id, title))}
  }
}


export default connect (null, MapDispatchToProps)(EditCategories)
