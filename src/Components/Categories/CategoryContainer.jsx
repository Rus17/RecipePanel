import React from "react"
import Category from "./Category"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'

class CategoryContainer extends React.Component {
   
//   constructor(props) {
//      super(props)
//      this.state = {category: null}    
//   }
   
   findInfoCategory = (props) => {
      const category = this.props.categories.filter(c => {
         return c._id == this.props.match.params.idCat
      })
      
      this.setState({category: category[0]})
   }

componentDidMount(props){
   
      this.findInfoCategory()
   }

//componentDidUpdate(props){
//      this.findInfoCategory()
//   }

   
   render(props) {  
      console.log(this.props.categories)
      return <Category 
               categories={this.props.categories}
               />
   }
}



const WithUrlCategoryContainer = withRouter(CategoryContainer) 

let MapStateToProps = (state) => {
   return {
      categories: state.categoriesPage.categories
   }
}

let MapDispatchToProps = (dispatch) => {
   return {   }
}
export default connect(MapStateToProps, MapDispatchToProps) (WithUrlCategoryContainer)
