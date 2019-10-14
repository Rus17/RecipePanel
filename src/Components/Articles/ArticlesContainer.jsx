import React from "react"
import {connect} from "react-redux"
import Articles from "./Articles"
import {getArticlesTC} from "./../../redux/articlesReducer"


class ArticlesContainer extends React.Component {

   componentDidMount(props){
      this.props.getArticlesTC()
   }

   render (){
      return <Articles articles={this.props.articlesPage.articles} />
   }
}

let MapStateToProps = (state) => {
   return {
      articlesPage: state.articlesPage
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getArticlesTC: () => {dispatch(getArticlesTC())}
   }
}
export default connect(MapStateToProps, MapDispatchToProps) (ArticlesContainer)
