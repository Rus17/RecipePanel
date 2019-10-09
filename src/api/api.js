import * as axios from 'axios'

const server = 'https://test-task-server.herokuapp.com/'

export const getRecipesAPI = () => {

   return  axios.get(`${server}api/v1/recipe/all`)
   //      .then(response => {return response.data})
}

export const setRecipeAPI = (title, text, categoryId = '5d89dfd579b92704009af2aa') => {
   console.log("Отправка15")
   // let data2 = {title, text, categoryId}
   let data = JSON.stringify({title, text, categoryId})
   return axios.post(`${server}api/v1/recipe/create`, data, {
      headers: { 'content-type': 'application/json' }
   })
}


// export const setRecipeAPI = (title, text, categoryId) => {
//    let data2 = {title, text, categoryId}
//    let data = JSON.stringify(data2)
//    let url = 'https://test-task-server.herokuapp.com/api/v1/recipe/create'
//    const options = {
//      method: 'POST',
//      headers: { 'content-type': 'application/json' },
//      data: data,
//      url
//    }
//    axios(options)
// }
