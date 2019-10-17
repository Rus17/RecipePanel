import {
   getArticleAPI,
   updateArticleAPI,
   delArticleAPI,
   getCategoryArticleListAPI
} from './../api/api'
import {getArticlesTC} from "./articlesReducer"

const GET_ARTICLE = 'GET_ARTICLE'
const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
const INIT_ARICLE_VALUE = "INIT_ARICLE_VALUE"

let initialState = {
   article: [],
   categoryList: [],
   initFormArticle: {}
};

const articleReducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_ARTICLE:
         return {
            ...state,
            article: action.getArticle
         }

         case GET_CATEGORY_LIST:
            return {
               ...state,
               categoryList: action.categoryList
            }

         case INIT_ARICLE_VALUE:
            return {
               ...state,
               initFormArticle: action.data
            }

      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------

export const initFormArticleAC = data => {
   return ({ type: INIT_ARICLE_VALUE, data })
}
// ------------------------- Get article -------------------------
const getArticleAC = (getArticle) => ({
   type: GET_ARTICLE,
   getArticle
})

// ------------------------- Get Category List -------------------------

const getCategoryListAC = (categoryList) => ({
   type: GET_CATEGORY_LIST,
   categoryList
})



// ------------------------- Thunk Creators  -------------------------
// ------------------------- Get article -------------------------
export const getArticleTC = (id) =>{
   return (dispatch) => {
      getArticleAPI(id)
      .then((response) => {
         dispatch(getArticleAC(response.data))
      })
   }
}

// ------------------------- Update article -------------------------

export const updateArticleTC = (obj) =>{
   return (dispatch) => {
      updateArticleAPI(obj)
      .then((response) => {
         dispatch(getArticleTC(response.data._id))
      })
   }
}

// ------------------------- Delete article -------------------------

export const delResipeTC = (id) =>{
   return (dispatch) => {
      delArticleAPI(id)
      .then(() => {
         dispatch(getArticlesTC())
      })
   }
}

// ------------------------- Get Category List -------------------------
export const getCategoryListTC = (id) =>{
   return (dispatch) => {
      getCategoryArticleListAPI(id)
      .then((response) => {
         dispatch(getCategoryListAC(response.data))
      })
   }
}




export default articleReducer;
