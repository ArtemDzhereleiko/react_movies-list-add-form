(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),m=(a(15),a(9)),o=a(1),s=a(2),c=a(4),d=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var g=a(5),b=n.a.memo((function(e){var t=e.name,a=e.value,i=e.onChange,r=e.required,l=e.validate,m=e.valid,o=e.onBlur,s=e.blured,c=r&&!a.length&&s,d=l&&!m&&s,u=t.charAt(0).toUpperCase()+t.slice(1)+(r?"*":"");return n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:t,placeholder:u,className:"form-control mb-4 input\n          ".concat(c||d?"warning-input":""),value:a,onChange:i,onBlur:o,autoComplete:"off"}),c&&n.a.createElement("span",{className:"error-message"},"".concat(t," is required"),n.a.createElement("br",null)),d&&n.a.createElement("span",{className:"error-message"},"".concat(t," is invalid")))})),p=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",imgUrlValidate:!1,imdbUrlValidate:!1,titleBlur:!1,imgUrlBlur:!1,imdbUrlBlur:!1,imdbIdBlur:!1},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(g.a)({},i,n))},e.onSubmit=function(t){t.preventDefault();var a=e.state,i=a.title,n=a.description,r=a.imgUrl,l=a.imdbUrl,m=a.imdbId;(0,e.props.addMovie)({title:i,description:n,imgUrl:r,imdbUrl:l,imdbId:m}),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",imgUrlValidate:!1,imdbUrlValidate:!1,titleBlur:!1,imgUrlBlur:!1,imdbUrlBlur:!1,imdbIdBlur:!1})},e.onBlur=function(t){var a=t.target,i=a.name,n=a.value;if(e.setState(Object(g.a)({},"".concat(i,"Blur"),!0)),"imgUrl"===i||"imdbUrl"===i){e.setState(Object(g.a)({},"".concat(i,"Validate"),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(n)))}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,r=t.imgUrl,l=t.imdbUrl,m=t.imdbId,o=t.imgUrlValidate,s=t.imdbUrlValidate,c=t.titleBlur,d=t.imgUrlBlur,u=t.imdbUrlBlur,h=t.imdbIdBlur,g=!!a&&!!m&&o&&s;return n.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},n.a.createElement(b,{name:"title",value:a,onChange:this.handleChange,required:!0,onBlur:this.onBlur,blured:c}),n.a.createElement(b,{name:"description",value:i,onChange:this.handleChange,onBlur:this.onBlur}),n.a.createElement(b,{name:"imgUrl",value:r,onChange:this.handleChange,required:!0,validate:!0,valid:o,onBlur:this.onBlur,blured:d}),n.a.createElement(b,{name:"imdbUrl",value:l,onChange:this.handleChange,required:!0,validate:!0,valid:s,onBlur:this.onBlur,blured:u}),n.a.createElement(b,{name:"imdbId",value:m,onChange:this.handleChange,required:!0,onBlur:this.onBlur,blured:h}),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:!1===g&&"disabled",style:!1===g?{backgroundColor:"grey"}:{}},"Submit"))}}]),a}(i.Component),v=a(8),f=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(p,{addMovie:this.addMovie})))}}]),a}(i.Component));l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.256a8946.chunk.js.map