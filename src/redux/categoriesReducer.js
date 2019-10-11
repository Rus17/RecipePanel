import {
  getCategoriesAPI,
  setCategoryAPI,
  delCategoryAPI,
  updateCategoryAPI
} from "../api/api"


const GET_CATEGORIES = "GET_CATEGORIES"

const initialState = {
   categories: [],
   edit: null
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

// ------------------------- Get all categories  -------------------------
export const getCategoriesTC = () =>{
   return (dispatch) => {
      getCategoriesAPI()
      .then((response) => {dispatch(getCategoriesAC(response.data))})
   }
}

// ------------------------- Set category  -------------------------
export const setCategoriesTC = (data) =>{
   return (dispatch) => {
      setCategoryAPI(data)
      .then((response) => {dispatch(getCategoriesTC())})
   }
}

// ------------------------- Delete category  -------------------------
export const delCategoryTC = (categoryId) =>{
   return (dispatch) => {
      delCategoryAPI(categoryId)
      .then((response) => {dispatch(getCategoriesTC())})
   }
}

// ------------------------- Update category  -------------------------
export const updateCategoryTC = (_id, title, parentId) => {
  let data = JSON.stringify({_id, title, parentId: null})
  console.log("пришло", data)
   return (dispatch) => {
     console.log("пришло2", data)
     updateCategoryAPI(data)
     .then((response) => {dispatch(getCategoriesTC())})
   }
}








export default categoriesReducer
