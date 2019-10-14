import React from "react"
import AddArticle from "./AddArticle"
import {setArticleTC} from "../../redux/articlesReducer"
import {connect} from "react-redux"

const AddArticleContainer = (props) => {
   return <AddArticle setArticleTC={props.setArticleTC} categoriesPage={props.categoriesPage}/>
}

let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      setArticleTC: (title, description,text, categoryId) => {
         dispatch(setArticleTC(title, description, text, categoryId))}
   }
}

export default connect(MapStateToProps, MapDispatchToProps) (AddArticleContainer)
