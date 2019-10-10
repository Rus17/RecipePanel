import React from "react"
import {connect} from "react-redux"
import Recipes from "./Recipes"
import {getRecipesTC} from "./../../redux/recipesReducer"

//const RecipesContainer = (props) => {
//   return <Recipes getRecipesTC={getRecipesTC} recipes={props.recipes}/>
//}

class RecipesContainer extends React.Component {

   componentDidMount(props){
      this.props.getRecipesTC()
   }

   render (){
      return <Recipes recipes={this.props.recipesPage.recipes} />
   }
}

let MapStateToProps = (state) => {
   return {
      recipesPage: state.recipesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getRecipesTC: () => {dispatch(getRecipesTC())}
   }
}
export default connect(MapStateToProps, MapDispatchToProps) (RecipesContainer)
