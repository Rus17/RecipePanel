// import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import {Input, TextArea} from './../FormsControl/FormsControl'
import "./Categories.css"
import {withRouter} from 'react-router-dom'
import {updateCategoryTC} from "./../../redux/categoriesReducer"
import React, {useState, useEffect} from 'react'

const EditCategoriesForm = (props) => {
   return <form onSubmit={props.handleSubmit} className="categories">

      <div>Название категории
         <Field
           name="title"
           type="text"
           component="TextArea">{props.titleCat}</Field>
      </div>

      <button>Сохранить изменения</button>
   </form>
}


const ReduxEditCategoriesForm = reduxForm ({form: "editCategories"}) (EditCategoriesForm)


const EditCategories = (props) => {

  let [editMode, setEditMode] = useState(false)

   const onSubmit = (formData) =>{
      props.updateCategoryTC(props.match.params.idCat, formData.title)
      setEditMode(true)
   }

  if(editMode) return <Redirect to={"/categories"} />
   return <ReduxEditCategoriesForm
              onSubmit={onSubmit}
              idCat={props.match.params.idCat}
              titleCat={props.match.params.titleCat}
              />
}

let WithUrlEditCateg = withRouter(EditCategories)


const MapDispatchToProps = (dispatch) => {
  return {
    updateCategoryTC: (_id, title, parentId) => {
      dispatch(updateCategoryTC(_id, title, parentId))}
  }
}


export default connect (null, MapDispatchToProps)(WithUrlEditCateg)
