import * as axios from 'axios'

const server = 'https://test-task-server.herokuapp.com/'


// --------------------------RECIPES---------------------------
// --------------------------RECIPES---------------------------

// ------------------------ Get recipes --------------------
export const getRecipesAPI = () => {
   return  axios.get(`${server}api/v1/recipe/all`)
}

// ------------------------- Get recipe -------------------------
export const getRecipeAPI = (id) => {
   return axios.get(`${server}api/v1/recipe/item/${id}`)
}

// ----------------------- Add recipe --------------------
export const setRecipeAPI = (title, text, categoryId) => {
   let data = JSON.stringify({title, text, categoryId})
   return axios.post(`${server}api/v1/recipe/create`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Update recipe  -------------------------
export const updateRecipeAPI = (obj) => {
   let data = JSON.stringify(obj)
   return axios.put(`${server}api/v1/recipe/update`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Delete recipe  -------------------------
export const delRecipeAPI = (id) => {
   return axios.delete(`${server}api/v1/recipe/${id}`, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Get Category List -------------------------
export const getCategoryListAPI = (id) => {
   return axios.get(`${server}api/v1/recipe/categoryList/${id}`)

}


// --------------------------CATEGORIES---------------------------
// --------------------------CATEGORIES---------------------------

// ------------------------- Get all categories  -----------------------
export const getCategoriesAPI = () => {
   return  axios.get(`${server}api/v1/category/all`)
}

// ------------------------- Add category  -------------------------
export const addCategoryAPI = (title, parentId) => {
   let data = JSON.stringify({title, parentId})
   return axios.post(`${server}api/v1/category/create`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Delete category  -------------------------
export const delCategoryAPI = (categoryId) => {
   return axios.delete(`${server}api/v1/category/${categoryId}`)
}

// ------------------------- Update category  -------------------------
export const updateCategoryAPI = (data) => {
   return axios.put(`${server}api/v1/category/update`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// -------------------- Get recipe by category ------------------------
export const getRecipeByCategoryAPI = (categoryId) => {
   return  axios.get(`${server}api/v1/recipe/byCategory/${categoryId}`)
}

// -------------------- Get parents Category ------------------------
export const getCategoryParentsAPI = (categoryId) => {
   return  axios.get(`${server}api/v1/category/categoryList/${categoryId}`)
}

// -------------------- Get articles Category ------------------------
export const getArticleByCategoryAPI = (categoryId) => {
   return  axios.get(`${server}api/v1/article/byCategory/${categoryId}`)
}


// --------------------------ARTICLES---------------------------
// --------------------------ARTICLES---------------------------

// ------------------------ Get articles --------------------
export const getArticlesAPI = () => {
   return  axios.get(`${server}api/v1/article/all`)
}

// ------------------------- Get article -------------------------
export const getArticleAPI = (id) => {
   return axios.get(`${server}api/v1/article/item/${id}`)
}

// ----------------------- Add article --------------------
export const setArticleAPI = (title, description, text, categoryId) => {
   let data = JSON.stringify({title, description, text, categoryId})
   return axios.post(`${server}api/v1/article/create`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Update article  -------------------------
export const updateArticleAPI = (obj) => {
   let data = JSON.stringify(obj)
   return axios.put(`${server}api/v1/article/update`, data, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Delete article  -------------------------
export const delArticleAPI = (id) => {
   return axios.delete(`${server}api/v1/article/${id}`, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Get Category List -------------------------
export const getCategoryArticleListAPI = (id) => {
   return axios.get(`${server}api/v1/article/categoryList/${id}`)
}
