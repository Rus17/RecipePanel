import {getRecipesAPI, setRecipeAPI} from './../api/api'

const GET_RECIPES = 'GET_RECIPES'

let initialState = {
   recipes: []
};

const recipesReducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_RECIPES:
         return {
            ...state,
            recipes: action.getRecipes
         }

      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
export const getRecipesAC = (getRecipes) => ({
   type: GET_RECIPES,
   getRecipes
})

// ------------------------- Thunk Creators  -------------------------
export const getRecipesTC = () =>{
   return (dispatch) => {
      getRecipesAPI()
      .then((response) => {dispatch(getRecipesAC(response.data))})
   }
}

export const setRecipeTC = (title, text, categoryId) => {
   console.log("Отправка 3", title, text, categoryId)
   // return (dispatch) => {
      console.log("Отправка 4", title, text, categoryId)
      setRecipeAPI(title, text, categoryId)
      .then(() => {
      })
   // }
}

// export const setRecipeTC = (title, text, categoryId) => {
//    return async (dispatch) => {
//       let response = await setRecipeAPI(title, text, categoryId)
//       dispatch(getRecipesTC())
//    }
// }







export default recipesReducer;
