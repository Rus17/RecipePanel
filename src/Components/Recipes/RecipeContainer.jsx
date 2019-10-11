import React from "react"
import Recipe from "./Recipe"
import {getRecipeTC} from "./../../redux/recipeReducer"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class RecipeContainer extends React.Component {
   
   refreshRecipe(){
      console.log("ID recipe", this.props.match.params.recipeId)
      this.props.getRecipeTC(this.props.match.params.recipeId)
   }
   
   componentDidMount(){
      this.refreshRecipe()
   }
   
   componentDidUpdate (prevProps, prevState, snapshot){
      this.refreshRecipe()   
   }
   
   render(){
      return <Recipe
               id={this.props.match.params.recipeId} 
               title={this.props.title}
               text={this.props.text}
               categoryId={this.props.categoryId}
               date={this.props.date}
               />
   }
}



let MapStateToProps = (state) => {
   return ({
      title: state.recipePage.recipe.title,
      text: state.recipePage.recipe.text,
      categoryId: state.recipePage.recipe.categoryId,
      date: state.recipePage.recipe.updatedAt      
   })}

let MapDispatchToProps = (dispatch) => {
   return ({
      getRecipeTC: (id) => {dispatch(getRecipeTC(id))}
   })
}

const WithUrlRecipe = withRouter(RecipeContainer)

export default connect(MapStateToProps, MapDispatchToProps)(WithUrlRecipe)