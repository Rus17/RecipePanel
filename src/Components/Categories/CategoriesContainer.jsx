import React from "react"
import Categories from "./Categories"
import {connect} from "react-redux"
import {getCategoriesTC} from "../../redux/categoriesReducer"

class CategoriesContainer extends React.Component {

   componentDidMount(props){
      this.props.getCategoriesTC()
   }

   render(props){
      return <Categories categories={this.props.categoriesPage.categories}/>
   }
}



let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getCategoriesTC: () => {dispatch(getCategoriesTC())}
   }
}
export default connect(MapStateToProps, MapDispatchToProps) (CategoriesContainer)
