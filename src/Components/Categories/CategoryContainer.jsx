import React from "react"
import Category from "./Category"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {
   getCategoriesTC,
   updateCategoryTC,
   delCategoryTC,
   getRecipeByCategoryTC,
   getFullCategoryInformationTC,
   initFormCategoryAC
} from "../../redux/categoriesReducer"

class CategoryContainer extends React.Component {

  constructor(props) {
     super(props)
     this.state = {category: {}
     }
  }

   findInfoCategory = (props) => {
      const category = this.props.categories.filter(c => {
         return c._id === this.props.match.params.idCat
      })
      this.setState({category: category[0]})
   }

async componentDidMount(props){
   await this.props.getCategoriesTC()
      this.findInfoCategory()
      this.props.getFullCategoryInformationTC(this.props.match.params.idCat)
   }

   // componentDidUpdate(prevProps, prevState, snapshot){
   //    if (this.props.initFormCategory.title && this.props.initFormCategory.title !== this.state.category.title)
   //
   //    this.findInfoCategory()
   //    console.log("initFormCategory:", this.props.initFormCategory.title)
   //    console.log("this.state:", this.state.category.title)
   // }

   render(props) {
      return <Category
               id={this.state.category._id}
               title={this.state.category.title}
               parentId={this.state.category.parentId}
               updatedAt={this.state.category.updatedAt}
               delCategoryTC={this.props.delCategoryTC}
               updateCategoryTC={this.props.updateCategoryTC}
               recipeByCategory={this.props.recipeByCategory}
               parentsCategory={this.props.parentsCategory}
               articlesCategory={this.props.articlesCategory}
               initFormCategory={this.props.initFormCategory}
               initFormCategoryAC={this.props.initFormCategoryAC}
               />
   }
}

const WithUrlCategoryContainer = withRouter(CategoryContainer)

let MapStateToProps = (state) => {
   return {
      categories: state.categoriesPage.categories,
      recipeByCategory: state.categoriesPage.recipeByCategory,
      parentsCategory: state.categoriesPage.parentsCategory,
      articlesCategory: state.categoriesPage.articlesCategory,
      initFormCategory: state.categoriesPage.initFormCategory
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
   getCategoriesTC: () => dispatch(getCategoriesTC()),
   delCategoryTC: (categoryId) => dispatch(delCategoryTC(categoryId)),
   updateCategoryTC: (id, title) => dispatch(updateCategoryTC(id, title)),
   getRecipeByCategoryTC: (id) => dispatch(getRecipeByCategoryTC(id)),
   getFullCategoryInformationTC: (id) => dispatch(getFullCategoryInformationTC(id)),
   initFormCategoryAC: (data) => dispatch(initFormCategoryAC(data))
   }
}
export default connect(MapStateToProps, MapDispatchToProps) (WithUrlCategoryContainer)
