import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from './../FormsControl/FormsControl'
import React from "react"
import {required, minTitle} from "./../../Validators/Validators"

const RecipeForm = (props) => {

   return ( <form onSubmit={props.handleSubmit} className="recipe">
      {/*<div>Название рецепта</div>
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
      </Field><br />*/}


      <div>Название рецепта</div>
      <Field
        name="title"
        type="text"
        component={Input}
        validate={[required, minTitle]}>
      </Field>

      <div>Текст рецепта</div>
      <Field
        name="text"
        type="text"
        component={TextArea}
        validate={required}>
      </Field><br />

      <button type="submit">Сохранить изменения</button>
   </form>
   )
}

export default reduxForm ({form: "editRecipe"}) (RecipeForm)
