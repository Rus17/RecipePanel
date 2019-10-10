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
// ------------------------- Get categories -------------------------
const getRecipesAC = (getRecipes) => ({
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


// export const setRecipeTC = () => {
//    console.log("Отправка 3")
//    return () => {console.log('Hello world')}}

export const setRecipeTC = (title, text, categoryId) => {
   return (dispatch) => {
      setRecipeAPI(title, text, categoryId)
      .then(() => {dispatch(getRecipesTC())
      })
   }
}


// export const setRecipeTC = (title, text, categoryId) => async (dispatch) => {
//       let response = await setRecipeAPI(title, text, categoryId)
//       dispatch(getRecipesTC())
// }

export default recipesReducer;
