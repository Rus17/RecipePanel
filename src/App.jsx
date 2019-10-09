import React from 'react';
import {Provider} from "react-redux"
//import logo from './logo.svg';
import './App.css';
import RecipesContainer from "./Components/Recipes/RecipesContainer"
import AddRecipeContainer from './Components/Recipes/AddRecipe'
import {BrowserRouter, Route} from "react-router-dom"
import {setRecipeTC} from "./redux/recipesReducer"


function App(props) {

   return (
      <BrowserRouter>
      <Provider store={props.store}>
         <div className="App">
            <header>
               {/*
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
      */}
            </header>

            <div className="container">
               <RecipesContainer recipes={props.store.getState().recipes}/>

               <Route
                     path="/addRecipe"
                     render={() => <AddRecipeContainer setRecipeTC={setRecipeTC}/>
                     }
                  />

            </div>
         </div>
      </Provider>
      </BrowserRouter>
   );
}

export default App;
