import {getCategoriesAPI, setCategoryAPI} from "../api/api"

const GET_CATEGORIES = "GET_CATEGORIES"

const initialState = {
   categories: []
}

const categoriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CATEGORIES: return {
         ...state,
         categories: action.getCategories
      }

      default: return state

   }
}



// ------------------------- Action Creators -------------------------
export const getCategoriesAC = (getCategories) => ({
   type: GET_CATEGORIES,
   getCategories
})

// ------------------------- Thunk Creators  -------------------------
export const getCategoriesTC = () =>{
   return (dispatch) => {
      getCategoriesAPI()
      .then((response) => {dispatch(getCategoriesAC(response.data))})
   }
}

export const setCategoriesTC = (data) =>{
   return (dispatch) => {
      setCategoryAPI(data)
      .then((response) => {dispatch(getCategoriesTC())})
   }
}







export default categoriesReducer
