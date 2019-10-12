import React from 'react';
import {Provider} from "react-redux"
import './App.css';
import RecipesContainer from "./Components/Recipes/RecipesContainer"
import AddRecipeContainer from './Components/Recipes/AddRecipeContainer'
import {BrowserRouter, Route} from "react-router-dom"
import MenuCont from "./Components/Menu/MenuCont"
import CategoriesContainer from "./Components/Categories/CategoriesContainer"
import AddCategoriesContainer from "./Components/Categories/AddCategoreisContainer"
import CategoryContainer from "./Components/Categories/CategoryContainer"
import RecipeContainer from "./Components/Recipes/RecipeContainer"

function App(props) {
   return (
      <BrowserRouter>
      <Provider store={props.store}>
         <div className="App">
            <MenuCont />
            <div className="container">

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
                  exact path="/"
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





            </div>
         </div>
      </Provider>
      </BrowserRouter>
   );
}

export default App;
