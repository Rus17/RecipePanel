import React from "react"
import Recipe from "./Recipe"
import {
   getRecipeTC,
   updateRecipeTC,
   delResipeTC,
   getCategoryListTC,
   loadAC
} from "./../../redux/recipeReducer"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class RecipeContainer extends React.Component {

   refreshRecipe(){
      this.props.getRecipeTC(this.props.match.params.recipeId)
      this.props.getCategoryListTC(this.props.match.params.recipeId)
   }

   componentDidMount(){
      this.refreshRecipe()

   }

   componentDidUpdate (prevProps, prevState, snapshot){
      if(!this.props.categoryList)
      this.refreshRecipe()
   }

   render(){
      return <Recipe
               id={this.props.match.params.recipeId}
               title={this.props.title}
               text={this.props.text}
               categoryId={this.props.categoryId}
               date={this.props.date}
               updateRecipeTC={(obj) => this.props.updateRecipeTC(obj)}
               delResipeTC={(id) => this.props.delResipeTC(id)}
               categoryList={this.props.categoryList}
               initFormRecipe={this.props.initFormRecipe}
               loadAC={this.props.loadAC}               
               />
   }
}



let MapStateToProps = (state) => {
   return ({
      title: state.recipePage.recipe.title,
      text: state.recipePage.recipe.text,
      categoryId: state.recipePage.recipe.categoryId,
      date: state.recipePage.recipe.updatedAt,
      categoryList: state.recipePage.categoryList,
      initFormRecipe: state.recipePage.initFormRecipe
   })}

let MapDispatchToProps = (dispatch) => {
   return ({
      getRecipeTC: (id) => {dispatch(getRecipeTC(id))},
      updateRecipeTC: (obj) => {dispatch(updateRecipeTC(obj))},
      delResipeTC: (id) => {dispatch(delResipeTC(id))},
      getCategoryListTC: (id) => {dispatch(getCategoryListTC(id))},
      loadAC: (data) => {dispatch(loadAC(data))}
   })
}

const WithUrlRecipe = withRouter(RecipeContainer)

export default connect(MapStateToProps, MapDispatchToProps)(WithUrlRecipe)
