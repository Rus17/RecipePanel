import * as axios from 'axios'

const server = 'https://test-task-server.herokuapp.com/'

// ------------- Получить рецепты --------------------
export const getRecipesAPI = () => {
   return  axios.get(`${server}api/v1/recipe/all`)
}

// ------------------------- Get recipe -------------------------
export const getRecipeAPI = (id) => {
   return axios.get(`${server}api/v1/recipe/item/${id}`)
}

// ------------- Добавить рецепт --------------------
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
   console.log(id)
   return axios.delete(`${server}api/v1/recipe/${id}`, {
      headers: { 'content-type': 'application/json' }
   })
}

// -----------------------------------------------------


// ------------------------- Get all categories  -----------------------
export const getCategoriesAPI = () => {
   return  axios.get(`${server}api/v1/category/all`)
}

// ------------------------- Add category  -------------------------
export const setCategoryAPI = (data) => {
   data = JSON.stringify({title: data})
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
