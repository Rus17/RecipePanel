import React from "react"
import AddRecipe from "./AddRecipe"
import {connect} from "react-redux"
import {setRecipeTC} from "./../../redux/recipesReducer"

const AddRecipeContainer = (props) => {
   return <AddRecipe setRecipeTC={props.setRecipeTC}/>
}

let MapStateToProps = (state) => {
   return {

   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      setRecipeTC:  () => {dispatch(setRecipeTC())}
   }
}


export default connect(MapStateToProps, MapDispatchToProps) (AddRecipeContainer)
