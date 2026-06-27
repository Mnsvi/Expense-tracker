let nameIp = document.querySelector(".name");
let amtIp = document.querySelector(".amt");
let button = document.querySelector(".addexp");
let nameop = document.querySelector(".nameop");
let amtop = document.querySelector(".amtop");


button.addEventListener("click", ()=>{
    nameop.textContent= nameIp.value;
    amtop.textContent= amtIp.value;
    nameop.style.fontSize = "15px";
})