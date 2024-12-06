(function(){"use strict";var e={8893:function(e,t,r){var o=r(3751),n=r(641),s=r(33),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAn9JREFUSEuNlVuIj1EUxX/jLve7oVEyL4YoNVIeRBG5lSmXlKmZSZkXUZRIPAxSaBp5kfslTxPyoJSax3lBRIkXpiRq3OU+s9fY/xz/vvN957zMN6d99tprr73XvwIYCPTn3+kBvgf/h58VQeyvSMx/13owH5gR3H4DOoFXGQkGAbP9/l4qwDmgzoMFKEZ6vDiDyUTgFFAJLEwFWAIs9+ChwFJgFLDRQDrKkihxu4EIKGQdxVLF4RltVe+x9mwFDgNHgX6A7qXTZOAiMAao9Yd/gA/Ab2c/PNDpRznAYGAlcAW46SymOKiSD3O2X4DbDvDOGJ8AntvdAmC9F6IheFIOoDfTTZNHwEMTewWwCDgJDAjY6PuNA3wCpONpZ70aUKtHAI+zACZ5G+YCW4C79niqVzUW2A9UBYOhkX7gBShO2ojFJuB4FsAQm6I1xuSCt2lDIFKRyMon8BvABGBVFoDoS8A73qZwXKXDJUAs50T2ZBlwHbivPFkAeqdEEroG2Oxt0r1EXgtMA45kAAj4vDGfBzQCt2IAGrUGG7sWS3YW2J6wVBrnWa7HU0D79ToGkNemGNZIYKftxA6JCxxUYAyg1KZrwExgm1eWR6RkI3IBWY8mKxdAgbu9KjFKOV+Bq15QX3weAyWVyHtd9BSAbm9NX/VFACkJC2NiDHQvX9K6/wTeF2b6ayUyRZmf4vU32iJts2y73vbgGXAIkOfEjpJrGOTEclbtyIs8gNKiaZbfuthaoNgZ50mbbCg+Am3AvjyA8eb5re6mLy3wgK9/DEATt8scttkBjjlItEX6cak2L1pnK99l35cTNBCItv+zGd6ZIg0S8qWF5O1BWoaCqF59cGwnHxxiKQAAAABJRU5ErkJggg==";const a={id:"app"},l={key:0},u=["onClick"],d={key:0,style:{color:"red"}},c={key:0,style:{color:"red"}},m=["disabled"],p={key:1},h={id:"sortOptions"},v={id:"Lessons"},b={id:"lessonItems"},k={class:"lessonDescription"},y=["src"],f=["onClick","disabled"];function A(e,t,r,A,L,g){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",a,[(0,n.Lk)("header",null,[(0,n.Lk)("h1",null,(0,s.v_)(L.sitename),1)]),t[13]||(t[13]=(0,n.Lk)("link",{href:"https://fonts.googleapis.com/css?family=Fraunces",rel:"stylesheet"},null,-1)),t[14]||(t[14]=(0,n.Lk)("title",null,"Coursework for Full Stack",-1))]),(0,n.Lk)("main",null,[(0,n.Lk)("a",{id:"cart",onClick:t[0]||(t[0]=(...e)=>g.toggleCart&&g.toggleCart(...e)),class:(0,s.C4)({disabled:L.cart.length<1})},[t[15]||(t[15]=(0,n.Lk)("img",{alt:"Cart",id:"carticon",src:i},null,-1)),(0,n.eW)(" "+(0,s.v_)(g.NOfItemsInCart)+" "+(0,s.v_)(L.cart.length>0?"View your cart":"No items in cart"),1)],2),L.cartVisible?((0,n.uX)(),(0,n.CE)("div",l,[t[19]||(t[19]=(0,n.Lk)("h2",null,"Shopping Cart",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(L.cart,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t},[(0,n.eW)((0,s.v_)(e.subject)+" ",1),(0,n.Lk)("button",{onClick:r=>g.removeFromCart(t,e)},"Remove",8,u)])))),128))]),t[20]||(t[20]=(0,n.Lk)("h2",null,"Welcome to Checkout",-1)),(0,n.Lk)("p",null,[t[16]||(t[16]=(0,n.eW)(" First name: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>L.order.firstname=e),onInput:t[2]||(t[2]=(...e)=>g.validateName&&g.validateName(...e)),placeholder:"Enter your name"},null,544),[[o.Jo,L.order.firstname]])]),(0,n.Lk)("p",null,[t[17]||(t[17]=(0,n.eW)(" Surname: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>L.order.surname=e),onInput:t[4]||(t[4]=(...e)=>g.validateName&&g.validateName(...e)),placeholder:"Enter your name"},null,544),[[o.Jo,L.order.surname]]),L.order.firstname&&!L.isNameValid?((0,n.uX)(),(0,n.CE)("span",d," Name must contain letters only. ")):(0,n.Q3)("",!0)]),(0,n.Lk)("p",null,[t[18]||(t[18]=(0,n.eW)(" Phone Number: ")),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>L.order.phonenumber=e),onInput:t[6]||(t[6]=(...e)=>g.validatePhone&&g.validatePhone(...e)),placeholder:"Enter your phone number"},null,544),[[o.Jo,L.order.phonenumber]]),L.order.phonenumber&&!L.isPhoneValid?((0,n.uX)(),(0,n.CE)("span",c," Phone number must contain numbers only. ")):(0,n.Q3)("",!0)]),t[21]||(t[21]=(0,n.Lk)("p",null,"Email:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>L.order.email=e)},null,512),[[o.Jo,L.order.email]]),t[22]||(t[22]=(0,n.Lk)("p",null,"Zip/Postcode:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>L.order.postcode=e)},null,512),[[o.Jo,L.order.postcode]]),t[23]||(t[23]=(0,n.Lk)("p",null,"Address:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>L.order.address=e)},null,512),[[o.Jo,L.order.address]]),t[24]||(t[24]=(0,n.Lk)("h2",null," Order Information ",-1)),(0,n.Lk)("p",null,"Name: "+(0,s.v_)(L.order.firstname),1),(0,n.Lk)("p",null,"Surname: "+(0,s.v_)(L.order.surname),1),(0,n.Lk)("p",null,"Phone number: "+(0,s.v_)(L.order.phonenumber),1),(0,n.Lk)("p",null,"Email: "+(0,s.v_)(L.order.email),1),(0,n.Lk)("p",null,"Zip/Postcode: "+(0,s.v_)(L.order.postcode),1),(0,n.Lk)("p",null,"Deliver to address: "+(0,s.v_)(L.order.address),1),(0,n.eW)(" "+(0,s.v_)(L.order.lesson)+" ",1),(0,n.Lk)("button",{disabled:!g.isFormValid,onClick:t[10]||(t[10]=(...e)=>g.submitCheckoutButton&&g.submitCheckoutButton(...e))},"Place Order",8,m)])):((0,n.uX)(),(0,n.CE)("div",p,[t[30]||(t[30]=(0,n.Lk)("div",{id:"SearchFunctionality"},[(0,n.Lk)("input",{type:"text",id:"searchBar"}),(0,n.Lk)("button",{id:"searchButton"},"Search lessons")],-1)),(0,n.Lk)("div",h,[t[27]||(t[27]=(0,n.Lk)("label",{for:"sortBy"},"Sort by:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[11]||(t[11]=e=>L.sortBy=e)},t[25]||(t[25]=[(0,n.Lk)("option",{value:"subject"},"Subject",-1),(0,n.Lk)("option",{value:"location"},"Location",-1),(0,n.Lk)("option",{value:"price"},"Price",-1),(0,n.Lk)("option",{value:"availability"},"Availability",-1)]),512),[[o.u1,L.sortBy]]),t[28]||(t[28]=(0,n.Lk)("label",{for:"sortOrder"},"Order:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[12]||(t[12]=e=>L.sortOrder=e)},t[26]||(t[26]=[(0,n.Lk)("option",{value:"asc"},"Ascending",-1),(0,n.Lk)("option",{value:"desc"},"Descending",-1)]),512),[[o.u1,L.sortOrder]])]),(0,n.Lk)("div",v,[(0,n.Lk)("div",b,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(g.sortedLessons,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"lesson-item"},[(0,n.Lk)("h3",null,(0,s.v_)(e.subject),1),(0,n.Lk)("p",null,"Location: "+(0,s.v_)(e.location),1),(0,n.Lk)("p",null,"Price: £"+(0,s.v_)(e.price)+" per hour",1),(0,n.Lk)("p",k,(0,s.v_)(e.description),1),(0,n.Lk)("p",null,"Availability: "+(0,s.v_)(e.availability)+" spaces",1),(0,n.Lk)("img",{src:e.image,alt:"Lesson Image",class:"lesson-image"},null,8,y),t[29]||(t[29]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("button",{class:"addToCartButton",onClick:t=>g.addToCart(e),disabled:e.availability<1},(0,s.v_)(e.availability>0?"Add to Cart":"No spaces available"),9,f)])))),128))])])]))])],64)}r(4114),r(8992),r(2577),r(1454);var L={name:"App",components:{},data(){return{sitename:"Extra Lessons Store",lessons:[],cartVisible:!1,cart:[],lessonCategories:["English","Maths","Science","Geography"],order:{firstname:"",surname:"",phonenumber:"",email:"",postcode:"",address:"",lessonid:""},lesson:{lessonId:"",subject:"",location:"",price:0,description:"",availability:5,image:""},isNameValid:!1,isPhoneValid:!1,sortBy:"subject",sortOrder:"asc"}},methods:{validateName(){const e=/^[A-Za-z\s]+$/;this.isNameValid=e.test(this.order.firstname),this.isNameValid=e.test(this.order.surname)},validatePhone(){const e=/^[0-9]+$/;this.isPhoneValid=e.test(this.order.phonenumber)},addToCart(e){e.availability>0?(this.cart.push({...e}),e.availability--,alert(`Successfully added lesson to cart. Remaining left: ${e.availability}`)):alert("No lessons available")},toggleCart(){this.NOfItemsInCart>0?this.cartVisible=!this.cartVisible:alert("No items in cart to view. Please add to cart before you continue")},removeFromCart(e,t){this.cart.splice(e,1);const r=this.lessons.find((e=>e.id===t.id));r&&r.availability++},submitCheckoutButton(){const e=/^[A-Za-z]+$/,t=/^[0-9]+$/;if(!e.test(this.order.firstname))return void alert("Name must contain letters only.");if(!e.test(this.order.surname))return void alert("Name must contain letters only.");if(!t.test(this.order.phonenumber))return void alert("Phone must contain numbers only.");if(!this.order.firstname||!this.order.surname||!this.order.phonenumber||!this.order.email||!this.order.address)return void alert("Please fill out all required fields.");const r={firstname:this.order.firstname,surname:this.order.surname,phonenumber:this.order.phonenumber,email:this.order.email,postcode:this.order.postcode,address:this.order.address,lessonIDs:this.cart.map((e=>e._id||e.lessonId))};fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((e=>{if(!e.ok)throw new Error("Failed to submit order. Please try again.");return e.json()})).then((e=>{alert("Order placed successfully!"),console.log("Order response:",e),this.cart=[],this.order={firstname:"",surname:"",phonenumber:"",email:"",postcode:"",address:"",lessonid:""}})).catch((e=>{console.error("Error submitting order:",e),alert("There was a problem placing your order. Please try again.")}))}},computed:{isFormValid(){const e=/^[A-Za-z]+$/,t=/^[0-9]+$/;return e.test(this.order.firstname)&&e.test(this.order.surname)&&t.test(this.order.phonenumber)},NOfItemsInCart(){return this.cart.length},isAvailable(){return this.lessons.availability>this.NOfItemsInCart},sortedLessons(){const e=[...this.lessons];return e.sort(((e,t)=>"price"===this.sortBy?e.price-t.price:"availability"===this.sortBy?e.availability-t.availability:"subject"===this.sortBy||"location"===this.sortBy?e[this.sortBy].localeCompare(t[this.sortBy]):void 0)),"desc"===this.sortOrder&&e.reverse(),e}},created:function(){const e=this;fetch("https://lessons-ecommerce-website-rest-api3.onrender.com/lessons").then((function(t){t.json().then((function(t){alert("Successfully connected to server"),console.log(t),e.lessons=t}))}))},isCartNotEmpty(){return this.cart.length>0}},g=r(6262);const C=(0,g.A)(L,[["render",A]]);var O=C;(0,o.Ef)(O).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,s){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],s=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,n,s]}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,i=o[0],a=o[1],l=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(t&&t(o);u<i.length;u++)s=i[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8893)}));o=r.O(o)})();
//# sourceMappingURL=app.27af3492.js.map