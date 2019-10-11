import React from "react"
import "./Recipes.css"
import {NavLink} from "react-router-dom"
import Recipe from "./Recipe"

const Recipes = (props) => {

   let showRecipes = props.recipes.map((e) => {
      return (
         <NavLink  key={e._id} to={`/recipe/${e._id}`}>
            <div className="recipe" >
               <div>
                  <h2>{e.title}</h2>
               </div>
               <p>
                  {e.text}
               </p>
               <div>
               {e.updatedAt}
               </div>
            </div>
         </NavLink>
      )
   })

   return (<div className="recipes"><h1>Рецепты</h1>

      <NavLink to="/recipes/addRecipe">Добавить рецепт</NavLink><br />
      <div>{showRecipes}
      </div>


      </div>)
}

export default Recipes
