import {getArticlesAPI, setArticleAPI} from './../api/api'

const GET_ARTICLES = 'GET_ARTICLES'

let initialState = {
   articles: []
};

const articlesReducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_ARTICLES:
         return {
            ...state,
            articles: action.getArticles
         }

      default:
         return state;
   }
}

// ------------------------- Action Creators -------------------------
// ------------------------- Get categories -------------------------
const getArticlesAC = (getArticles) => ({
   type: GET_ARTICLES,
   getArticles
})


// ------------------------- Thunk Creators  -------------------------
export const getArticlesTC = () =>{
   return (dispatch) => {
      getArticlesAPI()
      .then((response) => {dispatch(getArticlesAC(response.data))})
   }
}

export const setArticleTC = (title, description, text, categoryId) => {
   return (dispatch) => {
      setArticleAPI(title, description, text, categoryId)
      .then(() => {dispatch(getArticlesTC())
      })
   }
}

export default articlesReducer;
