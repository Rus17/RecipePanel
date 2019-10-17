// import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input} from './../FormsControl/FormsControl'
import "./Categories.css"
import React from 'react'
import {required, minTitle} from "./../../Validators/Validators"

const CategoryEditForm = (props) => {
   return <form onSubmit={props.handleSubmit} className="categories">

      <div><b>Название категории</b></div>
         <Field
            name="title"
            type="text"
            component={Input}
            validate={[required, minTitle]}>
         </Field>
         <br />

      <button>Сохранить изменения</button>
   </form>
}


export default reduxForm ({form: "editCategories"}) (CategoryEditForm)
