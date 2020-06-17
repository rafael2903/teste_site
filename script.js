const botao = document.querySelector(".botao")
const menu = document.querySelector(".menu")
const label = document.querySelector(".label-botao")

botao.addEventListener("click", function() {
    menu.classList.toggle("close")
    label.classList.toggle("label-botao-close")
})


// botaoClose.addEventListener("click", function() {
//     menu.classList.add("close")
//     label.classList.add("close")
// })