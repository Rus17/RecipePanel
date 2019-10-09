import React from "react"
import "./Recipes.css"
import {NavLink} from "react-router-dom"

const Recipes = (props) => {

   let showRecipes = props.recipes.map((e) => {
      return (<div className="recipe" key={e._id}>
         <div>
            <h2>{e.title}</h2>
         </div>
         <p>
            {e.text}
         </p>
         <div>
         {e.updatedAt}
         </div>
      </div>)
   })



   return (<div className="recipes"><h1>Рецепты</h1>

      <div>{showRecipes}
      </div>

      <NavLink to="/addRecipe">Добавить рецепт</NavLink><br />
      </div>)
}

export default Recipes
