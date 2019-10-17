import React from "react"
import AddRecipe from "./AddRecipe"
import {setRecipeTC} from "../../redux/recipesReducer"
import {connect} from "react-redux"

const AddRecipeContainer = (props) => {
   return <AddRecipe 
            setRecipeTC={props.setRecipeTC} 
            categoriesPage={props.categoriesPage}
            editFormRecipePage={props.editFormRecipePage}
            />
}

let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      setRecipeTC: (title, text, categoryId) => {dispatch(setRecipeTC(title, text, categoryId))}
   }
}

export default connect(MapStateToProps, MapDispatchToProps) (AddRecipeContainer)
