import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from './../FormsControl/FormsControl'
import "./Articles.css"

const AddArticleForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option value={e._id}>{e.title}</option>
   })

   return <form onSubmit={props.handleSubmit} className="articles">
      <div>Название рецепта
         <Field
           name="title"
           type="text"
           placeholder="Название статьи"
           component={Input}
           />
      </div>

      <div>Текст рецепта
         <Field
           name="description"
           type="text"
           placeholder="Краткое описание"
           component={TextArea}
           />
      </div>

      <div>Текст рецепта
         <Field
           name="text"
           type="text"
           placeholder="Текст статьи"
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

const ReduxAddArticleForm = reduxForm ({form: "addArticle"}) (AddArticleForm)

const AddArticle = (props) => {
   const onSubmit = (formData) =>{

      props.setArticleTC(formData.title, formData.description, formData.text, formData.categoryId)

   }

   return <ReduxAddArticleForm onSubmit={onSubmit} categoriesPage={props.categoriesPage}/>
}

export default AddArticle
