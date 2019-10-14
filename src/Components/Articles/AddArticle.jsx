import React, {useState} from "react"
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea, Select} from './../FormsControl/FormsControl'
import "./Articles.css"
import {Redirect} from "react-router-dom"

const AddArticleForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option key={e._id} value={e._id}>{e.title}</option>
   })

   return <form onSubmit={props.handleSubmit} className="articles">
      <div>Название статьи
         <Field
           name="title"
           type="text"
           placeholder="Название статьи"
           component={Input}
           />
      </div>

      <div>Краткое описание
         <Field
           name="description"
           type="text"
           placeholder="Краткое описание"
           component={TextArea}
           />
      </div>

      <div>Текст статьи
         <Field
           name="text"
           type="text"
           placeholder="Текст статьи"
           component={TextArea}
           />
      </div>

      <div>
         <Field name="categoryId" component={Select}>
            <option>Выберите категорию</option>
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
