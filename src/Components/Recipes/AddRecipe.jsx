import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from './../FormsControl/FormsControl'
import "./Recipes.css"

const AddRecipeForm = (props) => {

let showCategories = props.categoriesPage.categories.map((e) => {
   return <option value={e._id}>{e.title}</option>
})

   return <form onSubmit={props.handleSubmit} className="recipes">
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

      <div>Выберите категорию
         <Field name="categoryId" component="Select">
            {showCategories}
          </Field>
      </div>



      <button>Добавить</button>
   </form>
}

const ReduxAddRecipeForm = reduxForm ({form: "addRecipe"}) (AddRecipeForm)

const AddRecipe = (props) => {
   const onSubmit = (formData) =>{
      props.setRecipeTC(formData.title, formData.text, formData.categoryId)
   }

   return <ReduxAddRecipeForm onSubmit={onSubmit} categoriesPage={props.categoriesPage}/>
}

export default AddRecipe
