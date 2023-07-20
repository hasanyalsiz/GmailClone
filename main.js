// const pencil = document.querySelector(".bi-pencil-fill")


// pencil.style.fontSize = "20px"
// pencil.style.color = "red"


// const pencil = document.querySelector(".right .toggle-btn");

// function(tikla){
//     if (this === tikla) {
//         pencil.style.color = "blue"


// }}
// document.addEventListener("DOMContentLoaded", function() {
//     var toggleBtn = document.querySelector(".toggle-btn");
//     toggleBtn.style.setProperty("background", "blue");


//   });
/*  
document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.querySelector(".toggle-btn");
    
    toggleBtn.addEventListener("click", function() {
      toggleBtn.classList.toggle("active");
    });
  });
  */

 // const fresh=document.querySelector(".bi-arrow-clockwise")
  //console.log(fresh)

  //fresh.style.color="red"


//   document.addEventListener("DOMContentLoaded", function(){
//     var arrow =document.querySelector(".bi-arrow-clockwise");

//     arrow.addEventListener("click", function(){
        
//         arrow.classList.toggle("active")
//     })
//   })


const gmail = document.querySelector("header .left span")


let parag= document.createElement("h6")
parag.textContent ="Welcome!"
gmail.appendChild(parag);

setTimeout(() => {
    parag.remove()
}, 4000);

setTimeout(() => {
    parag.style.color= "red"
},3000);


setTimeout(() => {
    parag.style.color= "green"
}, 1000);


setTimeout(() => {
    parag.style.color= "blue"
    
    
}, 2000);

