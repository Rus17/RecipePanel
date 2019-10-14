import React from "react"
import AddCategories from "./AddCategories"
import {addCategoryTC} from "../../redux/categoriesReducer"
import {connect} from "react-redux"

const AddCategoriesContainer = (props) => {
   return <AddCategories
               addCategoryTC={props.addCategoryTC}
               categoriesPage={props.categoriesPage}
         />
}

let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      addCategoryTC: (title, parentId) => {dispatch(addCategoryTC(title, parentId))}
   }
}

export default connect(MapStateToProps, MapDispatchToProps) (AddCategoriesContainer)
