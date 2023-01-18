let btn = document.getElementById("btn")
let nameBar = document.getElementById("name")
let autBar = document.getElementById("author")
let typeBar = document.getElementById("type")
let Cards = document.querySelector(".cards")

// fetch data from 

fetch("./books.json").then(Response => {

        if ( Response.ok ){
            return Response.json()
        }
        else{
            return Reject.Response
        }

}).then(data => {
    console.log(data);
    let d = []
    data.books.forEach( element => {
        let div = document.createElement("div")
        div.classList.add("box")
        div.innerHTML=`<div class="image">
               <img
           src=${element.image}
       />
       </div>
       <div class="card">
           <h2>${element.name}</h2>
           <h4>${element.author}</h4>
           <h4>${element.category}</h4>
           <p>
           ${element.discription.slice(0,190)}.....
           </p>
       </div>`
       Cards.append(div)
    })
    btn.addEventListener("click", function() {
        Cards.innerHTML=""
        d=data.books.filter(e=>
        e.name.toUpperCase()==nameBar.value.toUpperCase()||e.author.toUpperCase()==autBar.value.toUpperCase()||e.category.toUpperCase()==typeBar.value.toUpperCase())
        console.log(d);
    
        d.forEach(elem =>{
            let div1 = document.createElement("div")
            div1.classList.add("box")
            div1.innerHTML=`<div class="image">
                   <img
               src=${elem.image}
           />
           </div>
           <div class="card">
               <h2>${elem.name}</h2>
               <h4>${elem.author}</h4>
               <h4>${elem.category}</h4>
               <p>
               ${elem.discription.slice(0,190)}.....
               </p>
           </div>`
           Cards.append(div1)
           })
        })
    })







