import React from "react"
import AddCategories from "./AddCategories"
import {setCategoriesTC} from "../../redux/categoriesReducer"
import {connect} from "react-redux"

const AddCategoriesContainer = (props) => {
   return <AddCategories setCategoriesTC={props.setCategoriesTC}/>
}

let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      setCategoriesTC: (data) => {dispatch(setCategoriesTC(data))}
   }
}

export default connect(MapStateToProps, MapDispatchToProps) (AddCategoriesContainer)
