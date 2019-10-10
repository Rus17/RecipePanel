import React from "react"
import Categories from "./Categories"
import {connect} from "react-redux"
import {getCategoriesTC, delCategoryTC} from "../../redux/categoriesReducer"
import "./Categories.css"

class CategoriesContainer extends React.Component {

   componentDidMount(props){
      this.props.getCategoriesTC()
   }

   render(props){
      return <Categories
                className="container"
                categories={this.props.categoriesPage.categories}
                delCategoryTC={(categoryId) => this.props.delCategoryTC(categoryId)}
              />
   }
}



let MapStateToProps = (state) => {
   return {
      categoriesPage: state.categoriesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getCategoriesTC: () => {dispatch(getCategoriesTC())},
      delCategoryTC: (categoryId) => {dispatch(delCategoryTC(categoryId))}
   }
}
export default connect(MapStateToProps, MapDispatchToProps) (CategoriesContainer)
