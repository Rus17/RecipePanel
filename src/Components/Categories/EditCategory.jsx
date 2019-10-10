import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input} from './../FormsControl/FormsControl'
import "./Categories.css"
import {withRouter} from 'react-router-dom'

const EditCategoriesForm = (props) => {
   return <form onSubmit={props.handleSubmit} className="categories">

      <div>Название категории
         <Field
           name="title"
           type="text"
           component={Input}
           value="ghbdt"
           />
      </div>

      <button>Сохранить изменения</button>
   </form>
}

const ReduxEditCategoriesForm = reduxForm ({form: "editCategories"}) (EditCategoriesForm)

const EditCategories = (props) => {

   const onSubmit = (formData) =>{
      props.editCategoriesTC(formData.title)
   }

   return <ReduxEditCategoriesForm
              onSubmit={onSubmit}
              idCat={props.match.params.idCat}
              titleCat={props.match.params.titleCat}
              />
}

let WithUrlEditCateg = withRouter(EditCategories)

export default WithUrlEditCateg
