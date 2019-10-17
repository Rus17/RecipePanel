import React, {useState} from "react"
import {Field, reduxForm} from "redux-form"
import {Redirect} from "react-router-dom"
import {Input, TextArea, Select} from './../FormsControl/FormsControl'
import "./Recipes.css"
import {required, minTitle} from "./../../Validators/Validators"

const AddRecipeForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option key={e._id} value={e._id}>{e.title}</option>
   })

   return <form onSubmit={props.handleSubmit} className="recipe">

      <div>Название рецепта
         <Field
           name="title"
           type="text"
           placeholder="Название рецепта"
           component={Input}
           validate={[required, minTitle]}
           />
      </div>

      <div>Текст рецепта
         <Field
           name="text"
           type="text"
           placeholder="Текст рецепта"
           component={TextArea}
           validate={[required, minTitle]}
           />
      </div>

      <div>
      <div><b>Выберите категорию</b></div>
         <Field name="categoryId" component={Select}>
            <option>Без категории</option>
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
