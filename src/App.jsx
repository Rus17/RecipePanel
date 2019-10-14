import React from 'react';
import {Provider} from "react-redux"
import {connect} from "react-redux"
import store from "./redux/reduxStore.js"
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import MenuCont from "./Components/Menu/MenuCont"
import CategoriesContainer from "./Components/Categories/CategoriesContainer"
import AddCategoriesContainer from "./Components/Categories/AddCategoreisContainer"
import CategoryContainer from "./Components/Categories/CategoryContainer"
import RecipesContainer from "./Components/Recipes/RecipesContainer"
import AddRecipeContainer from './Components/Recipes/AddRecipeContainer'
import RecipeContainer from "./Components/Recipes/RecipeContainer"
import {getCategoriesTC} from "./redux/categoriesReducer"

import ArticlesContainer from "./Components/Articles/ArticlesContainer"
import AddArticleContainer from './Components/Articles/AddArticleContainer'
import ArticleContainer from "./Components/Articles/ArticleContainer"

function App(props) {
   return (

         <div className="App">
            <MenuCont />
            <div>

               <Route
                  exact path="/"
                  render={() => <CategoriesContainer/>
                  }
               />

               <Route
                  path="/categories/addCateg"
                  render={() => <AddCategoriesContainer />
                  }
               />

               <Route
                  path="/category/:idCat"
                  render={() => <CategoryContainer />
                  }
               />

               <Route
                  path="/categories"
                  render={() => <CategoriesContainer/>
                  }
               />

               <Route
                  path="/recipes/addRecipe"
                  render={() => <AddRecipeContainer />
                  }
               />

               <Route
                  path="/recipes"
                  render={() => <RecipesContainer />
                  }
               />

               <Route
                  path="/recipe/:recipeId"
                  render={() => <RecipeContainer />
                  }
               />

               <Route
                  path="/articles/addArticle"
                  render={() => <AddArticleContainer />
                  }
               />

               <Route
                  path="/articles"
                  render={() => <ArticlesContainer />
                  }
               />

               <Route
                  path="/article/:articleId"
                  render={() => <ArticleContainer />
                  }
               />
            </div>
         </div>

   );
}


class AppContainer extends React.Component{

   componentDidMount(props){
      this.props.getCategoriesTC()
   }

   render(){
      return <App />
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getCategoriesTC: () => dispatch(getCategoriesTC())
   }
}

const AppConnect = withRouter (connect(null, MapDispatchToProps)(AppContainer))

const AdminPanel = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <AppConnect />
         </Provider>
      </BrowserRouter>
   )
}

export default AdminPanel
