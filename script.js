const altXett = document.querySelectorAll(".alt-xett");
const ad = document.querySelectorAll(".ad");
const cursor = document.querySelectorAll(".cursor");
const button = document.querySelector(".navbar-button");
const menyu = document.querySelector(".linkler-menyu");


button.addEventListener("click", function () {
  menyu.classList.toggle("none");
});


for (let j = 0; j < altXett.length; j++) {
    altXett[j].addEventListener("mouseover", function () {
        ad[j].classList.toggle("hidden")
    })
    altXett[j].addEventListener("mouseout", function () {
        ad[j].classList.toggle("hidden")
    })
}
for (let k = 0; k < cursor.length; k++) {
    cursor[k].addEventListener("mouseover", function () {
        cursor[k].classList.toggle("hover")
    })
    cursor[k].addEventListener("mouseout", function () {
        cursor[k].classList.toggle("hover")
    })
    
}