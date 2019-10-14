import {
  getCategoriesAPI,
  addCategoryAPI,
  delCategoryAPI,
  updateCategoryAPI,
  getRecipeByCategoryAPI,
  getCategoryParentsAPI,
  getArticleByCategoryAPI
} from "../api/api"


const GET_CATEGORIES = "GET_CATEGORIES"
const PARENTS_CATEGORY = "PARENTS_CATEGORY"
const RECIPE_BY_CATEGORY = "RECIPE_BY_CATEGORY"
const ARTICLES_BY_CATEGORY = "ARTICLES_BY_CATEGORY"

const initialState = {
   categories: [],
   // edit: null,
   recipeByCategory: [],
   parentsCategory: [],
   articlesCategory: []
}

const categoriesReducer = (state = initialState, action) => {

   switch (action.type) {

      case GET_CATEGORIES: return {
         ...state,
         categories: action.getCategories
      }

      case RECIPE_BY_CATEGORY: return {
         ...state,
         recipeByCategory: action.recipeByCategory
      }

      case PARENTS_CATEGORY: return {
         ...state,
         parentsCategory: action.parentsCategory
      }

      case ARTICLES_BY_CATEGORY: return {
         ...state,
         articlesCategory: action.articlesCategory
      }

      default: return state

   }
}

// ------------------------- Action Creators -------------------------
export const getCategoriesAC = (getCategories) => ({
   type: GET_CATEGORIES,
   getCategories
})

// -------------------- Get recipe by category ------------------------
export const getRecipeByCategoryAC = (recipeByCategory) => ({
   type: RECIPE_BY_CATEGORY,
   recipeByCategory
})

// -------------------- Get Parents Category------------------------
export const getCategoryParentsAC = (parentsCategory) => ({
   type: PARENTS_CATEGORY,
   parentsCategory
})

// -------------------- Get Article By Category ---------------------
export const getArticleByCategoryAC = (articlesCategory) => ({
   type: ARTICLES_BY_CATEGORY,
   articlesCategory
})

// ------------------------- Thunk Creators  -------------------------

// ------------------------- Get all categories  -------------------------
// export const getCategoriesTC = () =>{
//    console.log("Ушел")
//    return (dispatch) => {
//       getCategoriesAPI()
//       .then((response) => {console.log("Пришел")
//       dispatch(getCategoriesAC(response.data))})
//    }
// }

export const getCategoriesTC = () =>{
   return async (dispatch) => {
      let response = await getCategoriesAPI()
      dispatch(getCategoriesAC(response.data))
   }
}

// ------------------------- Add category  -------------------------
export const addCategoryTC = (title, parentId) =>{
   return (dispatch) => {
      addCategoryAPI(title, parentId)
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
   return (dispatch) => {
     updateCategoryAPI(data)
     .then((response) => {dispatch(getCategoriesTC())})
   }
}

// -------------------- Get recipe by category ------------------------
export const getRecipeByCategoryTC = (categoryId) =>{
   return (dispatch) => {
      getRecipeByCategoryAPI(categoryId)
      .then((response) => {
      dispatch(getRecipeByCategoryAC(response.data))})
   }
}

// -------------------- Get Category Parents------------------------
export const getCategoryListTC = (categoryId) =>{
   return (dispatch) => {
      getCategoryParentsAPI(categoryId)
      .then((response) => {
      dispatch(getCategoryParentsAC(response.data))})
   }
}

// -------------------- Get Article By Category ---------------------
export const getArticleByCategoryTC = (categoryId) =>{
   return (dispatch) => {
      getArticleByCategoryAPI(categoryId)
      .then((response) => {
      dispatch(getArticleByCategoryAC(response.data))})
   }
}

// -------------------- Get Full Category Information ---------------------

export const getFullCategoryInformationTC = (categoryId) =>{
   return (dispatch) => {
      // getCategoryParentsAPI(categoryId)
      // .then((response) => {dispatch(getCategoryParentsAC(response.data))})
      // getArticleByCategoryAPI(categoryId)
      // .then((response) => {dispatch(getArticleByCategoryAC(response.data))})
      // getRecipeByCategoryAPI(categoryId)
      // .then((response) => {
      // dispatch(getRecipeByCategoryAC(response.data))})
      dispatch(getRecipeByCategoryTC(categoryId))
      dispatch(getCategoryListTC(categoryId))
      dispatch(getArticleByCategoryTC(categoryId))

   }
}







export default categoriesReducer
