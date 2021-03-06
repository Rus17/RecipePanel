import {
   getRecipeAPI,
   updateRecipeAPI,
   delRecipeAPI,
   getCategoryListAPI
} from './../api/api'
import {getRecipesTC} from "./recipesReducer"

const GET_RECIPE = 'GET_RECIPE'
const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
const GET_DEFAULT_VALUE = "GET_DEFAULT_VALUE"

let initialState = {
   recipe: [],
   categoryList: [],
   initFormRecipe: {}
   
};

const recipeReducer = (state = initialState, action) => {
   
   switch(action.type) {
      case GET_RECIPE:
         return {
            ...state,
            recipe: action.getRecipe
         }

         case GET_CATEGORY_LIST:
            return {
               ...state,
               categoryList: action.categoryList
            }
         
         case GET_DEFAULT_VALUE:
            return {               
               ...state,
               initFormRecipe: action.data
            }  
      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------

export const loadAC = data => {
   return ({ type: GET_DEFAULT_VALUE, data })
}
// ------------------------- Get recipe -------------------------
const getRecipeAC = (getRecipe) => ({
   type: GET_RECIPE,
   getRecipe
})

// ------------------------- Get Category List -------------------------

const getCategoryListAC = (categoryList) => ({
   type: GET_CATEGORY_LIST,
   categoryList
})



// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get recipe -------------------------
export const getRecipeTC = (id) =>{
   return (dispatch) => {
      getRecipeAPI(id)
      .then((response) => {
         dispatch(getRecipeAC(response.data))
      })
   }
}

// ------------------------- Update recipe -------------------------

export const updateRecipeTC = (obj) =>{
   return (dispatch) => {
      updateRecipeAPI(obj)
      .then((response) => {
         dispatch(getRecipeTC(response.data._id))
      })
   }
}

// ------------------------- Delete recipe -------------------------

export const delResipeTC = (id) =>{
   return (dispatch) => {
      delRecipeAPI(id)
      .then(() => {
         dispatch(getRecipesTC())
      })
   }
}

// ------------------------- Get Category List -------------------------
export const getCategoryListTC = (id) =>{
   return (dispatch) => {
      getCategoryListAPI(id)
      .then((response) => {
         dispatch(getCategoryListAC(response.data))
      })
   }
}




export default recipeReducer;
