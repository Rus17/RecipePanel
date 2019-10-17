import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from './../FormsControl/FormsControl'
import {required, minTitle} from "./../../Validators/Validators"

const ArticleForm = (props) => {

   return ( <><form onSubmit={props.handleSubmit} className="article">
      <div>Название статьи</div>
         <Field
           name="title"
           type="text"
           component={Input}
           validate={[required, minTitle]}>
         </Field>

         <div>Описание статьи</div>
            <Field
              name="description"
              type="text"
              component={TextArea}
              validate={required}>
            </Field>

      <div>Статья</div>
         <Field
           name="text"
           type="text"
           component={TextArea}
           validate={required}>
         </Field><br />

      <button>Сохранить изменения</button>
   </form>
   </>)

}


export default reduxForm ({form: "editArticle"}) (ArticleForm)
