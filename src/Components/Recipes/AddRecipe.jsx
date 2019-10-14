import React, {useState} from "react"
import {Field, reduxForm} from "redux-form"
import {Redirect} from "react-router-dom"
import {Input, TextArea} from './../FormsControl/FormsControl'
import "./Recipes.css"

const AddRecipeForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option key={e._id} value={e._id}>{e.title}</option>
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

      <div>
         <Field name="categoryId" component="Select">
            <option>Выберите категорию</option>
            {showCategories}
          </Field>
      </div>



      <button>Добавить</button>
   </form>
}

const ReduxAddRecipeForm = reduxForm ({form: "addRecipe"}) (AddRecipeForm)

const AddRecipe = (props) => {
   
   let [addDone, setEditMode] = useState(false)
   
   const onSubmit = (formData) =>{
      props.setRecipeTC(formData.title, formData.text, formData.categoryId)
      setEditMode(true)
   }
   
   if(addDone) return <Redirect to={"/recipes"} />
   else
   return <ReduxAddRecipeForm onSubmit={onSubmit} categoriesPage={props.categoriesPage}/>
}

export default AddRecipe
