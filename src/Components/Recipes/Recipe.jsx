import React from "react"
import "./Recipes.css"

const Recipe = (props) => {
   
   const handlerClick = () => {
      
   }
   
   {(true) ? return <ReduxRecipeForm /> :
   return <div className="recipe">
      <h2>{props.title}</h2>id = {props.id}<br />
      <br />
      <div>{props.text}</div>
      <br />
      <div>{props.categoryId}</div>
      <div>{props.date}</div>
      
      <button>Редактировать</button>
   </div>}
   
}
   
const RecipeForm = () => {
   return ( <div className="recipe">
      <div>Название рецепта</div>     
      <textarea defaultValue={props.title}></textarea>
      <br />
      <div>Текст</div>     
      <textarea defaultValue={props.text}></textarea>
      <br />      
      <div>{props.date}</div>
      
      <button onClick={handlerClick}>Сохранить изменения</button>
   </div>)}
   }


const ReduxRecipeForm = reduxForm ({form: "editRecipe"}) (RecipeForm)

export default Recipe
   
   
   