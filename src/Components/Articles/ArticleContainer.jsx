import React from "react"
import Article from "./Article"
import {
   getArticleTC,
   updateArticleTC,
   delResipeTC,
   getCategoryListTC,
   initFormArticleAC
} from "./../../redux/articleReducer"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class ArticleContainer extends React.Component {

   refreshArticle(){
      this.props.getArticleTC(this.props.match.params.articleId)
      this.props.getCategoryListTC(this.props.match.params.articleId)
   }

   componentDidMount(){
      this.refreshArticle()

   }

   componentDidUpdate (prevProps, prevState, snapshot){
      if(!this.props.categoryList)
      this.refreshArticle()
   }

   render(){
      return <Article
               id={this.props.match.params.articleId}
               title={this.props.title}
               description={this.props.description}
               text={this.props.text}
               categoryId={this.props.categoryId}
               date={this.props.date}
               updateArticleTC={(obj) => this.props.updateArticleTC(obj)}
               delResipeTC={(id) => this.props.delResipeTC(id)}
               categoryList={this.props.categoryList}               
               initFormArticle={this.props.initFormArticle}
               initFormArticleAC={this.props.initFormArticleAC}
               />
   }
}



let MapStateToProps = (state) => {
   return ({
      title: state.articlePage.article.title,
      description: state.articlePage.article.description,
      text: state.articlePage.article.text,
      categoryId: state.articlePage.article.categoryId,
      date: state.articlePage.article.updatedAt,
      categoryList: state.articlePage.categoryList,
      initFormArticle: state.articlePage.initFormArticle
   })}

let MapDispatchToProps = (dispatch) => {
   return ({
      getArticleTC: (id) => {dispatch(getArticleTC(id))},
      updateArticleTC: (obj) => {dispatch(updateArticleTC(obj))},
      delResipeTC: (id) => {dispatch(delResipeTC(id))},
      getCategoryListTC: (id) => {dispatch(getCategoryListTC(id))},
      initFormArticleAC: (data) => {dispatch(initFormArticleAC(data))}
   })
}

const WithUrlArticle = withRouter(ArticleContainer)

export default connect(MapStateToProps, MapDispatchToProps)(WithUrlArticle)
