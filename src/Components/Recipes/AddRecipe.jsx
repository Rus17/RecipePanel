import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from './../FormsControl/FormsControl'

const AddRecipeForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
      <div>Название рецепта
         <Field
           name="title"
           type="text"
           placeholder="Название рецепта"
           component={Input}
           />
      </div>

      <div>Текст рецепта
         <Field
           name="text"
           type="text"
           placeholder="Текст рецепта"
           component={TextArea}
           />
      </div>

      <div>Категория рецепта
         <Field
           name="categoryId"
           type="text"
           placeholder="Категория рецепта"
           component={Input}
           />
      </div>
      <button>Добавить</button>
   </form>
}

const ReduxAddRecipeForm = reduxForm ({form: "addRecipe"}) (AddRecipeForm)

const AddRecipe = (props) => {

   const onSubmit = (formData) =>{
      console.log("Отправилось1")
      props.setRecipeTC(formData.title, formData.text, formData.categoryId)
   }

   return <ReduxAddRecipeForm onSubmit={onSubmit}/>
}

export default AddRecipe
