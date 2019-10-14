(this.webpackJsonprecipe_panel=this.webpackJsonprecipe_panel||[]).push([[0],{116:function(e,t,n){e.exports=n(244)},121:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(54),i=n.n(c),o=(n(121),n(13)),l=n(14),u=n(16),s=n(15),p=n(17),m=n(6),d=n(8),f=n(113),g=n(247),E=n(25),y=n(9),b="https://test-task-server.herokuapp.com/";function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={recipes:[]},C=function(){return function(e){y.get("".concat(b,"api/v1/recipe/all")).then((function(t){e({type:"GET_RECIPES",getRecipes:t.data})}))}},j=function(e,t,n){return function(r){(function(e,t,n){var r=JSON.stringify({title:e,text:t,categoryId:n});return y.post("".concat(b,"api/v1/recipe/create"),r,{headers:{"content-type":"application/json"}})})(e,t,n).then((function(){r(C())}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":return v({},e,{recipes:t.getRecipes});default:return e}};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={recipe:[],categoryList:[]},S=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/recipe/item/").concat(e))})(e).then((function(e){t({type:"GET_RECIPE",getRecipe:e.data})}))}},I=function(e){return function(t){(function(e){var t=JSON.stringify(e);return y.put("".concat(b,"api/v1/recipe/update"),t,{headers:{"content-type":"application/json"}})})(e).then((function(e){t(S(e.data._id))}))}},x=function(e){return function(t){(function(e){return y.delete("".concat(b,"api/v1/recipe/").concat(e),{headers:{"content-type":"application/json"}})})(e).then((function(){t(C())}))}},A=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/recipe/categoryList/").concat(e))})(e).then((function(e){t({type:"GET_CATEGORY_LIST",categoryList:e.data})}))}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPE":return _({},e,{recipe:t.getRecipe});case"GET_CATEGORY_LIST":return _({},e,{categoryList:t.categoryList});default:return e}};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={articles:[]},D=function(){return function(e){y.get("".concat(b,"api/v1/article/all")).then((function(t){e({type:"GET_ARTICLES",getArticles:t.data})}))}},G=function(e,t,n,r){return function(a){(function(e,t,n,r){var a=JSON.stringify({title:e,description:t,text:n,categoryId:r});return y.post("".concat(b,"api/v1/article/create"),a,{headers:{"content-type":"application/json"}})})(e,t,n,r).then((function(){a(D())}))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES":return L({},e,{articles:t.getArticles});default:return e}};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={article:[],categoryList:[]},F=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/article/item/").concat(e))})(e).then((function(e){t({type:"GET_ARTICLE",getArticle:e.data})}))}},U=function(e){return function(t){(function(e){var t=JSON.stringify(e);return y.put("".concat(b,"api/v1/article/update"),t,{headers:{"content-type":"application/json"}})})(e).then((function(e){t(F(e.data._id))}))}},H=function(e){return function(t){(function(e){return y.delete("".concat(b,"api/v1/article/").concat(e),{headers:{"content-type":"application/json"}})})(e).then((function(){t(D())}))}},q=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/article/categoryList/").concat(e))})(e).then((function(e){t({type:"GET_CATEGORY_LIST",categoryList:e.data})}))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE":return J({},e,{article:t.getArticle});case"GET_CATEGORY_LIST":return J({},e,{categoryList:t.categoryList});default:return e}},K=n(38),Q=n.n(K),V=n(55);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={categories:[],recipeByCategory:[],parentsCategory:[],articlesCategory:[]},$=function(){return function(){var e=Object(V.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("".concat(b,"api/v1/category/all"));case 2:n=e.sent,t({type:"GET_CATEGORIES",getCategories:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(e,t){return function(n){(function(e,t){var n=JSON.stringify({title:e,parentId:t});return y.post("".concat(b,"api/v1/category/create"),n,{headers:{"content-type":"application/json"}})})(e,t).then((function(e){n($())}))}},te=function(e){return function(t){(function(e){return y.delete("".concat(b,"api/v1/category/").concat(e))})(e).then((function(e){t($())}))}},ne=function(e,t,n){var r=JSON.stringify({_id:e,title:t,parentId:null});return function(e){(function(e){return y.put("".concat(b,"api/v1/category/update"),e,{headers:{"content-type":"application/json"}})})(r).then((function(t){e($())}))}},re=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/recipe/byCategory/").concat(e))})(e).then((function(e){t({type:"RECIPE_BY_CATEGORY",recipeByCategory:e.data})}))}},ae=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/category/categoryList/").concat(e))})(e).then((function(e){t({type:"PARENTS_CATEGORY",parentsCategory:e.data})}))}},ce=function(e){return function(t){(function(e){return y.get("".concat(b,"api/v1/article/byCategory/").concat(e))})(e).then((function(e){t({type:"ARTICLES_BY_CATEGORY",articlesCategory:e.data})}))}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return X({},e,{categories:t.getCategories});case"RECIPE_BY_CATEGORY":return X({},e,{recipeByCategory:t.recipeByCategory});case"PARENTS_CATEGORY":return X({},e,{parentsCategory:t.parentsCategory});case"ARTICLES_BY_CATEGORY":return X({},e,{articlesCategory:t.articlesCategory});default:return e}},oe=Object(d.c)({recipesPage:T,recipePage:k,articlesPage:B,articlePage:z,categoriesPage:ie,form:g.a}),le=Object(d.d)(oe,Object(d.a)(f.a));window.store=le;var ue=le,se=(n(203),n(30)),pe=n(4),me=(n(204),function(){return a.a.createElement("div",{className:"menu"},a.a.createElement(pe.b,{to:"/categories",className:"menuItem"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),a.a.createElement(pe.b,{to:"/recipes",className:"menuItem"},"\u0420\u0435\u0446\u0435\u043f\u0442\u044b"),a.a.createElement(pe.b,{to:"/articles",className:"menuItem"},"\u0421\u0442\u0430\u0442\u044c\u0438"))}),de=(n(41),function(e){var t=e.categories.map((function(e){return a.a.createElement("div",{key:e._id,className:"container"},a.a.createElement(pe.b,{to:"/category/".concat(e._id)},a.a.createElement("span",{key:e._id},e.title," ")))}));return a.a.createElement("div",{className:"categories"},a.a.createElement("h2",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432 \u0438 \u0441\u0442\u0430\u0442\u0435\u0439"),a.a.createElement(pe.b,{to:"/categories/addCateg"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,t))}),fe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){this.props.getCategoriesTC()}},{key:"render",value:function(e){var t=this;return a.a.createElement(de,{categories:this.props.categoriesPage.categories,delCategoryTC:function(e){return t.props.delCategoryTC(e)}})}}]),t}(a.a.Component),ge=Object(m.b)((function(e){return{categoriesPage:e.categoriesPage}}),(function(e){return{getCategoriesTC:function(){e($())},delCategoryTC:function(t){e(te(t))}}}))(fe),Ee=n(10),ye=n(246),be=n(245),he=n(58),ve=n(45),Oe=n.n(ve),Ce=function(e){var t=e.input,n=e.meta,r=Object(he.a)(e,["input","meta"]);return a.a.createElement("div",{className:Oe.a.formControl+" "+(n.touched&&n.error?Oe.a.error:" ")},a.a.createElement("textarea",Object.assign({},t,r)),n.touched&&n.error&&a.a.createElement("span",null,n.error))},je=function(e){var t=e.input,n=e.meta,r=Object(he.a)(e,["input","meta"]);return a.a.createElement("div",{className:Oe.a.formControl+" "+(n.touched&&n.error?Oe.a.error:" ")},a.a.createElement("input",Object.assign({},t,r)),n.touched&&n.error&&a.a.createElement("span",null,n.error))},Te=function(e){var t=e.input,n=(e.meta,Object(he.a)(e,["input","meta"]));return a.a.createElement("div",null,a.a.createElement("select",Object.assign({},t,n)))},Pe=Object(be.a)({form:"addCategories"})((function(e){var t=e.categoriesPage.categories.map((function(e){return a.a.createElement("option",{key:e._id,value:e._id},e.title)}));return a.a.createElement("form",{onSubmit:e.handleSubmit,className:"categories"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("b",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438")),a.a.createElement(ye.a,{name:"title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",component:je}),a.a.createElement("div",null,a.a.createElement("b",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e")),a.a.createElement(ye.a,{name:"parentId",component:Te},t)),a.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),_e=function(e){var t=Object(r.useState)(!1),n=Object(Ee.a)(t,2),c=n[0],i=n[1];return c?a.a.createElement(se.a,{to:"/categories"}):a.a.createElement(Pe,{onSubmit:function(t){e.addCategoryTC(t.title,t.parentId),i(!0)},categoriesPage:e.categoriesPage})},Re=Object(m.b)((function(e){return{categoriesPage:e.categoriesPage}}),(function(e){return{addCategoryTC:function(t,n){e(ee(t,n))}}}))((function(e){return a.a.createElement(_e,{addCategoryTC:e.addCategoryTC,categoriesPage:e.categoriesPage})})),Se=Object(be.a)({form:"editCategories"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit,className:"categories"},a.a.createElement("div",null,a.a.createElement("b",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438")),a.a.createElement(ye.a,{name:"title",type:"text",component:"TextArea"},e.title),a.a.createElement("br",null),a.a.createElement("button",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))})),Ie=Object(m.b)(null,(function(e){return{updateCategoryTC:function(t,n){e(ne(t,n))}}}))((function(e){var t=Object(r.useState)(!1),n=Object(Ee.a)(t,2),c=n[0],i=n[1];return c?a.a.createElement(se.a,{to:"/categories"}):a.a.createElement(Se,{onSubmit:function(t){e.updateCategoryTC(e.id,t.title),i(!0)},id:e.id,title:e.title})})),xe=function(e){var t=e.parentsCategory.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/category/".concat(e._id)}," / ",e.title)})),n=e.recipeByCategory.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/recipe/".concat(e._id)}," / ",e.title)})),c=e.articlesCategory.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/article/".concat(e._id)}," / ",e.title)})),i=Object(r.useState)(!0),o=Object(Ee.a)(i,2),l=o[0],u=o[1],s=Object(r.useState)(!1),p=Object(Ee.a)(s,2),m=p[0],d=p[1];return l?m?a.a.createElement(Ie,{id:e.id,title:e.title}):a.a.createElement("div",{className:"category"},a.a.createElement("div",null,a.a.createElement("b",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:")),a.a.createElement("div",null,e.title),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:")),a.a.createElement("div",null,t),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f:")),a.a.createElement("div",null,e.updatedAt),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0420\u0435\u0446\u0435\u043f\u0442\u044b \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:")),a.a.createElement("div",null,n),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0421\u0442\u0430\u0442\u044c\u0438 \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438:")),a.a.createElement("div",null,c),a.a.createElement("button",{onClick:function(){return e.id,e.title,void d(!0)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement("button",{onClick:function(){return t=e.id,e.delCategoryTC(t),void u(!1);var t}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):a.a.createElement(se.a,{to:"/categories"})},Ae=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).findInfoCategory=function(e){var t=n.props.categories.filter((function(e){return e._id===n.props.match.params.idCat}));n.setState({category:t[0]})},n.state={category:{}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(V.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getCategoriesTC();case 2:this.findInfoCategory(),this.props.getFullCategoryInformationTC(this.props.match.params.idCat);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(e){return a.a.createElement(xe,{id:this.state.category._id,title:this.state.category.title,parentId:this.state.category.parentId,updatedAt:this.state.category.updatedAt,delCategoryTC:this.props.delCategoryTC,updateCategoryTC:this.props.updateCategoryTC,recipeByCategory:this.props.recipeByCategory,parentsCategory:this.props.parentsCategory,articlesCategory:this.props.articlesCategory})}}]),t}(a.a.Component),ke=Object(se.f)(Ae),we=Object(m.b)((function(e){return{categories:e.categoriesPage.categories,recipeByCategory:e.categoriesPage.recipeByCategory,parentsCategory:e.categoriesPage.parentsCategory,articlesCategory:e.categoriesPage.articlesCategory}}),(function(e){return{getCategoriesTC:function(){return e($())},delCategoryTC:function(t){return e(te(t))},updateCategoryTC:function(t,n){return e(ne(t,n))},getRecipeByCategoryTC:function(t){return e(re(t))},getFullCategoryInformationTC:function(t){return e((n=t,function(e){e(re(n)),e(ae(n)),e(ce(n))}));var n}}}))(ke),Le=(n(76),function(e){var t=e.recipes.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/recipe/".concat(e._id)},a.a.createElement("div",{className:"recipe"},a.a.createElement("div",null,a.a.createElement("h2",null,e.title)),a.a.createElement("p",null,e.text),a.a.createElement("div",null,e.updatedAt)))}));return a.a.createElement("div",{className:"recipes"},a.a.createElement("h1",null,"\u0420\u0435\u0446\u0435\u043f\u0442\u044b"),a.a.createElement(pe.b,{to:"/recipes/addRecipe"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"),a.a.createElement("br",null),a.a.createElement("div",null,t))}),Ne=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){this.props.getRecipesTC()}},{key:"render",value:function(){return a.a.createElement(Le,{recipes:this.props.recipesPage.recipes})}}]),t}(a.a.Component),De=Object(m.b)((function(e){return{recipesPage:e.recipesPage}}),(function(e){return{getRecipesTC:function(){e(C())}}}))(Ne),Ge=Object(be.a)({form:"addRecipe"})((function(e){var t=e.categoriesPage.categories.map((function(e){return a.a.createElement("option",{key:e._id,value:e._id},e.title)}));return a.a.createElement("form",{onSubmit:e.handleSubmit,className:"recipes"},a.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u0430",a.a.createElement(ye.a,{name:"title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u0430",component:je})),a.a.createElement("div",null,"\u0422\u0435\u043a\u0441\u0442 \u0440\u0435\u0446\u0435\u043f\u0442\u0430",a.a.createElement(ye.a,{name:"text",type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0440\u0435\u0446\u0435\u043f\u0442\u0430",component:Ce})),a.a.createElement("div",null,a.a.createElement(ye.a,{name:"categoryId",component:"Select"},a.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),t)),a.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),Be=function(e){var t=Object(r.useState)(!1),n=Object(Ee.a)(t,2),c=n[0],i=n[1];return c?a.a.createElement(se.a,{to:"/recipes"}):a.a.createElement(Ge,{onSubmit:function(t){e.setRecipeTC(t.title,t.text,t.categoryId),i(!0)},categoriesPage:e.categoriesPage})},Ye=Object(m.b)((function(e){return{categoriesPage:e.categoriesPage}}),(function(e){return{setRecipeTC:function(t,n,r){e(j(t,n,r))}}}))((function(e){return a.a.createElement(Be,{setRecipeTC:e.setRecipeTC,categoriesPage:e.categoriesPage})})),Je=Object(be.a)({form:"editRecipe"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit,className:"recipe"},a.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u0430"),a.a.createElement(ye.a,{name:"title",type:"text",component:"TextArea"},e.title),a.a.createElement("div",null,"\u0422\u0435\u043a\u0441\u0442 \u0440\u0435\u0446\u0435\u043f\u0442\u0430"),a.a.createElement(ye.a,{name:"text",type:"text",component:"TextArea"},e.text),a.a.createElement("br",null),a.a.createElement("button",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))})),Me=function(e){var t=e.categoryList.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/category/".concat(e._id)}," / ",e.title)})),n=Object(r.useState)(!1),c=Object(Ee.a)(n,2),i=c[0],o=c[1],l=Object(r.useState)(!0),u=Object(Ee.a)(l,2),s=u[0],p=u[1];return s?a.a.createElement(a.a.Fragment,null,i?a.a.createElement(Je,{id:e.id,title:e.title,text:e.text,date:e.date,onSubmit:function(t){var n={_id:e.id,title:t.title||e.title,text:t.text||e.text,categoryId:e.categoryId};e.updateRecipeTC(n),o(!1)}}):a.a.createElement("div",{className:"recipe"},a.a.createElement("h2",null,e.title),a.a.createElement("div",null,e.text),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0440\u0435\u0446\u0435\u043f\u0442")),a.a.createElement("div",null,t),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")),a.a.createElement("div",null,e.date),a.a.createElement("button",{onClick:function(){o(!0)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement("button",{onClick:function(){e.delResipeTC(e.id),p(!1)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))):a.a.createElement(se.a,{to:"/recipes"})},Fe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"refreshRecipe",value:function(){this.props.getRecipeTC(this.props.match.params.recipeId),this.props.getCategoryListTC(this.props.match.params.recipeId)}},{key:"componentDidMount",value:function(){this.refreshRecipe()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.categoryList||this.refreshRecipe()}},{key:"render",value:function(){var e=this;return a.a.createElement(Me,{id:this.props.match.params.recipeId,title:this.props.title,text:this.props.text,categoryId:this.props.categoryId,date:this.props.date,updateRecipeTC:function(t){return e.props.updateRecipeTC(t)},delResipeTC:function(t){return e.props.delResipeTC(t)},categoryList:this.props.categoryList})}}]),t}(a.a.Component),Ue=Object(se.f)(Fe),He=Object(m.b)((function(e){return{title:e.recipePage.recipe.title,text:e.recipePage.recipe.text,categoryId:e.recipePage.recipe.categoryId,date:e.recipePage.recipe.updatedAt,categoryList:e.recipePage.categoryList}}),(function(e){return{getRecipeTC:function(t){e(S(t))},updateRecipeTC:function(t){e(I(t))},delResipeTC:function(t){e(x(t))},getCategoryListTC:function(t){e(A(t))}}}))(Ue),qe=(n(77),function(e){var t=e.articles.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/article/".concat(e._id)},a.a.createElement("div",{className:"article"},a.a.createElement("div",null,a.a.createElement("h2",null,e.title)),a.a.createElement("p",null,e.description),a.a.createElement("div",null,e.updatedAt)))}));return a.a.createElement("div",{className:"articles"},a.a.createElement("h1",null,"\u0421\u0442\u0430\u0442\u044c\u0438"),a.a.createElement(pe.b,{to:"/articles/addArticle"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"),a.a.createElement("br",null),a.a.createElement("div",null,t))}),ze=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){this.props.getArticlesTC()}},{key:"render",value:function(){return a.a.createElement(qe,{articles:this.props.articlesPage.articles})}}]),t}(a.a.Component),Ke=Object(m.b)((function(e){return{articlesPage:e.articlesPage}}),(function(e){return{getArticlesTC:function(){e(D())}}}))(ze),Qe=Object(be.a)({form:"addArticle"})((function(e){var t=e.categoriesPage.categories.map((function(e){return a.a.createElement("option",{key:e._id,value:e._id},e.title)}));return a.a.createElement("form",{onSubmit:e.handleSubmit,className:"articles"},a.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",a.a.createElement(ye.a,{name:"title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",component:je})),a.a.createElement("div",null,"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",a.a.createElement(ye.a,{name:"description",type:"text",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",component:Ce})),a.a.createElement("div",null,"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u044c\u0438",a.a.createElement(ye.a,{name:"text",type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u044c\u0438",component:Ce})),a.a.createElement("div",null,a.a.createElement(ye.a,{name:"categoryId",component:Te},a.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),t)),a.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),Ve=function(e){var t=Object(r.useState)(!1),n=Object(Ee.a)(t,2),c=n[0],i=n[1];return c?a.a.createElement(se.a,{to:"/articles"}):a.a.createElement(Qe,{onSubmit:function(t){e.setArticleTC(t.title,t.description,t.text,t.categoryId),i(!0)},categoriesPage:e.categoriesPage})},We=Object(m.b)((function(e){return{categoriesPage:e.categoriesPage}}),(function(e){return{setArticleTC:function(t,n,r,a){e(G(t,n,r,a))}}}))((function(e){return a.a.createElement(Ve,{setArticleTC:e.setArticleTC,categoriesPage:e.categoriesPage})})),Xe=Object(be.a)({form:"editArticle"})((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:e.handleSubmit,className:"article"},a.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),a.a.createElement(ye.a,{name:"title",type:"text",component:"TextArea"},e.title),a.a.createElement("div",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),a.a.createElement(ye.a,{name:"description",type:"text",component:"TextArea"},e.description),a.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u044c\u044f"),a.a.createElement(ye.a,{name:"text",type:"text",component:"TextArea"},e.text),a.a.createElement("br",null),a.a.createElement("button",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")))})),Ze=function(e){var t=e.categoryList.map((function(e){return a.a.createElement(pe.b,{key:e._id,to:"/category/".concat(e._id)}," / ",e.title)})),n=Object(r.useState)(!1),c=Object(Ee.a)(n,2),i=c[0],o=c[1],l=Object(r.useState)(!0),u=Object(Ee.a)(l,2),s=u[0],p=u[1];return s?a.a.createElement(a.a.Fragment,null,i?a.a.createElement(Xe,{id:e.id,title:e.title,description:e.description,text:e.text,date:e.date,onSubmit:function(t){var n={_id:e.id,title:t.title||e.title,description:t.description||e.description,text:t.text||e.text,categoryId:e.categoryId};e.updateArticleTC(n),o(!1)}}):a.a.createElement("div",{className:"article"},a.a.createElement("h2",null,e.title),a.a.createElement("div",null,a.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438")),a.a.createElement("div",null,e.description),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0421\u0442\u0430\u0442\u044c\u044f")),a.a.createElement("div",null,e.text),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0440\u0435\u0446\u0435\u043f\u0442")),a.a.createElement("div",null,t),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("b",null,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")),a.a.createElement("div",null,e.date),a.a.createElement("button",{onClick:function(){o(!0)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement("button",{onClick:function(){e.delResipeTC(e.id),p(!1)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))):a.a.createElement(se.a,{to:"/articles"})},$e=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"refreshArticle",value:function(){this.props.getArticleTC(this.props.match.params.articleId),this.props.getCategoryListTC(this.props.match.params.articleId)}},{key:"componentDidMount",value:function(){this.refreshArticle()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.categoryList||this.refreshArticle()}},{key:"render",value:function(){var e=this;return a.a.createElement(Ze,{id:this.props.match.params.articleId,title:this.props.title,description:this.props.description,text:this.props.text,categoryId:this.props.categoryId,date:this.props.date,updateArticleTC:function(t){return e.props.updateArticleTC(t)},delResipeTC:function(t){return e.props.delResipeTC(t)},categoryList:this.props.categoryList})}}]),t}(a.a.Component),et=Object(se.f)($e),tt=Object(m.b)((function(e){return{title:e.articlePage.article.title,description:e.articlePage.article.description,text:e.articlePage.article.text,categoryId:e.articlePage.article.categoryId,date:e.articlePage.article.updatedAt,categoryList:e.articlePage.categoryList}}),(function(e){return{getArticleTC:function(t){e(F(t))},updateArticleTC:function(t){e(U(t))},delResipeTC:function(t){e(H(t))},getCategoryListTC:function(t){e(q(t))}}}))(et);function nt(e){return a.a.createElement("div",{className:"App"},a.a.createElement(me,null),a.a.createElement("div",null,a.a.createElement(se.b,{exact:!0,path:"/",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(se.b,{path:"/categories/addCateg",render:function(){return a.a.createElement(Re,null)}}),a.a.createElement(se.b,{path:"/category/:idCat",render:function(){return a.a.createElement(we,null)}}),a.a.createElement(se.b,{path:"/categories",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(se.b,{path:"/recipes/addRecipe",render:function(){return a.a.createElement(Ye,null)}}),a.a.createElement(se.b,{path:"/recipes",render:function(){return a.a.createElement(De,null)}}),a.a.createElement(se.b,{path:"/recipe/:recipeId",render:function(){return a.a.createElement(He,null)}}),a.a.createElement(se.b,{path:"/articles/addArticle",render:function(){return a.a.createElement(We,null)}}),a.a.createElement(se.b,{path:"/articles",render:function(){return a.a.createElement(Ke,null)}}),a.a.createElement(se.b,{path:"/article/:articleId",render:function(){return a.a.createElement(tt,null)}})))}var rt=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){this.props.getCategoriesTC()}},{key:"render",value:function(){return a.a.createElement(nt,null)}}]),t}(a.a.Component),at=Object(se.f)(Object(m.b)(null,(function(e){return{getCategoriesTC:function(){return e($())}}}))(rt)),ct=function(){return a.a.createElement(pe.a,null,a.a.createElement(m.a,{store:ue},a.a.createElement(at,null)))};i.a.render(a.a.createElement(ct,null),document.getElementById("root"))},41:function(e,t,n){},45:function(e,t,n){e.exports={formControl:"formsControl_formControl__1vRR6",error:"formsControl_error__3H6Ld",formError:"formsControl_formError__1Ivxg"}},76:function(e,t,n){},77:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.19578802.chunk.js.map