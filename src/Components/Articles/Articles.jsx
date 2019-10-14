import React from "react"
import "./Articles.css"
import {NavLink} from "react-router-dom"

const Articles = (props) => {

   let showArticles = props.articles.map((e) => {
      return (
         <NavLink  key={e._id} to={`/article/${e._id}`}>
            <div className="article" >
               <div>
                  <h2>{e.title}</h2>
               </div>
               <p>
                  {e.description}
               </p>
               <div>
               {e.updatedAt}
               </div>
            </div>
         </NavLink>
      )
   })

   return (<div className="articles"><h1>Статьи</h1>

      <NavLink to="/articles/addArticle">Добавить статью</NavLink><br />
      <div>{showArticles}
      </div>


      </div>)
}

export default Articles
