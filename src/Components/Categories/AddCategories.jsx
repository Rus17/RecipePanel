import React, {useState}  from "react"
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'
import {Input, Select} from './../FormsControl/FormsControl'
import "./Categories.css"
import {required, minTitle} from "./../../Validators/Validators"

const AddCategoriesForm = (props) => {

   let showCategories = props.categoriesPage.categories.map((e) => {
      return <option key={e._id} value={e._id}>{e.title}</option>
   })

   return <form onSubmit={props.handleSubmit} className="categories">

      <div>
         <div><b>Название категории</b></div>
         <Field
           name="title"
           type="text"
           placeholder="Название категории"
           component={Input}
           validate={[required, minTitle]}
           /><br />

           <div><b>Выберите родительскую категорию</b></div>
              <Field name="parentId" component={Select}>
                 <option>Без категории</option>
                 {showCategories}
               </Field>
      </div>

      <button>Добавить</button>
   </form>
}


const ReduxAddCategoriesForm = reduxForm ({form: "addCategories"}) (AddCategoriesForm)


const AddCategories = (props) => {

   let [addDone, setEditMode] = useState(false)

   const onSubmit = (formData) =>{
      props.addCategoryTC(formData.title, formData.parentId)
      setEditMode(true)
   }

   if(addDone) return <Redirect to={"/categories"} />
   else
   return <ReduxAddCategoriesForm
               onSubmit={onSubmit}
               categoriesPage={props.categoriesPage}
            />
}

export default AddCategories
