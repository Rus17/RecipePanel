import {getRecipeAPI} from './../api/api'

const GET_RECIPE = 'GET_RECIPE'

let initialState = {
   recipe: []
};

const recipeReducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_RECIPE:
         return {
            ...state,
            recipe: action.getRecipe
         }

      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
// ------------------------- Get recipe -------------------------
const getRecipeAC = (getRecipe) => ({
   type: GET_RECIPE,
   getRecipe
})


// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get recipe -------------------------
export const getRecipeTC = (id) =>{
   return (dispatch) => {
      getRecipeAPI(id)
      .then((response) => {
         console.log(response)
         dispatch(getRecipeAC(response.data))
      })
   }
}



export default recipeReducer;
