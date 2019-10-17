import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import "./Articles.css"
import {NavLink} from "react-router-dom"
import ArticleEditForm from "./ArticleEditForm"

const Article = (props) => {

   let category = props.categoryList.map((c) => {
      return <NavLink  key={c._id} to={`/category/${c._id}`}> / {c.title}</NavLink>
   })


   const onSubmit = (formData) =>{

      let createObj = {
         _id: props.id,
         title: formData.title || props.title,
         description: formData.description || props.description,
         text: formData.text || props.text,
         categoryId: props.categoryId
      }

      props.updateArticleTC(createObj)
      setEditMode(false)
   }

   let [editMode, setEditMode] = useState(false)

    const modeEdit = () =>{

      props.initFormArticleAC({
         title: props.title,
         description: props.description,
         text: props.text
      })

       setEditMode(true)

    }

    let [status, setStatus] = useState(true)
    const statusEdit = () =>{
       setStatus(false)
    }


   const statusDelete = () => {
      props.delResipeTC(props.id)
      statusEdit()
   }

   if(!status)return <Redirect to={"/articles"} />
   return (<>
      {editMode ?
         <ArticleEditForm
            onSubmit={onSubmit}
            initialValues={props.initFormArticle}
         /> :
         <div className="article">
         <h2>{props.title}</h2>
         <div><b>Описание статьи</b></div>
         <div>{props.description}</div><br />
         <div><b>Статья</b></div>
         <div>{props.text}</div>
         <br />
         <div><b>Категории к которым относится рецепт</b></div>
         <div>{category}</div><br />
         <div><b>Дата последнего изменения</b></div>
         <div>{props.date}</div>

         <button onClick={modeEdit}>Редактировать</button>
         <button onClick={statusDelete}>Удалить</button>
         </div>
      }</>)

}

export default Article
