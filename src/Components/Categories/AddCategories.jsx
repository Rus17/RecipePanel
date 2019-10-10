import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input} from './../FormsControl/FormsControl'
import "./Categories.css"

const AddCategoriesForm = (props) => {

   return <form onSubmit={props.handleSubmit} className="categories">

      <div>Название категории
         <Field
           name="title"
           type="text"
           placeholder="Название категории"
           component={Input}
           />
      </div>

      <button>Добавить</button>
   </form>
}

const ReduxAddCategoriesForm = reduxForm ({form: "addCategories"}) (AddCategoriesForm)

const AddCategories = (props) => {

   const onSubmit = (formData) =>{
      props.setCategoriesTC(formData.title)
   }

   return <ReduxAddCategoriesForm onSubmit={onSubmit}/>
}

export default AddCategories
