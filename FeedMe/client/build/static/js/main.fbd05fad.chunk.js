(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(76)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(31),c=n.n(r);n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(45),o=n(10),s=n(11),u=n(13),m=n(12),d=n(4),h=n(14),g=(n(54),n(24)),f=n(77),p=n(81),v=n(38),b=n.n(v),E=(n(55),"barazouri24@gmail.com"),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=function(t){var n=t.w3.U3;console.log(n),E=n,e.props.history.push("/home");fetch("".concat("https://feedme24.herokuapp.com/addProfile"),{method:"POST",body:"gmailAccount=".concat(E),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.error(e)})};return i.a.createElement("div",{className:"register"},i.a.createElement("h1",null,"FeedMe"),i.a.createElement("p",null,"Login with Google:"),i.a.createElement("div",{className:"g-signin"},i.a.createElement(b.a,{className:"gmailButton",clientId:"319145740916-5io3dfcp3l1m4ksa1k0nfjsvgrlevvlf.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t})))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={profile:{id:n.nextID(),gmailAccount:"",prohibitions:"",imageUrl:"",userName:""},editing:!1},n.getData=n.getData.bind(Object(d.a)(n)),n.add=n.add.bind(Object(d.a)(n)),n.nextID=n.nextID.bind(Object(d.a)(n)),n.save=n.save.bind(Object(d.a)(n)),n.edit=n.edit.bind(Object(d.a)(n)),n.handleImageUrl=n.handleImageUrl.bind(Object(d.a)(n)),n.handleProhabition=n.handleProhabition.bind(Object(d.a)(n)),n.handleUserName=n.handleUserName.bind(Object(d.a)(n)),n.setDataInDB=n.setDataInDB.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"nextID",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"getData",value:function(){var e=this;if(E){this.setState({profile:[]});var t="https://feedme24.herokuapp.com/getProfileByGmailAccount?gmailAccount=".concat(E);fetch("".concat(t)).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return e.add(t.gmailAccount,t.prohibitions,t.imageUrl,t.userName)})}).catch(function(e){return console.error(e)})}else console.log("Need to log in")}},{key:"add",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.setState(function(){return{profile:{id:e.nextID(),gmailAccount:t,prohibitions:n,imageUrl:a,userName:i}}})}},{key:"eachProfile",value:function(e,t){return i.a.createElement("div",{key:"profile".concat(t)},i.a.createElement("img",{alt:"",className:"profileImg",src:e.imageUrl}),i.a.createElement("h2",{className:"profileName"},e.userName),i.a.createElement("h3",{className:"profileDetails"},e.gmailAccount),i.a.createElement("h4",{className:"profileDetails"},"Prohabitions: ",e.prohibitions),i.a.createElement(g.b,{className:"editIcon"}))}},{key:"edit",value:function(){this.setState({editing:!0})}},{key:"setDataInDB",value:function(){if(E){var e=this.userName?this.userName:this.state.profile.userName,t=this.prohibitions?this.prohibitions:this.state.profile.prohibitions,n=this.imageUrl?this.imageUrl:this.state.profile.imageUrl;fetch("".concat("https://feedme24.herokuapp.com/editProfile"),{method:"POST",body:"userName=".concat(e,"&prohibitions=").concat(t,"&imageUrl=").concat(n,"&gmailAccount=").concat(this.state.profile.gmailAccount),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.error(e)}),this.setState({profile:{gmailAccount:this.state.profile.gmailAccount,prohibitions:t,imageUrl:n,userName:e}})}else console.log("Need to log in")}},{key:"save",value:function(){this.setDataInDB(),this.setState({editing:!1})}},{key:"handleProhabition",value:function(e){this.prohibitions=e.target.value}},{key:"handleUserName",value:function(e){this.userName=e.target.value}},{key:"handleImageUrl",value:function(e){this.imageUrl=e.target.value}},{key:"renderForm",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{key:"profile"},i.a.createElement("img",{alt:"",className:"profileImg",src:this.state.profile.imageUrl}),i.a.createElement("h2",{className:"profileName"},this.state.profile.userName),i.a.createElement("h3",{className:"profileDetails"},this.state.profile.gmailAccount),i.a.createElement("h4",{className:"profileDetails"},"Prohabitions: ",this.state.profile.prohibitions)),i.a.createElement("div",{className:"profileForm"},i.a.createElement("span",null,"First name",i.a.createElement(f.a.Control,{onChange:this.handleUserName,type:"text",placeholder:"First name"})),i.a.createElement("span",null,"Prohebition",i.a.createElement(f.a.Control,{onChange:this.handleProhabition,type:"text",placeholder:"Prohebition"})),i.a.createElement("span",null,"Image url",i.a.createElement(f.a.Control,{onChange:this.handleImageUrl,type:"text",placeholder:"Image url"})),i.a.createElement(p.a,{type:"submit",onClick:this.save},"Save")))}},{key:"renderUI",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{key:"profile"},i.a.createElement("img",{alt:"",className:"profileImg",src:this.state.profile.imageUrl}),i.a.createElement("h2",{className:"profileName"},this.state.profile.userName),i.a.createElement("h3",{className:"profileDetails"},this.state.profile.gmailAccount),i.a.createElement("h4",{className:"profileDetails"},"Prohabitions: ",this.state.profile.prohibitions),i.a.createElement(g.b,{className:"editIcon",onClick:this.edit})))}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderUI()}}]),t}(a.Component),k=n(20),I=(n(56),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"favorite"},i.a.createElement("div",null,this.props.children))}}]),t}(a.Component)),j=(n(57),n(21)),O=n(18),D=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"footerLeft"},i.a.createElement("h5",{className:"title"},"Find Us"),i.a.createElement("div",{className:"fork"},i.a.createElement(O.a,null)),i.a.createElement("p",null,"find us on FaceBook, Twitter and Instagram"),i.a.createElement("ul",null,i.a.createElement("li",{className:"fb"},i.a.createElement(j.a,null)),i.a.createElement("li",{className:"twit"},i.a.createElement(j.c,null)),i.a.createElement("li",{className:"insta"},i.a.createElement(j.b,null)))),i.a.createElement("div",{className:"footerCenter"},i.a.createElement("h5",{className:"title"},"About Us"),i.a.createElement("div",{className:"fork"},i.a.createElement(O.a,null)),i.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content.")),i.a.createElement("div",{className:"footerRight"},i.a.createElement("h5",{className:"title"},"About us"),i.a.createElement("div",{className:"fork"},i.a.createElement(O.a,null)),i.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content.")))},M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={favoriteList:[]},n.eachFavorite=n.eachFavorite.bind(Object(d.a)(n)),n.add=n.add.bind(Object(d.a)(n)),n.nextID=n.nextID.bind(Object(d.a)(n)),n.onDelete=n.onDelete.bind(Object(d.a)(n)),n.getData=n.getData.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;if(E){var t="https://feedme24.herokuapp.com/profileFavorite?gmailAccount=".concat(E);fetch("".concat(t)).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return e.add(t.strMeal,t.strArea,t.strMealThumb,t.strYoutube)})}).catch(function(e){return console.error(e)})}else console.log("Need to log in")}},{key:"onDelete",value:function(e){if(E){console.log("delete click");fetch("".concat("https://feedme24.herokuapp.com/removeFavorite"),{method:"POST",body:"gmailAccount=".concat(E,"&favName=").concat(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.error(e)});var t=this.state.favoriteList.filter(function(t){return t.nameMeal!==e});this.setState({favoriteList:t})}else console.log("Need to log in")}},{key:"add",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.setState(function(r){return{favoriteList:[].concat(Object(k.a)(r.favoriteList),[{id:e.nextID(),nameMeal:t,areaMeal:n,imageMeal:a,youtubeLink:i}])}})}},{key:"nextID",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"eachFavorite",value:function(e,t){var n=this;return i.a.createElement("div",{key:"container".concat(t),className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement(I,{key:"favorite".concat(t),index:t},i.a.createElement("h2",{className:"nameMeal"},e.nameMeal),i.a.createElement("h4",{className:"areaMeal"},e.areaMeal),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"youtubeLink",href:"".concat(e.youtubeLink)},"Video"),i.a.createElement("img",{className:"MealPhoto",alt:"".concat(e.nameMeal),src:"".concat(e.imageMeal)}),i.a.createElement(g.a,{className:"deleteIcon",onClick:function(){return n.onDelete(e.nameMeal)}}))))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"favoriteList"},i.a.createElement("h1",{className:"favoritesHead"},"Favorites"),this.state.favoriteList.map(this.eachFavorite)),i.a.createElement(D,null))}}]),t}(a.Component),C=n(80),x=n(78),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement("div",null,this.props.children))}}]),t}(a.Component),A=(n(58),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={ingredientList:[]},n.eachIngredient=n.eachIngredient.bind(Object(d.a)(n)),n.add=n.add.bind(Object(d.a)(n)),n.nextID=n.nextID.bind(Object(d.a)(n)),n.getData=n.getData.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("".concat("https://feedme24.herokuapp.com/ingredients/getAllIngredients")).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return e.add(t.ingredient,t.type,t.kosher)})}).catch(function(e){return console.error(e)})}},{key:"add",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState(function(i){return{ingredientList:[].concat(Object(k.a)(i.ingredientList),[{id:e.nextID(),ingredient:t,type:n,kosher:a}])}})}},{key:"nextID",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"eachIngredient",value:function(e,t){return i.a.createElement("section",{key:"container".concat(t),className:"ingredientBox"},i.a.createElement(w,{key:"ingredient".concat(t),index:t},i.a.createElement("h2",null,e.ingredient),i.a.createElement("h4",null,"Type: ",e.type),i.a.createElement("h4",null,"Kosher: ",e.kosher)))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"ingredients"},i.a.createElement("div",{className:"ingredientList"},i.a.createElement("div",{className:"containingBox"},i.a.createElement("h1",null,"Our Ingredients"),i.a.createElement("div",null,this.state.ingredientList.map(this.eachIngredient))))))}}]),t}(a.Component)),F=(n(59),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"recipe"},i.a.createElement("div",null,this.props.children))}}]),t}(a.Component)),L=n(40),U=n(41),P=n.n(U),S=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={ingredients:[],recipesList:[],ingredient1:null,ingredient2:null,ingredient3:null,userName:null,strMeal:null},n.add=n.add.bind(Object(d.a)(n)),n.nextID=n.nextID.bind(Object(d.a)(n)),n.eachIngredient=n.eachIngredient.bind(Object(d.a)(n)),n.getRecipeData=n.getRecipeData.bind(Object(d.a)(n)),n.addRecipe=n.addRecipe.bind(Object(d.a)(n)),n.handleChangeingredient1=n.handleChangeingredient1.bind(Object(d.a)(n)),n.handleChangeingredient2=n.handleChangeingredient2.bind(Object(d.a)(n)),n.handleChangeingredient3=n.handleChangeingredient3.bind(Object(d.a)(n)),n.eachRecipe=n.eachRecipe.bind(Object(d.a)(n)),n.getInstructionData=n.getInstructionData.bind(Object(d.a)(n)),n.addInstruction=n.addInstruction.bind(Object(d.a)(n)),n.handleChangestrMeal=n.handleChangestrMeal.bind(Object(d.a)(n)),n.getInstructionInfo=n.getInstructionInfo.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://feedme24.herokuapp.com/ingredients/getAllIngredients")).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return e.add(t.ingredient)})}).catch(function(e){return console.error(e)})}},{key:"nextID",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"handleChangeingredient1",value:function(e){this.setState({ingredient1:e.target.value})}},{key:"handleChangeingredient2",value:function(e){this.setState({ingredient2:e.target.value})}},{key:"handleChangeingredient3",value:function(e){this.setState({ingredient3:e.target.value})}},{key:"handleChangestrMeal",value:function(e){console.log(this.refs.strMeal1),this.setState({strMeal:e.target.value})}},{key:"add",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.setState(function(n){return{ingredients:[].concat(Object(k.a)(n.ingredients),[{id:e.nextID(),ingredient:t}])}})}},{key:"eachIngredient",value:function(e,t){return i.a.createElement("option",{key:"ingredient".concat(t)},e.ingredient)}},{key:"onAddToFav",value:function(e){if(E){fetch("".concat("https://feedme24.herokuapp.com/addFavorite"),{method:"POST",body:"gmailAccount=".concat(E,"&favName=").concat(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}else console.log("Need to log in")}},{key:"getRecipeData",value:function(){var e=this;if(E){this.setState({recipesList:[]});var t="https://feedme24.herokuapp.com/recipes?gmailAccount=".concat(E,"&ingredient1=").concat(this.state.ingredient1,"&ingredient2=").concat(this.state.ingredient2,"&ingredient3=").concat(this.state.ingredient3);fetch("".concat(t)).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return e.addRecipe(t.strMeal,t.strMealThumb,t.idMeal)})}).catch(function(e){return console.error(e)}),console.log(this.state.recipesList)}else console.log("Need to log in")}},{key:"addRecipe",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.setState(function(i){return{recipesList:[].concat(Object(k.a)(i.recipesList),[{id:e.nextID(),strMeal:t,strMealThumb:n,idMeal:a}])}})}},{key:"getInstructionData",value:function(e){var t=this,n="https://feedme24.herokuapp.com/getInstruction/".concat(e);fetch("".concat(n)).then(function(e){return e.json()}).then(function(e){return t.addInstruction(e[0].strMeal,e[0].strCategory,e[0].strArea,e[0].strInstructions,e[0].strMealThumb,e[0].strYoutube)}).catch(function(e){return console.error(e)})}},{key:"addInstruction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.instructions={id:this.nextID(),strMeal:e,strCategory:t,strArea:n,strInstructions:a,strMealThumb:i,strYoutube:r},this.forceUpdate()}},{key:"getInstructionInfo",value:function(){return this.instructions?i.a.createElement("div",null,i.a.createElement("h3",null,this.instructions.strMeal," instructions"),i.a.createElement("h5",null,this.instructions.strArea),i.a.createElement("h6",{className:"instructionsInfo"},this.instructions.strInstructions),i.a.createElement("img",{alt:"",className:"MealPhoto",src:"".concat(this.instructions.strMealThumb)}),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"youtubeLink",href:"".concat(this.instructions.strYoutube)},this.instructions.strMeal," Video")):i.a.createElement("div",null)}},{key:"eachRecipe",value:function(e,t){var n=this;return i.a.createElement("div",{key:"container".concat(t),className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement(F,{key:"recipe".concat(t),index:t},i.a.createElement("h4",{className:"strMeal",ref:"strMeal".concat(t),onClick:this.handleChangestrMeal},e.strMeal),i.a.createElement("img",{alt:"",className:"MealPhoto",src:"".concat(e.strMealThumb)}),i.a.createElement("button",{className:"addButton"},i.a.createElement(L.a,{className:"addIcon",onClick:function(){return n.onAddToFav(e.strMeal)}})),i.a.createElement(P.a,{className:"recipeInstructions",onClick:function(){return n.getInstructionData(e.strMeal)}},"recipe instructions"))))}},{key:"render",value:function(){return i.a.createElement("div",{className:"mainFunc"},i.a.createElement("div",{className:"mainFunc"},i.a.createElement("div",{className:"searchBG"}),i.a.createElement("h1",null,"Search Recipe"),i.a.createElement(O.a,null),i.a.createElement("h2",{className:"instruction"},"Enter 3 ingredients"),i.a.createElement("div",{className:"recipeForm"},i.a.createElement("span",{className:"color-picker"}),i.a.createElement("label",null,i.a.createElement("span",{className:"custom-dropdown big"},i.a.createElement("select",{type:"text",name:"ingredient1",onChange:this.handleChangeingredient1},i.a.createElement("option",null," -- 1st ingredient -- "),this.state.ingredients.map(this.eachIngredient)))),i.a.createElement("label",null,i.a.createElement("span",{className:"custom-dropdown big"},i.a.createElement("select",{type:"text",name:"ingredient2",onChange:this.handleChangeingredient2},i.a.createElement("option",null," -- 2nd ingredient -- "),this.state.ingredients.map(this.eachIngredient)))),i.a.createElement("label",null,i.a.createElement("span",{className:"custom-dropdown big"},i.a.createElement("select",{type:"text",name:"ingredient3",onChange:this.handleChangeingredient3},i.a.createElement("option",null," -- 3rd ingredient -- "),this.state.ingredients.map(this.eachIngredient)))),i.a.createElement("input",{className:"send",type:"submit",name:"submit",value:"submit",onClick:this.getRecipeData}))),i.a.createElement("div",{className:"recipeList"},this.state.recipesList.map(this.eachRecipe)),i.a.createElement("div",null,this.getInstructionInfo()),i.a.createElement(D,null))}}]),t}(a.Component),T=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{className:"Navbar",bg:"dark"},i.a.createElement("a",{href:"/"},i.a.createElement(O.a,{className:"logo"})),i.a.createElement(C.a,{exact:!0,to:"/Home"},i.a.createElement(x.a.Brand,{className:"NavbarElement"},"Home")),i.a.createElement(C.a,{exact:!0,to:"/MyFavorites"},i.a.createElement(x.a.Brand,null,"Favorites")),i.a.createElement(C.a,{exact:!0,to:"/Ingredients"},i.a.createElement(x.a.Brand,null,"Ingredients")),i.a.createElement(C.a,{exact:!0,to:"/MyProfile"},i.a.createElement(x.a.Brand,null,"Profile"))),i.a.createElement(l.a,{exact:!0,path:"/",component:y}),i.a.createElement(l.a,{exact:!0,path:"/Home",component:S}),i.a.createElement(l.a,{path:"/Ingredients",component:A}),i.a.createElement(l.a,{path:"/Register",component:y}),i.a.createElement(l.a,{path:"/MyFavorites",component:M}),i.a.createElement(l.a,{path:"/MyProfile",component:N}))},B=n(79);c.a.render(i.a.createElement(B.a,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.fbd05fad.chunk.js.map