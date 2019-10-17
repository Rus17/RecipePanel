import React, {useState} from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea, Select} from './../FormsControl/FormsControl'
import "./Articles.css"
import {Redirect} from "react-router-dom"
import {required, minTitle, minText} from "./../../Validators/Validators"

const AddArticleForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option key={e._id} value={e._id}>{e.title}</option>
   })

   return <form onSubmit={props.handleSubmit} className="article">
      <div>Название статьи
         <Field
           name="title"
           type="text"
           placeholder="Название статьи"
           component={Input}
           validate={[required, minTitle]}
           />
      </div>

      <div>Краткое описание
         <Field
           name="description"
           type="text"
           placeholder="Краткое описание"
           component={TextArea}
           validate={[required, minText]}
           />
      </div>

      <div>Текст статьи
         <Field
           name="text"
           type="text"
           placeholder="Текст статьи"
           component={TextArea}
           validate={[required, minText]}
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

const ReduxAddArticleForm = reduxForm ({form: "addArticle"}) (AddArticleForm)

const AddArticle = (props) => {

   let [addDone, setEditMode] = useState(false)

   const onSubmit = (formData) =>{
      props.setArticleTC(formData.title, formData.description, formData.text, formData.categoryId)
      setEditMode(true)
   }

   if(addDone) return <Redirect to={"/articles"} />
   else
   return <ReduxAddArticleForm onSubmit={onSubmit} categoriesPage={props.categoriesPage}/>
}

export default AddArticle
