let value = document.querySelector(".value")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let reset = document.querySelector(".reset")

inc.addEventListener("click", (e)=>{
    value.innerText = parseInt(value.innerText) + 1;
})
dec.addEventListener("click", (e)=>{
    value.innerText = parseInt(value.innerText) - 1;
})
reset.addEventListener("click", (e)=>{
    value.innerText = 0;
})